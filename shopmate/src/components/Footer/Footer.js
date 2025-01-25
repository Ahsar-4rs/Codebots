import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
            <h1 className='logo'>ShopMate</h1>
            <p>Thankyou for visiting our shop and we hope to have satisfied you. In case of any irregularities contact us.</p>
            <div className='footer-social-icons'>
                <img src={assets.facebook} alt=''/>
                <img src={assets.twitter} alt=''/>
                <img src={assets.instagram} alt=''/>
                <img src={assets.linkedin} alt=''/>
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>ShopMate</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Bills and Payments</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-32434-34234</li>
                <li>shopmatesos@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 @foryou.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer
