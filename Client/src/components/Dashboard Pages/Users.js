import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Container, Row, Table, Dropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SidebarData } from '../SidebarData';
import '../Dashboard.css';
import { IconContext } from 'react-icons';
import Axios from "axios";
import { useHistory } from "react-router";


function Reports() {
  const [sidebar, setSidebar] = useState(false);

  const [loginStatus, setLoginStatus] = useState("");

  const showSidebar = () => setSidebar(!sidebar);
  const [emailStatus, setEmailStatus] = useState("");

  const [username, setUsername] = useState("");

  const[users, setUsers] = useState([]);
  const[item, setItem] = useState({});

  const history = useHistory();

  const handleLogout = () => {
    removeUserSession();
    history.push('/login');
  };

  const removeUserSession = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  };
  const setUserSession = (token, user) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
  };

  Axios.defaults.withCredentials = true;
   const getUser = () => {
    const userStr = sessionStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);
    else return null;
  };
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].uname);
        setEmailStatus(response.data.user[0].email);
        setUsername(response.data.user[0].name);
      }
    });
  }, []);

  useEffect(()=>{
    Axios.get("http://localhost:3001/users").then((response)=>{
        setUsers(response.data)
    })
});

  return (
   
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar2'>
            
          
          <Link to='#' className='menu-bars2'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          {/* <img src='images/logo.png' className="nav-image2"/> */}
          <h1 className='main-heading'>MTP</h1>
          <div className="main-div">
              <div>
                <Dropdown>
                  <Dropdown.Toggle className="login-name" id="dropdown-basic">
                    {loginStatus}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item className="item-name" href="/Profile">
                      My Profile
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="item-name"
                      onClick={handleLogout}
                      href="#/action-2"
                    >
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
        </div>
        <nav className={sidebar ? 'nav-menu2 active' : 'nav-menu2'}>
          <ul className='nav-menu-items2' onClick={showSidebar}>
            <li className='navbar-toggle2'>
              <Link to='#' className='menu-bars2'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            
            {SidebarData.map((item, index) => {
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
        <div>
            <Container>
                <h1>Registered Users</h1>
                <Row>
                    <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>User Id</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Admin</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>{users.map((val)=>{
                                    return <p>{val.id} </p>
                                     })
                                    }</td>
                                <td>{users.map((val)=>{
                                    return <p>{val.name} </p>
                                     })
                                    }</td>
                                <td>{users.map((val)=>{
                                    return <p>{val.email} </p>
                                     })
                                    }</td>
                                <td>
                                {users.map((val)=>{
                                    return <p>{val.isAdmin} </p>
                                     })
                                    }
                                </td>
                            </tr>
                            </tbody>
                    </Table>
                </Row>
            </Container>
        </div>

      </IconContext.Provider>
    
  );
}

export default Reports;
