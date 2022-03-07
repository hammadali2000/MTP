import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Table, Dropdown} from 'react-bootstrap';
import { useHistory } from 'react-router';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { SidebarData } from '../SidebarData';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Axios from 'axios';
import "./Product.css";

function Messages(){

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const [loginStatus, setLoginStatus] = useState("");
    const history = useHistory();
    const [emailStatus, setEmailStatus] = useState("");

  const [username, setUsername] = useState("");


    const handleLogout = () => {
      removeUserSession();
      history.push('/login');
    };

    const removeUserSession = () => {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');
    };

    const[message, setMessage] = useState([]);
    const[item, setItem] = useState({});

    useEffect(()=>{
        Axios.get("http://localhost:3001/message").then((response)=>{
            setMessage(response.data)
        })
    });

    
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


    
    return(

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
                    <h1>Messages</h1>
                <Row>
                    <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Id</th>
                                <th>Email</th>
                                <th>Subject</th>
                                <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>{message.map((val)=>{
                                    return <p>{val.id} </p>
                                     })
                                    }</td>
                                <td>{message.map((val)=>{
                                    return <p>{val.email} </p>
                                     })
                                    }</td>
                                <td>{message.map((val)=>{
                                    return <p>{val.subject} </p>
                                     })
                                    }</td>
                                <td>
                                {message.map((val)=>{
                                    return <p>{val.description} </p>
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
    )
}

export default Messages;