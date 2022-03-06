import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Container, Row, Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SidebarData } from '../SidebarData';
import '../Dashboard.css';
import { IconContext } from 'react-icons';
import Axios from "axios";


function Reports() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const[users, setUsers] = useState([]);
  const[item, setItem] = useState({});

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
