import React from 'react'
import style from "./header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
       <div className={style.header_content}> 
        <h1>Order your <br /> favourite food here</h1>
       <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
       <button>View Menu</button>
       </div>
    </div>
  )
}

export default Header