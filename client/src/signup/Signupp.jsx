import { useState } from "react";
// import './signup.css';
import '../index.css';
import {FaUser,FaLock} from "react-icons/fa";
import { MdEmail,MdAccessibilityNew, MdOutlinePhoneInTalk } from "react-icons/md";
import { PiGenderIntersexBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Navbar from "../Navbar/Navbar";


function Signupp(){
    const [name, setName]=useState()
    const [email,setEmail]=useState()
    const [age,setAge]=useState()
    const [gender, setGender] = useState()
    const [mobileNumber, setMobileNumber] = useState()
    const [password,setPassword]=useState()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (mobileNumber.length !== 10 || isNaN(mobileNumber)) {
            alert("Mobile number should contain exactly 10 digits.");
            return;
        }
        axios.post('http://localhost:3001/register', {name,email,age,gender,mobileNumber,password})
        .then(result => {console.log(result)
        navigate('/login')
        })
        .catch(err=> console.log(err))
    }
    return(
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
                    background-image:url('/images/Elegantblur.png');
                    background-size: cover;
                    background-position:center ;
                
                }
                .Flex {
                    width: 420px;
                    height: 600px;
                    background: transparent;
                    border: 2px solid rgba(255, 255,255, .2);
                    backdrop-filter: blur(30px);
                    box-shadow: 0 0 10px rgba(255, 255,255, .2);
                    color: #fff;
                    border-radius: 10px;
                    padding: 30px 40px;
                }
                
                .Flex h1 {
                    font-size: 36px;
                    text-align: center;
                }
                
                .Flex .input-box {
                    position: relative;
                    width: 100%;
                    height: 30px;
                    margin: 30px 0;
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
                    font-size: 16px;
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
                    top: 70%;
                    transform: translateY(-50%);
                    font-size: 16px;
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
            <Navbar/>
        <div className="Flex">
            <form action="" onSubmit={handleSubmit}>
                <h1>Signup</h1>
                

                <div className="input-box">
                    <input type="text" placeholder="Username" 
                    onChange={(e) => setName(e.target.value)}
                    required/>
                    <FaUser className="icon"/>
                </div>

                <div className="input-box">
                    <input type="email" placeholder="Email Id" 
                    onChange={(e) => setEmail(e.target.value)}
                    required/>
                    <MdEmail className="icon"/>
                </div>
                <div className="input-box">
                    <input type="number" placeholder="Age" 
                    onChange={(e) => setAge(e.target.value)}
                    required/>
                    <MdAccessibilityNew  className="icon"/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Gender" 
                    onChange={(e) => setGender(e.target.value)}
                    required/>
                    <PiGenderIntersexBold  className="icon"/>
                </div>
                <div className="input-box">
                    <input type="tel" placeholder="Phone Number" 
                    onChange={(e) => setMobileNumber(e.target.value)}
                    required/>
                    < MdOutlinePhoneInTalk  className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" 
                    onChange={(e) => setPassword(e.target.value)}
                    required/>
                    <FaLock className="icon"/>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me </label>
                </div>

                <button type="submit">Signup</button>
                <div className="register-link">
                    <p>Already A member?<Link to='/login'>Login</Link></p>
                </div>
                </form>    

        </div>
        </div>
    );
};
export default Signupp;