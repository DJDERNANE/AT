import React from 'react';
import './Contact.css';
import HeaderSection from '../includes/HeaderSection/HeaderSection';
import hosting from '../../assets/hosting.png'
import housing from '../../assets/housing.png'

export default function Contact() {
 
  return (
    <div id='contact-section'>
      <HeaderSection title={`Services Coming Soon `} subTitle={`Discover Our Beloved Startups`}  />
      <div className='grid md:grid-cols-2 gap-20 xs:grid-cols-1 '>
          <div className='flex items-center service p-4'>
            <img className='pr-4' src={housing} alt='hosting'/>
            <div >
              <h1>Housing</h1>
              <p>Discover Our Service</p>
              <button className='py-2 my-8'>See Offers</button>
            </div>
          </div>
          <div  className='flex items-center service'>
            <img src={hosting} alt='hosting'/>
            <div>
              <h1>Hosting</h1>
              <p>Discover Our Service</p>
              <button  className='py-2 my-8'>See Offers</button>
            </div>
          </div>
      </div>

    </div>
  )
}
