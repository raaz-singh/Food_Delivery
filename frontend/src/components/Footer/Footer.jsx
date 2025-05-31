import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>We're passionate about delivering your favorite meals hot and fresh. From local favorites to global cuisines, we partner with the best restaurants to bring deliciousness to your doorstep — fast, easy, and reliable.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>

                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </div>

                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 658-252-4967</li>
                        <li>cotact@raaz.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2025 © Tomato.com - All Rights Reserved</p>
        </div>
    )
}

export default Footer