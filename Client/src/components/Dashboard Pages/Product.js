import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { UserSidebarData } from "../UserSidebarData";
import "../Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";
import { IconContext } from "react-icons";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Area,
  Bar,
  ComposedChart,
} from "recharts";
import "./Product.css";
import Axios from "axios";
import Table from "react-bootstrap/Table";

function products() {
  const [sidebar, setSidebar] = useState(false);
  const [items, setitems] = useState({});
  const showSidebar = () => setSidebar(!sidebar);
  const [search, SetSearch] = useState("");
  const [data, setData] = useState([]);

  const getData = () => {
    Axios.get("http://localhost:3001/data").then((res) => {
      setData(res.data);
    });
    console.log("Success");
  };

  const searchText = (e) => {
    SetSearch(e.target.value);
  };
  let dataSearch = data.filter((val) => {
    return Object.keys(val).some((key) =>
      val[key]
        .toString()
        .toLowerCase()
        .includes(search.toString().toLowerCase())
    );
  });
  // const [file, setFile] = useState(initialState: null);

  const onInputChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="navbar2">
        <Link to="#" className="menu-bars2">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        {/* <img src='images/logo.png' className="nav-image2"/> */}
        <h1 className="main-heading">MTP</h1>
      </div>
      <nav className={sidebar ? "nav-menu2 active" : "nav-menu2"}>
        <ul className="nav-menu-items2" onClick={showSidebar}>
          <li className="navbar-toggle2">
            <Link to="#" className="menu-bars2">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>

          {UserSidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="searchdiv" style={{marginLeft:'200px',}}>
        <h5>Input product to search:</h5>
        <input
          type="text"
          placeholder="Search...."
          value={search}
          onChange={searchText.bind(this)}
          style={{
            justifyContent: "center",
          }}
        />
      </div>
      <div style={{marginLeft: '200px'}}>
        <Button
          onClick={getData}
          style={{
            color: "white",
            padding: "5px 22px",
            "background-color": "#8F18B3",
            margin: "3px",
          }}
        >
          Display Products
        </Button>

        {dataSearch.map((val, index) => {
          return (
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>asins</th>
                  <th>brand</th>
                  <th>name</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Weekly_Sales</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>{val.asins}</th>
                  <th>{val.brand}</th>
                  <th>{val.name}</th>
                  <th>{val.Price}</th>
                  <th>{val.Date}</th>
                  <th>{val.Weekly_Sales}</th>
                </tr>
              </tbody>
            </Table>
          );
        })}
      </div>
    </IconContext.Provider>
  );
}

export default products;