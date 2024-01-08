import React from 'react';
import './Footer.css';
import logoWhite from '../../assets/logo-white.png'
import qr from '../../assets/Qrcode.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faFax, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';;


export default function Footer() {
  return (
    <div id='footer-section'>
      <div className='grid xs:grid-cols-1 md:grid-cols-4 footer-section-top md:gap-32 xs:gap-12 xs:pt-10 md:pt-16'>
        <div className='footer-section-newsletter'>
          <img src={logoWhite} />
          <p className='py-4'>Subcribe</p>
          <div className='fromParent my-4 py-4 text-xl aos-init aos-animate'>
            <input type='email' placeholder='Enter your email ' />
            <FontAwesomeIcon className='send' icon={faPaperPlane} />
          </div>
        </div>
        
        <div className='footer-section-contact'>
          <h1 >
            Support
          </h1>
          <ul>
            <li >
              <FontAwesomeIcon className='pr-2' style={{ color: 'white' }} icon={faLocationDot} />
              
                Adddress
              
            </li>
            <li >
              <FontAwesomeIcon className='pr-2'  style={{ color: 'white' }} icon={faPhone} />
              
                +213 035 36 60 30 
              
            </li>
            <li >
              <FontAwesomeIcon className='pr-2'   style={{ color: 'white' }} icon={faFax} />
              
              algtlc@gmail.com
            </li>
          </ul>
        </div>

        <div className='footer-section-contact'>
          <h1 >
            Quik Links
          </h1>
          <ul>
            <li >
             Privacy
              
            </li>
            <li >
              Terms of Use
            </li>
            <li >
              FAQ
            </li>
            <li >
              Contact
            </li>
          </ul>
        </div>

        <div className='footer-section-newsletter'>
          <img src={qr} />
          
          <div className='my-4 py-4 grid grid-cols-4 text-xl aos-init aos-animate'>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedinIn} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>

      </div>

    </div>
  )
}
