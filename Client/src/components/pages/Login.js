import React, { useState, useEffect } from "react";
// import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Parcing from "./Parcing";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Navbar from "../Navbar";
import "../Login.css";
import Axios from "axios";
import { useHistory } from "react-router";
import SignUp from "./SignUp";
import GoogleLogin from "react-google-login";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history=useHistory();
  const [loginStatus, setLoginStatus] = useState("");
  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
    ? JSON.parse(localStorage.getItem('loginData'))
    :null
  );
  Axios.defaults.withCredentials = true;

  const login = () => {
    if(username == 'ayan123'){

    Axios.post("http://localhost:3001/login", {
      uname: username,
      pass: password,
    }).then((response) => {
      if (response.data.message) {
        alert(response.data.message);
      } else {
        history.push("/Dashboard");
      }
    });
  }
  else{
    Axios.post("http://localhost:3001/login", {
      uname: username,
      pass: password,
    }).then((response) => {
      if (response.data.message) {
        alert(response.data.message);
      } else {
        history.push("/UserDashboard");
        console.log(response);
      }
    });
  }
  };
/*   useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true){
      setLoginStatus(response.data.user[0].uname);
      }
    });
  }, []);
  function handleSubmit(event) {
    event.preventDefault();
  } */


    const handleFailure = (res) =>{
      console.log("Login Failed: ", res);
    };

    const handleLogin = (googleData) =>{
        // const res = await fetch('/api/google-login', {
        //   method: 'POST',
        //   body: JSON.stringify({
        //     token:googleData.tokenId,
        //   }),
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        // });

        // const data = await res.json();
        // setLoginData(data);
        // localStorage.setItem('loginData', JSON.stringify(data));
        console.log(googleData);
        // history.push("/Dashboard");
    };

    const clientId = "695355930495-q10pm4mkq8ct159o03tt4ef51o4vbe32.apps.googleusercontent.com";

  return (
    <div className="major">
      <Navbar />
        <div className="container main-div">
          <div className="image-div">
          <img src="https://image.freepik.com/free-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg" alt="" width="100%" height="100%" />
          </div>
            <div className="login-div mt-5">
              <div className="row">
                <div className="col mt-5">
                  <h3 style={{textAlign: "left"}}>Login To MTP</h3>
                  <Form className="mt-4">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control className="email-password-input"
                        type="text"
                        placeholder="Enter username"
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control className="email-password-input"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                      {/* <Form.Label className="forget-password">
                        Forget Password?
                      </Form.Label> */}
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check className="check" type="checkbox" label="Remember me" />
                    </Form.Group> */}
                    <div className="text-center">
                      <Button className="login-button" type="button" onClick={login}>
                        login
                      </Button>

                        {loginData ? (
                          <div>
                            <h5>You Logged in as {loginData.email}</h5>
                          </div>
                        ) : (
                        

                      <GoogleLogin
                          clientId={clientId}
                          buttonText="Login with Google"
                          onSuccess={handleLogin}
                          onFailure={handleFailure}
                          cookiePolicy={'single_host_origin'}
                      ></GoogleLogin>
                      )}
                    </div>
                    <h1>{loginStatus}</h1>
                    <div className="text-center mt-4">
                      <Form.Group style={{textAlign: "left"}} className="mb-3" controlId="formBasicPassword">
                        <Form.Label>
                          New to Meet The Product ?{" "}
                          <span className="link"> SignUp Now</span>
                        </Form.Label>
                        <Form.Label>
                          Problems or questions ?{" "}
                          <span className="link"> Contact Us </span>
                        </Form.Label>
                      </Form.Group>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}
