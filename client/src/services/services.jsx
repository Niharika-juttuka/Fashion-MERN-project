// import React from 'react';
// // import './services.css'; // Make sure to create this CSS file
// import Navbar from '../Navbar/Navbar';

// function Services() {
//   return (
//     <div>
//       <style>
//         {`
//         body{
//           margin: 0;
//           font-family: "Playfair Display", serif;
//           font-optical-sizing: auto;
//           -webkit-font-smoothing:antialiased;
//           -moz-osx-font-smoothing: grayscale;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           min-height: 100vh;
//           background-image:url('/images/Background.png');
//           background-size: cover;
//           background-position:center ;
      
//       }
//       .services-container {
//         background-color:transparent;
//       }
//       h4{
//           margin-top: 380px;  
//           color: white;  
//           text-align: center;

//       }`}
//       </style>
//       <Navbar/>
//     <div className="services-container">
//       <h1>Our Services</h1>
//       <p>We offer a variety of services tailored to your needs:</p>
//       <ul className="services-list">
//         <li>Fashion Consulting - Get advice from leading fashion experts.</li>
//         <li>Wardrobe Planning - Plan your wardrobe with our styling experts.</li>
//         <li>Personal Shopping - We shop based on your preferences and needs.</li>
//         <li>Event Styling - Look your best at any event with our help.</li>
//       </ul>
//     </div>
//     </div>
//   );
// }

// export default Services;

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
        <h1>Our Services</h1>
        <h5>We offer a variety of services tailored to your needs:</h5>
        <ul className="services-list">
          <h6>Fashion Consulting - Get advice from leading fashion experts.</h6>
          <h6>Wardrobe Planning - Plan your wardrobe with our styling experts.</h6>
          <h6>Personal Shopping - We shop based on your preferences and needs.</h6>
          <h6>Event Styling - Look your best at any event with our help.</h6>
        </ul>
      </div>
    </div>
  );
}

export default Services;
