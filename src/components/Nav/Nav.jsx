import React, { useState } from 'react'
import style from "./nav.module.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/frontend_assets/assets.js";

const Nav = ({setlogin}) => {

  const navlinks = ["home","menu","mobile-app","contact-us"]
  const [menu,setMenu] = useState("")

  function clickEventHanlder(){
    setlogin(prev=>true)
  }
  
  return (
    <div className={style.navContainer}>
       <img src={assets.logo} alt="" className='logo' />

       <div className={style.nav_links_container}>
        {navlinks.map((item,index)=><a onClick={()=>setMenu(prev=>item)} href={`#${item}`}  className={`${style.link} ${menu === item ? style.bb : ""}`} key={index}>{item}</a>)}
       </div>

       <div className={style.right_nav}>
         <img className={style.search_icon} src={assets.search_icon} alt="" />

         <div className={style.basket_icon_container}>
         <Link to="/cart"><img className={style.basket_icon} src={assets.basket_icon} alt="" /></Link>
         <div className={style.active}></div>
         </div>
         <button className={style.signin_btn} onClick={clickEventHanlder}>sign in</button>
       </div>
    </div>
  )
}

export default Nav