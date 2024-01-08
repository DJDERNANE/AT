import React, { useState } from 'react';
import './Home.css';
import bg from '../../assets/bg.png';
import YouTube from 'react-youtube';

export default function Home() {

    const onReady = (event) => {
        // Access to player in all event handlers via event.target
        setPlayer(event.target);
        event.target.playVideo();
    };
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [player, setPlayer] = useState(null);
    return (
        <div className='home-section' id='home-section'>

            <div s data-aos="fade-up" data-aos-anchor-placement="top-center" className='home-section-content aos-init aos-animate'>

                <div className='txt  flex justify-center items-center pt-40  '>
                    <p className='homeTitle basis-3/5'>
                        Empowering Startups <br /> with Cutting-Edge <br /> Solutions.
                    </p>
                    <div className='right basis basis-2/5'>
                        <p className='welcome'>
                            Welcome to our platform designed to fuel the growth of startups. We provide innovative solutions to help you succeed.
                        </p>
                        <div className='btns mt-4'>
                            <button className='py-2 text-white'>Learn More</button>
                            <button className='py-2 text-black'>Watch</button>
                        </div>

                    </div>
                </div>


            </div>



            {/* <img src={bg} />*/}
            <YouTube
                className='vediopresentation' // Custom class for styling
                videoId={'j7pPjNgeAvk'} // YouTube video ID
                opts={{
                    height: '600px', // Custom height
                    width: `${screenWidth}px`, // Custom width
                    playerVars: {
                        autoplay: 1, // Autoplay the video
                        loop: true
                    },

                }}
                onReady={onReady}
            />


        </div>
    )
}
