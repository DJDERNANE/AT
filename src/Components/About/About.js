import React from 'react';
import './About.css';

import at from '../../assets/at.png';
import logo2 from '../../assets/logo2.png';


export default function About() {

  return (
    <div className='about-section' id='about-section'>
      <div className='parent mt-16 grid md:grid-cols-2 xs:grid-cols-1'>
        <div className='about-section-content md:px-20 xs:px-10'>
          <div className='flex justify-between items-center py-4'>
            <h1 data-aos="zoom-in" data-aos-offset="160" >
              About us
            </h1>
            
          </div>


          <div className='about-section-desc'>
          Algérie Télécom is a leader in the Algerian telecommunications market, which is experiencing strong growth, offering a comprehensive range of fixed-line telephone and internet services to residential and business customers. This position has been built through a strong innovation policy tailored to customer expectations and geared towards new usage.
          Algeria Telecom is always closer, this time through an innovative digital platform that offers the opportunity to explore our services for startups. These services include internet offers and other distinctive proposals, highlighting the innovation and diversity of our emerging businesses. Startups also have the chance to showcase their services and products in an accessible manner on this platform. Thus, everyone has the opportunity to get detailed information about the services of Algerian startups, which stand out as pioneers in their field."
          </div>

        </div>
        <div className='about-section-gallery flex items-center justify-center xs:hidden md:flex'>
          <div data-aos="fade-left" className='about-section-gallery-image aos-init aos-animate'>
            <img src={at} alt='photo' />

          </div>
        </div>
      </div>
    </div>
  )
}
