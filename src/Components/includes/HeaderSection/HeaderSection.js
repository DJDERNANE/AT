import React, {useEffect} from 'react';
import './HeaderSection.css';
import logo from '../../../assets/logo.png';
import logo2 from '../../../assets/logo2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HeaderSection(props) {
    useEffect(() => {
        AOS.init({
          duration: 800,
          easing: 'ease-in-out',
          offset: 160, // Adjust the offset as needed
        });
      }, []);
    return (
        <div className='section-header my-10'>
            <div className='section-header-icon flex items-center justify-center aos-init aos-animate' data-aos="flip-left" data-aos-offset='50'>
                <img src={props.pro ? logo2 : logo} alt='logo' />
            </div>
            <div className='mt-8 text-center'>
                
                <h1 className={`md:text-5xl font-bold xs:text-2xl`} data-aos="zoom-in" data-aos-offset="160" >
                    {props.title} <br/> {props.title2}
                </h1>
                <h5 className={`md:text-lg font-semibold xs:text-lg `} data-aos="zoom-in" data-aos-offset="100">
                   {props.subTitle}
                </h5>
            </div>

        </div>
    )
}
