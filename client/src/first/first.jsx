// import React from "react";
// import Navbar1 from "../Navbar1/Navbar1";  // Assuming Navbar1 is in the same directory

// function first() {
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
//           background-image:url('/images/Image3.png');
//           background-size: cover;
//           background-position:center ;
      
//       }
//         `}
//       </style>
//       <Navbar1 />
//       <div className="container-fluid">
//         {/* Content of the container can go here */}
//       </div>
//     </div>
//   );
// }

// export default first;

// import React from "react";
// import Navbar1 from "../Navbar1/Navbar1";  // Assuming Navbar1 is in the same directory

// function first() {
//   const imageLinks = [
//     { img: "/images/white-Tshirt.webp", link: "https://www.flipkart.com/london-hills-solid-men-round-neck-white-t-shirt/p/itmf5hmhqbhzhmyy?pid=TSHF5HGFKZGXCCGT&lid=LSTTSHF5HGFKZGXCCGTPTTE5Z&marketplace=FLIPKART&store=clo%2Fash%2Fank%2Fedy&srno=b_1_3&otracker=browse&fm=organic&iid=96ee149f-3e12-416e-b907-c178cd5a3536.TSHF5HGFKZGXCCGT.SEARCH&ppt=sp&ppn=productListView&ssid=pnah8tfaps0000001714809436681" },
//     { img: "/images/item2.jpg", link: "https://www.example.com/shop/item2" },
//   ];
//   const handleRedirect = (link) => {
//     window.location.href = link;
//   };
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
//           background-image:url('/images/Image3.png');
//           background-size: cover;
//           background-position:center ;
      
//       }
//       .image-container {
//         width: 330px;
//         height: 330px;
//         margin: 10px;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         backdrop-filter: blur(30px);
//         box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
//         border: 2px solid rgba(255, 255, 255, 0.2);
//         background: transparent;
//         border-radius: 10px;
//         cursor: pointer; /* Makes it obvious it's clickable */
//       }
      
//       .image-container img {
//         max-width: 290px;
//         max-height: 290px;
//         transition: transform 0.3s ease-in-out; /* Optional: adds a zoom effect on hover */
//       }
      
//       .image-container:hover img {
//         transform: scale(1.1);
//       }
//         `}
//       </style>
//       <Navbar1 />
//       <div className="image-container-wrapper" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "50px" }}>
//         {imageLinks.map((item, index) => (
//           <div className="image-container" key={index} onClick={() => handleRedirect(item.link)}>
//             <img src={item.img} alt="" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default first;

import React from "react";
import Navbar1 from "../Navbar1/Navbar1";
import { useNavigate } from "react-router-dom";
import "./first.css";  // Assuming you have a CSS file for additional styles

function First() {
  const navigate = useNavigate();
  return (
    <div className="background">
      <style>
                {`
                body{
                    margin: 0;
                    font-family: "Playfair Display", serif;
                }
                
                
                `}
            </style>
      <Navbar1 />
      <div className="button-container">
        <button className="styled-button" onClick={() => navigate('/recommendation')} aria-label="View Recommendations">Recommendation</button>
        <button className="styled-button" onClick={() => navigate('/booking')}aria-label="Make a Booking" style={{ marginLeft: '20px' }}>Booking</button>
      </div>
    </div>
  );
}

export default First;
