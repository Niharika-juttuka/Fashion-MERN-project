import React from "react";
import { useState } from "react";
// import './login.css';
// import './index.css';
import {FaLock} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import First from "../first/first";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[errorMessage,setErrorMessage]=useState("");
    const navigate = useNavigate()

    const handleSubmit= (e) => {
        e.preventDefault();
        if(!email || !password){
            setErrorMessage("Please fill in all fields");
            return;
        }
        axios.post('http://localhost:3001/login',{email,password})
        .then(result => {
            console.log(result)
            if(result.data === "Success"){
                localStorage.setItem("loggedInUser", email);
                navigate('/first');
            }
            else if (result.data==='No record existed'){
                setErrorMessage("No email found");
            }
            else{
                setErrorMessage("The password is incorrect");
            }
        })
        .catch(err => console.log(err))
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
                .wrapper{
                    width: 420px;
                    background: transparent;
                    border: 2px solid rgba(255, 255,255, .2);
                    backdrop-filter: blur(30px);
                    box-shadow:0 0 10px rgba(255, 255,255, .2);
                    color: #fff;
                    border-radius: 10px;
                    padding: 30px 40px;
                
                    /* display: flex; */
                    justify-content: center;
                    align-items: center; 
                }
                
                .wrapper h2{
                    font-size: 36px;
                    text-align: center;
                
                }
                
                .wrapper .input-box{
                    position: relative;
                    width: 100%;
                    height: 50px;
                    margin: 30px 0;
                }
                
                .input-box input {
                    width: 100%;
                    height: 100%;
                    background:transparent ;
                    border:2px solid rgba(255, 255,255, .2);
                    border-radius: 40px;
                    font-size: 16px;
                    color: #fff;
                    padding: 20px 45px 20px 20px;
                
                }
                
                .input-box input::placeholder{
                    color: #fff;
                }
                
                .input-box .icon{
                    position: absolute;
                    right: 20px;
                    top: 50%;
                    transform: translateY(-50%);
                    font-size: 16px;
                }
                
                .wrapper .remember-forgot{
                    display: flex;
                    justify-content: space-between;
                    font-size: 14.5px;
                    margin: -15px 0 15px;
                }
                
                .remember-forgot label input{
                    accent-color: #fff;
                    margin-right: 4px;
                
                }
                .remember-forgot a{
                    color: #fff;
                    text-decoration: none;
                }
                
                .remember-forgot a:hover{
                    text-decoration: underline;
                }
                .wrapper button{
                    width: 100%;
                    height: 45px;
                    background:#fff;
                    border:none;
                    outline:none;
                    border-radius: 40px;
                    box-shadow: 0 0 10px rgba(0,0,0, .1);
                    cursor: pointer;
                    font-size: 16;
                    color:#333 ;
                    font-weight: 700;
                }
                
                .wrapper .register-link{
                    font-size:14.5px;
                    text-align:center;
                    margin : 20px 0 15px;
                
                }
                .register-link p a{
                    color: #fff;
                    text-decoration: none;
                    font-weight: 600;
                
                }
                
                .register-link p a:hover{
                    text-decoration: underline;
                }
                
                
                `}
            </style>
        <Navbar/>
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Email" 
                    onChange={(e) => setEmail(e.target.value)}
                    required/>
                    <MdEmail className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" 
                    onChange={(e) => setPassword(e.target.value)}required/>
                    <FaLock className="icon"/>
                </div>
                <div className="remember-forgot">
                    {/* <label><input type="checkbox" />Remember me </label> */}
                    <a href="#"> Forgot Password?</a>
                </div>
                {errorMessage && <p className="d-flex justify-content-center align-items-center  text-white p-2">{errorMessage}</p>}

                <button type="submit">Login</button>
                <div className="register-link">
                    <p>Don't have an Account?<Link to='/register'>Register</Link></p>
                </div>
                
            </form>
            </div>

        </div>
    );
};
export default Login;