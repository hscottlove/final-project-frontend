import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './images/Logo-w-60.png'
 
// class Navbar extends Component {
//     render() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <div className="container">
//       <Link className="navbar-brand">
//         <img src={Logo} width="60" height="60" className="d-inline-block align-middle" alt="Kaiju Logo" />
//         Kaiju Gaming</Link>
//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav ml-auto">
//           <li className="nav-item active">
//             <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/login">Login</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/register">Register</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/feed">Feed</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/videos">Videos</Link>
//           </li>
       
//           <li className="nav-item dropdown">
//               <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                 Account
//               </Link>
//               <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                 <Link className="dropdown-item" to="/profile">Profile</Link>
//                 <Link className="dropdown-item" href="#">Sign Out</Link>
//               </div>
//             </li>
//         </ul>
//       </div>
//     </div>
//   </nav>
//         );
//     }
// }
  
//   export default Navbar;


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
              <NavLink className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Account
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" to="/profile">Profile</NavLink>
                <NavLink className="dropdown-item" href="#">Sign Out</NavLink>
              </div>
            </li>

        <li className="nav-item">
          <span className="nav-link" style={{cursor: 'pointer'}} onClick={logout}>Logout</span>
        </li>
      </>
    );
  
    return (
     
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <NavLink className="navbar-brand">
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
  
 
 