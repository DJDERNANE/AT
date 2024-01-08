import React, { useState, useEffect } from "react";
import NavBar from '../Components/NavBar/NavBar';
import at from '../assets/logo.png';
import forstartup from '../assets/forstartup.png';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import { Main_API } from "../env";
import axios from 'axios';

export default function Signup(props) {
    const navigate = useNavigate();
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [startup, setStartup] = useState('');
    const [password, setPassword] = useState('');
    const [catid, setCatid] = useState(null);
    const [wilaya, setWilaya] = useState('');
    const [desc, setDesc] = useState('');
    const [label, setLabel] = useState('');
    const [creation_date, setCreation_date] = useState('');
    const [website, setWebsite] = useState('');
    const [socialmedia, setSocialmedia] = useState('');
    const [categories, setCategories] = useState([]);
    const [logo, setLogo] = useState();
    const Register = async () => {
        const formData = new FormData();
        formData.append('logo', logo);
        formData.append('fullname', fullname);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('startup', startup);
        formData.append('password', password);
        formData.append('catid', catid);
        formData.append('wilaya', wilaya);
        formData.append('desc', desc);
        formData.append('label', label);
        formData.append('creation_date', creation_date);
        formData.append('website', website);
        formData.append('socialmedia', socialmedia);



        axios.post(Main_API + '/register', formData)
            .then((response) => {
                //console.log(response)
                window.location.href = '/login';
            })
            .catch((error) => {
                console.error(error);
            });

    };

    const getCategories = async () => {
        try {
            const response = await axios.get(`${Main_API}/categories`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });

            if (response.data.success) {
                setCategories(response.data.categories);
            }
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };
    useEffect(() => {
        getCategories();
    }, []);
    const handleFileChange = (e) => {
        setLogo(e.target.files[0])
    }

    return (

        <div>
            <NavBar scrolling={props.scrolling} />
            <div className="loginparent pt-20 grid rid-cols-1 justify-center items-center align-center ">

                <img src={at} alt="logo" className="p-2" />
                <img src={forstartup} alt="logo" className="p-2" />
                <h1 className="text-4xl p-2 ">Create Startup Account</h1>
                <p className="font-thin text-xs text-center">Sign up and we will contact you to fill more informations</p>
                <div className="grid grid-cols-2 dico gap-4 my-2">
                    <span></span>
                    <span></span>
                </div>

                <div>
                    <input type="text" name="fullname" placeholder="Nom Complet " value={fullname} onChange={(e) => setFullname(e.target.value)} />
                </div>
                <div>
                    <input type="email" name="email" placeholder="Email " value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <input type="password" name="password" placeholder="Mot de Passe" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type="text" name="startup" placeholder="Nom de Startup " value={startup} onChange={(e) => setStartup(e.target.value)} />
                </div>
                <div>
                    <input type="text" name="wilaya" placeholder="Wilaya " value={wilaya} onChange={(e) => setWilaya(e.target.value)} />
                </div>
                <div>
                    <input type="text" name="phone" placeholder="Numero Telephone " value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div>
                    <input type="text" name="label" placeholder="Label " value={label} onChange={(e) => setLabel(e.target.value)} />
                </div>
                <div>
                    <input type="date" name="creation_date" placeholder="Date de Creation  " value={creation_date} onChange={(e) => setCreation_date(e.target.value)} />
                </div>
                <div>
                    <input type="text" name="website" placeholder="Lien du site web  " value={website} onChange={(e) => setWebsite(e.target.value)} />
                </div>
                <div>
                    <input type="file" onChange={handleFileChange} />
                </div>
                <div>
                    <input type="text" name="socialmedia" placeholder="Lien du Social Media " value={socialmedia} onChange={(e) => setSocialmedia(e.target.value)} />
                </div>
                <div>
                    <select value={catid} onChange={(e) => setCatid(e.target.value)}>
                        {
                            categories && categories.length > 0 && categories.map((item, key) => (
                                <option key={key} value={item.id}>{item.name}</option>
                            ))
                        }
                    </select>

                </div>
                <div>
                    <textarea placeholder="description " value={desc} onChange={(e) => setDesc(e.target.value)}>

                    </textarea>
                </div>
                <p className="text-sm py-2">By creating you are accepting all terms and services</p>
                <div >
                    <button onClick={Register} type="submit">Create Account</button>
                </div>
                <Link to='/login'>

                    <p style={{ color: '#001580' }} className={`text-sm  text-center py-2`}>Already have an account</p>

                </Link>

            </div>
        </div>
    )
}