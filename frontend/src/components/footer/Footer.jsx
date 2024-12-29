import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-container">
                <div className="footer-container-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam recusandae pariatur omnis, modi ab officiis nobis similique fugit qui repudiandae voluptatem totam! Corporis modi, similique commodi natus repellat doloremque quia sapiente illum deserunt sunt asperiores! Doloremque alias, repellendus, dolor atque nostrum est dignissimos dolores soluta impedit quia, a doloribus!</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-container-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-container-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-123-456-7890</li>
                        <li>abc@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 abc.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer