import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar1.css'; // Ensure the CSS file is linked

function Navbar1() {
  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to logout?');
    if (confirmLogout) {
        localStorage.removeItem('loggedInUser'); // Clear local storage
        window.location.href = '/'; // Redirect to login page
    }
};
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
    max-height: 10%;
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
  .navbar-links,
.navbar-auth-links {
    display: flex;
    align-items: center;
    justify-content: center;
}
.navbar a {
  color: white;
  padding: 10px 15px;
  text-decoration: none;
  margin: 0 10px;
  transition: background-color 0.3s, color 0.3s;
}

.navbar a:hover,
.navbar a:focus {
  background-color: #555;
  color: #fff;
  border-radius: 5px;
}

/* .border-button {
  border: 2px solid white;
  background-color: transparent;
  transition: border-color 0.3s, color 0.3s;
} */

.border-button:hover,
.border-button:focus {
  border-color: #ffcc00; /* Highlight color on hover/focus */
  color: #ffcc00;
}

.navbar a.active {
  border-bottom: 3px solid #ffcc00;
  color: #ffcc00;
}

@media (max-width: 768px) {
  .navbar {
      flex-direction: column;
  }
  .navbar-main-links,
  .navbar-auth-links,
  .navbar-logo {
      flex-direction: column;
      justify-content: center;
  }
  .navbar a {
      margin-bottom: 10px;
  }
  .border-button {
      width: 100%; /* Full width for smaller screens */
      text-align: center; /* Center text if full-width */
  }
}

  
        `}
      </style>
    <nav className="navbar">
      
      <div className='navbar-auth-links'>
      <Link to="/profile" className="profile-link">Profile</Link>
      </div>
      <div className='navbar-main-links'>
      <Link to="/" className="profile-link" onClick={handleLogout}>Logout</Link>
      </div>
    </nav>
    </div>
  );
}

export default Navbar1;



