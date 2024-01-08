import React, {useState, useEffect} from "react";
/********** Components ****************/
import StartupPage from "../Components/startup/startup";
import startup from '../assets/startup.png'
import NavBar from '../Components/NavBar/NavBar';
import HeaderSection from "../Components/includes/HeaderSection/HeaderSection";
import Footer from '../Components/Footer/Footer';
import Card from '../Components/includes/Card/Card';
import { Link } from 'react-router-dom';
import { Main_API } from "../env";
import axios from 'axios';
export default function StartupsPage(props) {
    const [allstartups, setAllstartups] = useState([]);

    const getstartups = async () => {
        try {
          const response = await axios.get(`${Main_API}/startups`, {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          });
      
          if (response.data.success) {
            setAllstartups(response.data.startups);
          }
        } catch (error) {
          console.error('Error fetching startups:', error);
        }
      };
      useEffect(() => {
        getstartups();
      }, []);

    return (
        <div>
            <NavBar scrolling={props.scrolling} />

            <HeaderSection className='mt-10' subTitle={`Explore our portfolio of innovative startups.`} title={`Discover Our Range of Startups`} />
            <div className=" grid md:grid-cols-3 xs:grid-cols-1 my-10">
            {
                allstartups && allstartups.length > 0 && allstartups.map((item, key)=>(
                  <Link to={`/startup/${item.id}`}>
                  <Card pic={`https://apitest.dernanedjilali.com/pictures/startups/${item.logo}`} delay="150" title={item.startup} desc={`${item.desc.slice(0, 100)}...`}/>
                </Link>
                ))
              }
            </div>

            <Footer />
        </div>
    )
}