import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './images/Logo-w-60.png'
import './Navbar.css';
 
  const Navbar = ({ currentUser, logout }) => {
    const links = (
      <>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/register">Register</NavLink>
        </li>
      </>
    );
    
    const authLinks = (
      <>
          <li className="nav-item">
            <NavLink className="nav-link" to="/feed">Feed</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/videos">Videos</NavLink>
          </li>
     
          <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle dropdown" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Account
              </span>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" to="/profile">Profile</NavLink>
                <span className="dropdown-item" onClick={logout}>Sign Out</span>
              </div>
            </li>
      </>
    );
  
    return (
     
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <NavLink className="navbar-brand" to="/">
        <img src={Logo} width="60" height="60" className="d-inline-block align-middle" alt="Kaiju Logo" />
        Kaiju Gaming</NavLink>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
        { currentUser ? authLinks : links }
        </ul>
      </div>
    </div>
  </nav>
    );
  };
  
  export default Navbar;
  
 
 