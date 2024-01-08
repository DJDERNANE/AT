import React from 'react';
import './Services.css';
import logo from '../../assets/logo2.png';
import CardService from '../includes/CardService/CardService';
import cover from '../../assets/cover.png'
import cover1 from '../../assets/cover1.png'
import cover2 from '../../assets/cover2.png'
import cover3 from '../../assets/cover3.png'


export default function  Services(){
    return (
        <div className='servies-parent mt-8 p-20 ' id='services-section'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-white text-5xl pb-2'>Our Services</h1>
                    <p className='text-white text-xl font-thin'>Discover Our Range of Services for Startups</p>
                </div>

            </div>
            <div className='grid grid-cols-4 gap-8 my-20'>
                <CardService delay="150" title='Internet offers for startups' desc='Newton thought that light was made up of particles.' img={cover}/>
                <CardService delay="200" title='Linking startups with the market' desc='“Quantum mechanics” is the description of the behaviour of matter' img={cover1}/>
                <CardService delay="250" title='Supporting startups with technical solutions' desc='They describe a universe consisting of bodies moving' img={cover2}/>
                <CardService delay="300" title='The housing and the hosting services' desc='They finally obtained a consistent description of the behaviour ' img={cover3}/>
            </div>
        </div>
    )
}