import React, { useState } from "react";
import './signup.css';
// import './index.css';
import {FaUser,FaLock} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function Signupp(){
    const [name, setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    return(
        <div className="Flex">
            <form action="">
                <h1>Signup</h1>
                
                <div className="input-box">
                    <input type="text" placeholder="Username" onChange={(e) => setName(e.target.value)}
                    required/>
                    <FaUser className="icon"/>
                </div>

                <div className="input-box">
                    <input type="email" placeholder="Email Id" required/>
                    <MdEmail className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    <FaLock className="icon"/>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me </label>
                </div>

                <button type="submit">Login</button>
                <div className="register-link">
                    <p>Already A member?<Link to='/login'>Login</Link></p>
                </div>
                
            </form>

        </div>
    );
};
export default Signupp;