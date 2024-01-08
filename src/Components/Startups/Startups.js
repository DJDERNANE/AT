import React, { useEffect, useState } from 'react';
import './Startups.css';
import HeaderSection from '../includes/HeaderSection/HeaderSection';
import Card from '../includes/Card/Card';
import { Link } from 'react-router-dom';
import axios from 'axios';
import startup from '../../assets/startup.png';
import { Main_API } from '../../env';
export default function Startups() {

  const [allstartups, setAllstartups] = useState([]);

  const getstartups = async () => {
    try {
      const response = await axios.get(`${Main_API}/startups`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      console.log(response);

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
 // console.log(allstartups)
  return (
    <div id='startups-section' className='pb-10'>
      <HeaderSection subTitle={`Explore our portfolio of innovative startups.`} title={`Discover Our Range of Startups`} />
      <div className='services-wrapper grid md:grid-cols-3 xs:grid-cols-1'>
      {
        allstartups && allstartups.length > 0 && allstartups.map((item, key)=>(
          <Link to={`/startup/${item.id}`}>
          <Card pic={`https://apitest.dernanedjilali.com/pictures/startups/${item.logo}`} delay="150" title={item.startup} desc={`${item.desc.slice(0, 100)}...`}/>
        </Link>
        ))
      }
       


      </div>
      <Link to='startupspage'>
        <div className='btn-parent'>
          <button  className='p-2 btn'>See More</button>
        </div>
        
      </Link>

    </div>
  )
}
