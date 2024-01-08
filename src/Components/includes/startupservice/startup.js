import React, {useEffect} from 'react';
import './startup.css';


export default function StartupDetails(props) {
    return (
        <div className='startupsSection py-2'>
            <div className='grid grid-cols-2 gap-4 my-2'>
                <img src={props.image} alt='startup' />
                <h1 className='text-2xl py-8'>{props.name}</h1>
            </div>
        </div>
    )
}
