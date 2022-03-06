const express = require("express");
const app = express();
const upload = require('express-fileupload');    //For Uploading Data
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const mysql = require("mysql");
const { request, response } = require("express");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "codeblocks",
  database: "mtp1",
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
  })
);

app.use(cookieParser());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    key: "userId",
    secret: "mtp",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24 * 10000,
    },
  })
);
app.post("/api/insert", (req, res) => {
  const name = req.body.name;
  const uname = req.body.uname;
  const email = req.body.email;
  const pass = req.body.pass;
  const conpass = req.body.conpass;
  const sqlInsert =
    "INSERT INTO users (name, uname, email, pass, conpass) VALUES (?,?,?,?,?);";
  bcrypt.hash(pass, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }
    db.query(sqlInsert, [name, uname, email, hash, hash], (err, result) => {
      console.log(err);
    });
  });
});

app.post("/api/message", (req, res) => {
  const email = req.body.email;
  const subject = req.body.subject;
  const description = req.body.description;
  const file = req.body.file;

  const sqlInsert = 
    "INSERT INTO message (email, subject, description, file) VALUES (?,?,?,?);";
    // if (err) {
    //   console.log(err);
    // }
    db.query(sqlInsert, [email, subject, description, file], (err, result) => {
      console.log(err);
    });
});


app.get("/login", (req,res)=>{
  if (req.session.user){
    res.send({loggedIn: true, user: req.session.user})
  } else{
    res.send({loggedIn: false})
  }
});

app.get("/message", (req, res) =>{
    const sqlSelect = "SELECT * FROM message";
    db.query(sqlSelect, (err, result) => {
      res.send(result);
    });
});

app.get("/users", (req,res) =>{
  const sqlSelect = "SELECT * FROM users";
  db.query(sqlSelect, (err, result) =>{
    res.send(result);
  });
});

app.post("/login", (req, res) => {
  const uname = req.body.uname;
  const pass = req.body.pass;
  const isAdmin = req.body.isAdmin


  db.query("SELECT * FROM users WHERE uname= ?", uname, (err, result) => {
    if (err) {
      res.send({ err: err });
    }


    if (result.length > 0) {
      bcrypt.compare(pass, result[0].pass, (error, response) => {
        if (response) {
          req.session.user = result;
          console.log(req.session.user);
          res.send(result);
        } else {
          res.send({ message: "Wrong username or Password" });
        }
      });
    } else {
      res.send({ message: "User dosn't exist" });
    }
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});


// app.listen(3002, () => {
//   console.log("running on port 3002");
// });
