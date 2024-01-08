import React, { useState, useEffect } from 'react';
import './NavBar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; // Replace with the specific icon you want to use
import { Main_API } from "../../env";
export default function NavBar(props) {

    const [Active, setActive] = useState(false);
    const [token, setToken] = useState('');
    useEffect(() => {
        const item = JSON.parse(localStorage.getItem('token'));
        if (item) {
            setToken(item);
        }
    }, []);
    const handleClick = () => {
        setActive(!Active)
    }
    const logout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }
    const dashboard = () => {
        window.location.href = 'https://apitest.dernanedjilali.com/startup/' + token;

    }
    return (
        <div id="navbar" className={`navbar ${Active ? 'active' : ''}  flex justify-between  scrolled`}>
            <div class="navbar-logo md:col-span-2 flex items-center px-6">
                <img className={`inline}`} src={logo} alt='logo' />
            </div>

            <div className='xs:flex md:hidden items-center justify-end pr-8'>
                <div className='navbar-responsive-menu' onClick={handleClick}>
                    <FontAwesomeIcon icon={faBars} style={{ color: 'black' }} />
                </div>
            </div>
            <div className=' md:col-span-2'></div>
            <div className={`navbar-menu `}>
                <ul className='flex'>
                    <li className="p-6">
                        <a href='http://localhost:3000/#home-section' className={`text-black sm:text-xl xs:text-xl`}>Home</a>
                    </li>
                    <li className="p-6">
                        <a href='http://localhost:3000/#about-section' className={`text-black sm:text-xl xs:text-xl`}>About</a>
                    </li>
                    <li className="p-6">
                        <a href='http://localhost:3000/#services-section' className={`text-black sm:text-xl xs:text-xl`}>Services</a>
                    </li>
                    <li className="p-6">
                        <a href='/startupspage' className={`text-black sm:text-xl xs:text-xl`}>Startups</a>
                    </li>
                    <li className="p-6">
                        <a href='http://localhost:3000/#cat-section' className={`text-black sm:text-xl xs:text-xl`}>Categories</a>
                    </li>


                    {token ?
                        (
                            <>
                                <button onClick={dashboard}>
                                    <li className="p-6">
                                        <p className={`text-black sm:text-xl xs:text-xl`}>MyAccount</p>
                                    </li>
                                </button>
                                <button onClick={logout}>
                                    <li className="p-6">
                                        <p className={`text-black sm:text-xl xs:text-xl`}>Logout</p>
                                    </li>
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to='/login'>
                                    <li className="p-6">
                                        <p className={`text-black sm:text-xl xs:text-xl`}>Login</p>
                                    </li>
                                </Link>
                                <Link to='/signup'>
                                    <li className="p-6">
                                        <p className={`text-black sm:text-xl xs:text-xl`}>Sign Up</p>
                                    </li>
                                </Link>
                            </>
                        )
                    }



                </ul >
            </div >


        </div >
    )
}
