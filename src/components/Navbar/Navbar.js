import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/Logo-w-60.png'
 
class Navbar extends Component {
    render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <Link className="navbar-brand">
        <img src={Logo} width="60" height="60" className="d-inline-block align-middle" alt="Kaiju Logo" />
        Kaiju Gaming</Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/feed">Feed</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/videos">Videos</Link>
          </li>
       
          <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Account
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/profile">Profile</Link>
                <Link className="dropdown-item" href="#">Sign Out</Link>
              </div>
            </li>
        </ul>
      </div>
    </div>
  </nav>
        );
    }
}
  
  export default Navbar;
  
 
 