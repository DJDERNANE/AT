import React from "react";
import logo from '../../assets/logo.png';
import Cats from "../includes/CategoryCard/Cats";
import cat from '../../assets/cat.png';
import cat1 from '../../assets/cat1.png';
import cat2 from '../../assets/cat2.png';
import cat3 from '../../assets/cat3.png';
export default function Categories() {
    return (
        <div className="cats mt-8 p-20" id="cat-section">
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className=' text-5xl pb-2'>Categories</h1>
                    <p className=' text-xl font-thin'>Discover Our Beloved Startups</p>
                </div>
                <img src={logo} alt='cover' />
            </div>
            <div className="grid grid-cols-2 gap-8 my-8">
                <Cats title='Development'  img={cat}/>
                <Cats title='Artificial intelligence'  img={cat1}/>
                <Cats title='Agritech'  img={cat2}/>
                <Cats title='Fintech'  img={cat3}/>
            </div>
        </div>
    )

}