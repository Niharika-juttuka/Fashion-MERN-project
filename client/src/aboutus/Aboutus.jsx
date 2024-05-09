import React from 'react';
import Navbar from '../Navbar/Navbar';
function Aboutus() {
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
          max-width: 900px;
          border-radius: 8px;
          width: 800px;
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
      <Navbar/>
      <div className="services-container">
        <h1>About Us</h1>
        <ul className="services-list">
          <h6>About Posh Pulse

Welcome to Posh Pulse, your go-to platform for personalized fashion recommendations and professional styling services. Here, we combine advanced technology with deep fashion insights to help you dress perfectly for any occasion. Whether you're attending a wedding, participating in a business meeting, or hosting an event, our platform offers tailored outfit suggestions based on your specific needs. With an easy-to-use booking system, you can connect with top stylists for personalized advice, all while enjoying a secure and seamless user experience. Discover and refine your style with Posh Pulse—where fashion meets personalization and convenience.
</h6>
          
        </ul>
      </div>
    </div>
  );
}

export default Aboutus;
