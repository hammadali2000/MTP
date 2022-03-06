import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown, Button, Dropdown } from 'react-bootstrap';
import { SidebarData } from '../SidebarData';
import '../Dashboard.css';
import { IconContext } from 'react-icons';
import Login from './Login';
import Axios from 'axios';
import { useHistory } from 'react-router';
import SearchBar from '../SearchBar';
import Table from 'react-bootstrap/Table';
import '../Dashboard Pages/Product.css';
import { Products } from '../../product';
import Autocomplete from 'react-autocomplete';
import { PieChart } from 'react-minimal-pie-chart';

import {
  ResponsiveContainer,
  Line,
  XAxis,
  YAxis,
  Area,
  Bar,
  ComposedChart,
} from 'recharts';
import products from '../Dashboard Pages/Product';
function Dashboard() {
  const [input, setInput] = useState('');
  const [bol, setbol] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [loginStatus, setLoginStatus] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [items, setitems] = useState({});
  const [value, setValue] = useState();
  const [flag, setFlag] = useState(true);
  const history = useHistory();
  let insert = {};
  let data = [];
  Axios.defaults.withCredentials = true;
  const getUser = () => {
    const userStr = sessionStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    else return null;
  };
  const removeUserSession = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  };
  const setUserSession = (token, user) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
  };
  const handleLogout = () => {
    removeUserSession();
    history.push('/login');
  };
  const login = () => {
    Axios.post('http://localhost:3001/login', {
      uname: username,
      pass: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
    });
  };
  const updateInput = () => {
    const param = {
      data: value,
    };
    Axios.post('/member', param)
      .then(function (response) {
        setitems(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    setFlag(true);
  };

  const pdata = [
    {
      name: 'Compound',
      student: items.compound,
      // fees: 10,
    },
    {
      name: 'Neg',
      student: items.neg,
      // fees: 12,
    },
    {
      name: 'Neu',
      student: items.neu,
      // fees: 10,
    },
    {
      name: 'Pos',
      student: items.pos,
      // fees: 5,
    },
  ];
  useEffect(() => {
    setbol(false);
  }, []);

  const BarStyling = {
    width: '20rem',
    background: '#F2F1F9',
    border: 'none',
    padding: '0.5rem',
    margin: '20px',
  };
  const keys = Object.keys(items);
  const showSidebar = () => setSidebar(!sidebar);
  useEffect(() => {
    Axios.get('http://localhost:3001/login').then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].uname);
      }
    });
  }, []);
  return (
    <div>
      <div>
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className="navbar2">
            <Link to="#" className="menu-bars2">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            <img src="images/logo.png" className="nav-image2" />
            <div className="main-div">
              <div>
                <Dropdown>
                  <Dropdown.Toggle className="login-name" id="dropdown-basic">
                    {loginStatus}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item className="item-name" href="#/action-1">
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
            <ul className="nav-menu-items2" onClick={showSidebar}>
              <li className="navbar-toggle2">
                <Link to="/Profile" className="menu-bars2">
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
        </IconContext.Provider>

        <div>
          <Autocomplete
            items={[...Products]}
            shouldItemRender={(item, value) =>
              item.toLowerCase().indexOf(value.toLowerCase()) > -1
            }
            getItemValue={(item) => item}
            renderItem={(item, isHighlighted) => (
              <div
                style={{
                  background: isHighlighted ? '#bcf5bc' : 'white',
                }}
                key={item.id}
              >
                {item}
              </div>
            )}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onSelect={(val) => setValue(val)}
            inputProps={{
              style: {
                width: '300px',
                height: '40px',
                background: '#e4f3f7',
                border: '2px outset lightgray',
              },
              placeholder: 'Enter the Product',
            }}
          />

          <button
            onClick={updateInput}
            style={{
              color: 'white',
              padding: '5px 22px',
              'background-color': '#8F18B3',
              margin: '3px',
            }}
          >
            Search
          </button>
        </div>
        <div>
          {flag && Products.includes(value) ? (
            <div>
              <div>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Value</th>
                      <th>Recommended</th>
                    </tr>
                  </thead>
                  {keys.map((item, key) => (
                    <tbody>
                      <tr>
                        <td>{key}</td>
                        <td>{item}</td>
                        <td>{items[item]}</td>
                        <td>{items[item] > 0.5 ? 'yes' : 'no'}</td>
                      </tr>
                    </tbody>
                  ))}
                </Table>
                <div className="graph-container">
                  <ResponsiveContainer
                    className="graph"
                    width="100%"
                    aspect={3}
                  >
                    <ComposedChart
                      width={500}
                      height={400}
                      data={pdata}
                      margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                      }}
                    >
                      <XAxis dataKey="name" interval={'preserveStartEnd'} />
                      <YAxis />
                      <Area
                        type="monotone"
                        dataKey="student"
                        fill="#8884d8"
                        stroke="#8884d8"
                      />
                      <Bar dataKey="student" barSize={20} fill="#413ea0" />
                      <Line
                        type="monotone"
                        dataKey="student"
                        stroke="#ff7300"
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div style={{ position: 'absolute', top: '270px' }}>
                <PieChart
                  radius={25}
                  animation
                  animationDuration={500}
                  animationEasing="ease-out"
                  center={[50, 50]}
                  lengthAngle={360}
                  lineWidth={15}
                  paddingAngle={0}
                  data={[
                    {
                      title: 'Compound',
                      value: items.compound,
                      color: '#C90E1F',
                    },
                    { title: 'Neu', value: items.neu, color: '#0E32C9' },
                    { title: 'Neg', value: items.neg, color: '#1EB10F' },
                    { title: 'Pos', value: items.pos, color: '#DAF112' },
                  ]}
                  startAngle={0}
                  viewBoxSize={[100, 100]}
                  label={(data) => data.dataEntry.title}
                  labelPosition={56}
                  labelStyle={{
                    fontSize: '4px',
                    fontColor: 'FFFFFA',
                    fontWeight: '800',
                  }}
                />
              </div>
            </div>
          ) : (
            'Loading.....'
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;