import React from 'react'
import style from "./explore.module.css";
import { menu_list } from "../../assets/frontend_assets/assets.js";

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className={style.explore_menu_container}>
        <h1>Explore our menu</h1>
        <p>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <div className={style.menu_list_items}>
          {menu_list.map((item,index)=>{
            return (
              <div key={index} onClick={()=>{setCategory(prev=>prev===item.menu_name ? "All":item.menu_name)}} className={style.menu_list_item}>
                <img className={category===item.menu_name?style.active:""} src={item.menu_image} alt="" />
                <span>{item.menu_name}</span>
              </div>
            )
          })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu