import React from 'react';
import './Card.css';


export default function Card(props) {
  return (
    <div className='services-card  cp-service aos-init aos-animate   relative group overflow-hidden transition-transform duration-100 ease-in-out transform hover:scale-105'>
        <img src={props.pic}/>
        <p className='text-xl font-bold py-2'>
            {props.title}
        </p>
        <p className='desc py-2 pb-8 text-sm'>
            {props.desc} 
        </p>
    </div>
  )
}
