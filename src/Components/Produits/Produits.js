import React from 'react';
import './Produits.css';

import aventure from '../../assets/aventure.png';
import asf from '../../assets/asf.png';
import metro from '../../assets/metro.png';
import sonatrach from '../../assets/sonatrach.png';

export default function Produits() {

    return (
        <div id='products-section' className='mt-8'>
            <h1 className='md:text-5xl font-bold xs:text-2xl text-white'>
            Our Partners
            </h1>
            <h2 className='md:text-2xl font-semibold xs:text-lg text-white' >
            Discover Our Beloved Startups
            </h2>
            <div className='partners mt-16 grid xs:grid-cols-1 md:grid-cols-2 md:gap-16 xs:gap-32 mb-20'>
                <img src={aventure} alt='aventure'/>
                <img src={asf} alt='aventure'/>
                <img src={sonatrach} alt='aventure'/>
                <img src={metro} alt='aventure'/>
                
            </div>

        </div>
    )
}
