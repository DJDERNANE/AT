import React, { useState } from "react";
import NavBar from '../Components/NavBar/NavBar';
import logo from '../assets/logo.png';
import forstartup from '../assets/forstartup.png';
import './style.css';
import { Link } from 'react-router-dom';
import { Main_API } from "../env";
import axios from 'axios';

export default function Login(props) {

    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [item, setItem] = useState('')
    const handleLogin = async () => {
        try {
          const response = await axios.post(`${Main_API}/login`, {
            phone: phone,
            password: password,
          }, {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          });
      
          if (response.data.success) {
            localStorage.setItem('token', JSON.stringify(response.data.user));
            window.location.href = '/';
          }
      
          console.log(response.data);
        } catch (error) {
          console.error('Error during login:', error);
        }
      };
    return (
        <div>
            <NavBar scrolling={props.scrolling} />
            <div className="loginparent pt-20 grid rid-cols-1 justify-center items-center align-center ">

                <img src={logo} alt="logo" className="p-2" />
                
                <h1 className="text-4xl p-2 ">Login to your account</h1>
                <p className="font-thin text-xs text-center">Services for your growth.</p>
                <div className="grid grid-cols-2 dico gap-4 my-2">
                    <span></span>
                    <span></span>
                </div>
                    <div>
                        <input type="text" name="phone" placeholder="Phone Number " value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="Password " value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    
                    <p className="text-sm py-2">Forget Password?</p>
                    <div>
                        <button type="submit" onClick={handleLogin}>Login</button>
                    </div>
                    <Link to='/signup'>
                        
                        <p style={{color :'#001580'}} className={`text-sm  text-center py-2`}>Create Startup Account</p>
                      
                    </Link>
            </div>
        </div>
    )
}