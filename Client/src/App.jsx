import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import About from './components/pages/About';
import Parcing from './components/pages/Parcing';
import SignUp from './components/pages/SignUp';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import UserDashboard from './components/pages/UserDashboard';
import Profile from './components/Dashboard Pages/Profile';
import UserProfile from './components/Dashboard Pages/UserProfile';
import Users from './components/Dashboard Pages/Users';
import Product from './components/Dashboard Pages/Product';
import Messages from './components/Dashboard Pages/Messages';

function App() {

  return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Contact' component={Contact} />
          <Route path='/parcing' component={Parcing} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/Login' component={Login} />
          <Route path='/Dashboard' component={Dashboard} />
          <Route path='/UserDashboard' component={UserDashboard} />
          <Route path='/Profile' component={Profile} />
          <Route path='/UserProfile' component={UserProfile} />
          <Route path='/Users' component={Users} />
          <Route path='/Products' component={Product} />
          <Route path='/Messages' component={Messages} />

        </Switch>
      </Router>
    
  );
}

export default App;
