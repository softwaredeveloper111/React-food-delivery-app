import React from 'react'
import style from "./nav.module.css";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/frontend_assets/assets.js";

const Nav = () => {

  const navlinks = ["home","menu","mobile-app","contact-us"]
  
  return (
    <div className={style.navContainer}>
       <img src={assets.logo} alt="" className='logo' />

       <div className={style.nav_links_container}>
        {navlinks.map(item=><NavLink style={(e=>e.isActive?{borderBottom:"2px solid rgb(104, 101, 101)"}:{})} to={`/${item==="home"?"":item}`} className={style.link} key={crypto.randomUUID()}>{item}</NavLink>)}
       </div>

       <div className={style.right_nav}>
         <img className={style.search_icon} src={assets.search_icon} alt="" />

         <div className={style.basket_icon_container}>
         <img className={style.basket_icon} src={assets.basket_icon} alt="" />
         <div className={style.active}></div>
         </div>
         <button className={style.signin_btn}>sign in</button>
       </div>
    </div>
  )
}

export default Nav