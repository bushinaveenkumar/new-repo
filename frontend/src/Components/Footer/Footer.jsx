import React from 'react'
import './Footer.css'
import shopperlogo from '../Assets/shopper-icon.jpg'
import insta_icon from '../Assets/instagram-icon.png'
import pinterest_icon from '../Assets/Pinterest-icon.jpg'
import whatsapp_icon from '../Assets/whatsapp-icon-png-26.jpg'

const Footer = () => {
  return (
    <div className='Footer'> 
        <div className="footer-logo">
            <img className="footer-img" src={shopperlogo} alt=""/>
            <p>SHOPPER</p>
        </div>
        <ul className="Footer-links">
            <li className="footerlink-container">
                <p>About Company</p>
            </li>
            <li className="footerlink-container">
                <p>Products</p>
            </li>
            <li className="footerlink-container">
                <p>Offices</p>
            </li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-social-icon-container">
                <img className='icon' src={insta_icon} alt='' />
            </div>
            <div className="footer-social-icon-container">
                <div className="footer-social-icon-container">
                <img className='icon' src={pinterest_icon} alt='' />
                </div>
            </div>
            <div className="footer-social-icon-container">
                <img className='icon' src={whatsapp_icon} alt='' />
            </div>
        </div>  
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2024 all rights reserved</p>
        </div>      
    </div>
  )
}

export default Footer