import React from 'react';
import './Footer.css';
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <>

<div className="footer">
    <div className="footer-icons">
        <div className="facebook"><a href="https://www.facebook.com/faiz.barkati.3/" target='_blank'> <IoLogoFacebook size={30}/></a></div>
        <div className="instagram"><a href="https://www.instagram.com/faizbarkati" target='_blank'><IoLogoInstagram size={30}/></a></div>
        <div className="twitter"><a href="https://twitter.com/faizbarkati" target="_blank"><FaTwitter size={30}/></a></div>
        <div className="youtube"><a href="https://www.youtube.com/channel/UC8htRwzxaQBiVq-5XmQn0RQ" target="_blank"><FaYoutube size={30}/></a></div>
    </div>
    <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
    </ul>
    <p className='copyright'>© 2022 Netflix India</p>
</div>

    </>
  )
}

export default Footer