import React from 'react';
import Navbar from '../Navbar/Navbar';

function Services() {
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
          background-image: url('/images/bg2.jpg');
          background-size: cover;
          background-position: center;
        }
        .services-container {
          text-align: center;
          background: transparent; // semi-transparent background
          color: white; // white text color
          padding: 20px;
          margin: auto;
          max-width: 800px;
          border-radius: 8px;
          width: 600px;
          background: transparent;
          border: 2px solid rgba(255, 255,255, .2);
          backdrop-filter: blur(30px);
          box-shadow: 0 0 10px rgba(255, 255,255, .2);
          color:#fff;
        }
        h1, h3, h5{
          margin: 0 0 10px 0; // adjust spacing as needed
        }
        ul {
          list-style-type: none; // remove bullet points
          padding: 0;
        }
        `}
      </style>
      <Navbar />
      <div className="services-container">
        <h1>Contact Information</h1>
        <ul className="services-list">
          <h6>Our website email Id-poshpulse@gmail.</h6>
          <h6>Phone Number-9391198850</h6>
        </ul>
      </div>
    </div>
  );
}

export default Services;
