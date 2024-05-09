import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar1.css'; // Ensure the CSS file is linked

function Navbar1() {
  return (
    <div>
      <style>
        {`
        .navbar {
    background-color:transparent;
    color: white;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-height: 7%;
  }
  
  .navbar-links a {
    color: white;
    padding: 10px 15px;
    text-decoration: none; 
    margin: 0 5px;
    transition: color 0.3s;
  }
  
  .navbar-links a:hover {
    color: #afac4c;
  }
  
  .profile-link {
    /* border: 2px solid;  */
    padding: 5px 10px;
    border-radius: 5px; 
  }
  
  .profile-link:hover {
    background-color: white; 
    color: #e7e5e5; 
  }
  
        `}
      </style>
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/first" className="profile-link">Back</Link> {/* Profile link */}
      </div>
    </nav>
    </div>
  );
}

export default Navbar1;



