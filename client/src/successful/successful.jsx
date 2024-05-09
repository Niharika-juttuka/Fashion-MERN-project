import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Navbar2 from "../Navbar2/Navbar2";


function Successful() {
  const navigate = useNavigate();
  const stylistName = localStorage.getItem("name1R"); // Retrieve the stylist's name from local storage
  
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [submitted, setSubmitted] = useState(false);  // State to track if the form has been submitted

  const handleInputChange = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission, like sending data to a backend server
    console.log("User Data:", userData);
    setSubmitted(true);  // Set the submitted state to true to show the confirmation message
  };

  return (
    <div>
      <style>
        {`
          body {
            margin: 0;
            font-family: "Playfair Display", serif;
            font-optical-sizing: auto;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-image: url('/images/Image4_blur.png');
            background-size: cover;
            background-position: center;
          }
          .wrapper {
            width: 420px;
            // background: rgba(255, 255, 255, 0.8);
            background:transparent;
            border-radius: 5px;
            padding: 30px 40px;
            text-align: center;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            border-radius:15px;
          }
          h1,h6{
            color:white;
          }
          input, button {
            width: 100%;
            padding: 10px;
            margin-top: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
            border-radius:15px;
          }
          button {
            background-color: #4CAF50; /* Green */
            border: none;
            color: white;
          }
        `}
      </style>
      <Navbar2/>
      <div className="wrapper">
        {!submitted ? (
          <>
            <h1>Enter Your Details</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                required
              />
              <input
                type="tel"
                name="phone"
                value={userData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                required
              />
              <input
                type="text"
                name="address"
                value={userData.address}
                onChange={handleInputChange}
                placeholder="Address"
                required
              />
              <button type="submit">Submit Information</button>
            </form>
          </>
        ) : (
          <>
            <h1>Booking Confirmed!</h1>
            <h6>Your session has been booked with stylist <strong>{stylistName}</strong>.</h6>
            <button onClick={() => navigate('/first')}>OK</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Successful;
