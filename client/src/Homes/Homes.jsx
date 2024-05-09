// import React from "react";
// import posh from '../assets/Posh.png';
// import './homes.css';
// import Navbar from "../Navbar/Navbar";
// function Homes(){
//     return(
//         <div>
//             <Navbar/>
//         <div className="home">
//             <img src={posh} alt="" />
//         </div>
//         </div>


//     );
// }
// export default Homes;
// import posh from '../assets/Posh.png'; // Ensure this is the correct relative path
// import React from "react";
// import './homes.css'; 
// import Navbar from "../Navbar/Navbar";

// function Homes() {
    
//     return (
//         <div className="hello">
//             <Navbar/>
//         </div>
//     );
// }
// export default Homes;
// import './homes.css';
import Navbar from "../Navbar/Navbar";

function Homes() {
    return (
        <div>
            <style>
                {`
                body{
                    margin: 0;
                    font-family: "Playfair Display", serif;
                    font-optical-sizing: auto;
                    -webkit-font-smoothing:antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    background-image:url('/images/Background_edit.png');
                    background-size: cover;
                    background-position:center ;
                
                }
                h4{
                    margin-top: 380px;  
                    color: white;  
                    text-align: center;

                }
                `}
            </style>
            <Navbar/>
            <h4>Elevate Your Wardrobe, feel the Posh Vibe!!!!!</h4>
        </div>
    );
}

export default Homes;

