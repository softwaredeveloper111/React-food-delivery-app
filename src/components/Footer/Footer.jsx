import React from 'react'
import style from "./Footer.module.css";
import { assets } from '../../assets/frontend_assets/assets';

const Footer = () => {
  
  return (
    <div className={style.footerContainer} id='contact-us'>
      
      <div className={style.footerContents}>
         <div className={style.left}>
        <img src={assets.logo} alt="logo" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident id, saepe facere quibusdam aut fugit eum accusantium delectus animi repellendus?</p>
        <div className={style.social_media_icons}>
           <img src={assets.facebook_icon} alt="" />
           <img src={assets.twitter_icon} alt="" />
           <img src={assets.linkedin_icon} alt="" />
        </div>
       </div>


       <div className={style.middle}>
        <h2>COMPANY</h2>
        <div className={style.middlelinks}>
          <span>Home</span>
          <span>About Us</span>
          <span>Delivery</span>
          <span>Privacy Policy</span>
        </div>
       </div>

       <div className={style.right}>
        <h2>GET IN TOUCH</h2>
        <div className={style.rightInfo}>
          <span>+1-2012-45-890</span>
          <span>computerscienceengineer1@gmail.com</span>
        </div>
       </div>
      </div>

       <hr />

       <span className={style.copyright}>Copyright 2026© Tomato.com - All Right Reserved.</span>

    </div>
  )
}

export default Footer