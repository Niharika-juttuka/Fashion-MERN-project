// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Profile() {
//     const [userData, setUserData] = useState(null); // State to store user data
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');

//     useEffect(() => {
//         // Fetch user data from the backend after component mounts
//         const loggedInUser = localStorage.getItem("loggedInUser"); // Retrieve logged-in user's email from local storage
//         if (loggedInUser) {
//             axios.get(`http://localhost:3001/user/${loggedInUser}`) // Assuming endpoint to get user data is '/user/:email'
//                 .then(response => {
//                     setUserData(response.data); // Set user data in state
//                     setUsername(response.data.name); // Set username state
//                     setEmail(response.data.email); // Set email state
//                 })
//                 .catch(error => {
//                     console.error("Error fetching user data:", error);
//                 });
//         }
//     }, []); // Empty dependency array ensures the effect runs only once after mounting

//     return (
//         <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
//             <div style={{ backgroundColor: "#f0f0f0", padding: "20px", borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
//                 <h2>User Profile</h2>
//                 <div>
//                     <label htmlFor="username">Username:</label>
//                     <input
//                         type="text"
//                         id="username"
//                         name="username"
//                         className="form-control rounded-1.5"
//                         value={username}
//                         readOnly
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         className="form-control rounded-1.5"
//                         value={email}
//                         readOnly
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Profile;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {FaUser,FaLock} from "react-icons/fa";
import { MdEmail,MdAccessibilityNew, MdOutlinePhoneInTalk } from "react-icons/md";
import { PiGenderIntersexBold } from "react-icons/pi";

function Profile() {
    const [userData, setUserData] = useState(null);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [mobileNumber, setMobileNumber] = useState(''); // State to store user data

    useEffect(() => {
        // Fetch user data from the backend after component mounts
        const loggedInUser = localStorage.getItem("loggedInUser"); // Retrieve logged-in user's email from local storage
        if (loggedInUser) {
            axios.get(`http://localhost:3001/user/${loggedInUser}`) // Assuming endpoint to get user data is '/user/:email'
                .then(response => {
                    setUserData(response.data); // Set user data in state
                    setUsername(response.data.name);
                    setEmail(response.data.email);
                    setAge(response.data.age); // Set age state
                    setGender(response.data.gender); // Set gender state
                    setMobileNumber(response.data.mobileNumber);
                })
                .catch(error => {
                    console.error("Error fetching user data:", error);
                });
        }
    }, []); // Empty dependency array ensures the effect runs only once after mounting


    // const handleLogout = () => {
    //     const confirmLogout = window.confirm('Are you sure you want to logout?');
    //     if (confirmLogout) {
    //         localStorage.removeItem('loggedInUser'); // Clear local storage
    //         window.location.href = '/'; // Redirect to login page
    //     }
    // };


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
                    background-image:url('/images/Image1.png');
                    background-size: cover;
                    background-position:center ;
                
                }
                .Flex {
                    width: 420px;
                    height: 550px;
                    background: transparent;
                    border: 2px solid rgba(255, 255,255, .2);
                    backdrop-filter: blur(30px);
                    box-shadow: 0 0 10px rgba(255, 255,255, .2);
                    color: #fff;
                    border-radius: 30px;
                    padding: 30px 40px;
                }
                
                .Flex h1 {
                    font-size: 36px;
                    text-align: center;
                    top:50px;
                    height:50px;
                }
                
                .Flex .input-box {
                    position: relative;
                    width: 100%;
                    height: 30px;
                    margin: 50px 0;
                    font-size:18px;
                }
                
                .Flex .input-box input {
                    width: 100%;
                    height: 100%;
                    background: transparent;
                    border: 2px solid rgba(255, 255,255, .2);
                    border-radius: 40px;
                    font-size: 16px;
                    color: #fff;
                    padding: 20px 45px 20px 20px;
                }
                .Flex .input-box select, .Flex .input-box input {
                    width: 100%;
                    height: 100%;
                    background: transparent;
                    border: 2px solid rgba(255, 255,255, .2);
                    border-radius: 40px;
                    font-size: 18px;
                    color: #fff;
                    padding: 20px 45px 20px 20px;
                    appearance: none; 
                }
                .Flex .input-box input::placeholder {
                    color: #fff;
                }
                
                .Flex .input-box .icon {
                    position: absolute;
                    right: 20px;
                    top: 150%;
                    transform: translateY(-50%);
                    font-size: 22px;
                }
                
                .Flex .remember-forgot {
                    display: flex;
                    justify-content: space-between;
                    font-size: 14.5px;
                    margin: -15px 0 15px;
                }
                
                .Flex .remember-forgot label input {
                    accent-color: #fff;
                    margin-right: 4px;
                }
                
                .Flex .remember-forgot a {
                    color: #fff;
                    text-decoration: none;
                }
                
                .Flex .remember-forgot a:hover {
                    text-decoration: underline;
                }
                
                .Flex button {
                    width: 100%;
                    height: 45px;
                    background: #fff;
                    border: none;
                    outline: none;
                    border-radius: 40px;
                    box-shadow: 0 0 10px rgba(0,0,0, .1);
                    cursor: pointer;
                    font-size: 16px;
                    color: #333;
                    font-weight: 700;
                }
                
                .Flex .register-link {
                    font-size: 14.5px;
                    text-align: center;
                    margin: 20px 0 15px;
                }
                
                .Flex .register-link p a {
                    color: #fff;
                    text-decoration: none;
                    font-weight: 600;
                }
                
                .Flex .register-link p a:hover {
                    text-decoration: underline;
                }
                
                `}
            </style>
        <div className="Flex">
            <div>
                
                <h2 className='h1'><center>User Profile</center></h2>
                <div className="input-box">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="UserName"
                        className="form-control rounded-1.5"
                        value={username}
                        readOnly
                    />
                    <FaUser className="icon"/>
                    
                </div>
                <div className="input-box">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className='form-control rounded-1.5'
                        value={email}
                        readOnly
                    />
                    <MdEmail className="icon"/>
                </div>
                <div className='input-box'>
                        <label htmlFor="age">Age:</label>
                        <input
                            type="text"
                            id="age"
                            name="age"
                            className="form-control rounded-1.5"
                            value={age}
                            readOnly
                        />
                        <MdAccessibilityNew  className="icon"/>
                    </div>
                    <div className='input-box'>
                        <label htmlFor="gender">Gender:</label>
                        <input
                            type="text"
                            id="gender"
                            name="gender"
                            className="form-control rounded-1.5"
                            value={gender}
                            readOnly
                        />
                        <PiGenderIntersexBold  className="icon"/>
                    </div>
                    <div className='input-box'>
                        <label htmlFor="mobileNumber">Mobile Number:</label>
                        <input
                            type="text"
                            id="mobileNumber"
                            name="mobileNumber"
                            className="form-control rounded-1.5"
                            value={mobileNumber}
                            readOnly
                        />
                        < MdOutlinePhoneInTalk  className="icon"/>
                    </div>
            </div>
        </div>
        </div>
    );
}

export default Profile;

