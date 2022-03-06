import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Table} from 'react-bootstrap';
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

    const[message, setMessage] = useState([]);
    const[item, setItem] = useState({});

    useEffect(()=>{
        Axios.get("http://localhost:3001/message").then((response)=>{
            setMessage(response.data)
        })
    });


    
    return(

        <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar2'>
            
          
          <Link to='#' className='menu-bars2'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <img src='images/logo.png' className="nav-image2"/>
        </div>
        <nav className={sidebar ? 'nav-menu2 active' : 'nav-menu2'}>
          <ul className='nav-menu-items2' onClick={showSidebar}>
            <li className='navbar-toggle2'>
              <Link to='/Profile' className='menu-bars2'>
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