// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css'; // Ensure CSS is linked

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="navbar-main-links">
//         <Link to="/home">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/services">Services</Link>
//         <Link to="/contact">Contact</Link>
//       </div>
//       <div className="navbar-auth-links">
//         <Link to="/login">Login</Link>
//         <Link to="/register">Signup</Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css'; // Ensure CSS is linked

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="navbar-main-links">
//         <Link to="/home">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/services">Services</Link>
//         <Link to="/contact">Contact</Link>
//       </div>
//       <div className="navbar-auth-links">
//         <Link to="/login" className="border-button">Login</Link>
//         <Link to="/register" className="border-button">Signup</Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import posh from '../assets/Posh.png';
import './Navbar.css'; // Ensure CSS is linked

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-main-links">
        <Link to="/">Home</Link>
        <Link to="/aboutus">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
      {/* <div className="navbar-logo">
        <Link to="/">
          <img src={posh} alt="Logo" style={{ height: '40px' }} />
        </Link>
      </div> */}
      <div className="navbar-auth-links">
        <Link to="/login" >Login</Link>
        <Link to="/register">Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;

