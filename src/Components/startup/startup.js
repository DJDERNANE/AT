import React, { useState , useEffect} from 'react';
import HeaderSection from '../includes/HeaderSection/HeaderSection';
import startup from '../../assets/startupex.png';
import './startup.css'
import StartupDetails from '../includes/startupservice/startup';
import imagestartup from '../../assets/startup.png';
import { useParams } from 'react-router-dom';
import { Main_API } from "../../env";
import ModalService from '../Modal/index';
import {Button, useDisclosure } from '@chakra-ui/react';
import axios from 'axios';  
export default function Startup() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { id } = useParams();
    const [mystartup, setMystartup] = useState({});
    const [services,setServices] = useState([]);
    const [allstartups, setAllstartups] = useState([]);
    const [title, setTitle]= useState('')
    const [desc, setDesc]= useState('')
    const [image, setImage]= useState('')

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
      
      const getstartup = async () => {
        try {
          const response = await axios.get(`${Main_API}/startup/${id}`, {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          });
      
          if (response.data.success) {
            setMystartup(response.data.startup);
            setServices(response.data.startup.services);
          }
        } catch (error) {
          console.error('Error fetching startup:', error);
        }
      };
      useEffect(() => {
        getstartups();
        getstartup();
      }, []);
      const handleClick = (item) =>{
         setTitle(item.service_name)
         setImage(item.picture)
         setDesc(item.desc)
        onOpen()
      }
    return (
        <div className='pt-12'>
            <HeaderSection subTitle={`Explore our portfolio of innovative startups.`} title={`Discover Our Range of Startups`} />
            <ModalService 
            isOpen={isOpen}
            onClose={onClose}
            title={title}
            image={image}
            desc={desc}
            />
            <div className='startupParent grid grid-cols-3 gap-6  p-20'>
                <div className='col-span-2'>
                    <img src={startup} alt='startup' className='startup-img' />
                    <h1 className='text-5xl py-4'>{mystartup.startup}</h1>
                    <p className='startup-desc text-xl text-justify font-semibold'>
                        {mystartup.desc}
                    </p>
                </div>
                <div className='services-startup col-span-1 '>
                <div className='grid grid-cols-2 gap-8'>
                    {
                        services && services.length>0 && services.map((item,key)=>(
                            <div key={key} onClick={()=>handleClick(item)}>
                                <img  src={`https://apitest.dernanedjilali.com/pictures/services/${item.picture}`} alt='service' />
                            </div>
                            
                        ))
                    }
                        
                      
                    </div>
                    <div>
                        {
                            allstartups && allstartups.length > 0 && allstartups.map((item, key)=>(
                                <StartupDetails image={`https://apitest.dernanedjilali.com/pictures/startups/${item.logo}`} name={item.startup}/>
                            ))
                        }
                        
                       
                    </div>
                </div>
            </div>

        </div>
    )
}
