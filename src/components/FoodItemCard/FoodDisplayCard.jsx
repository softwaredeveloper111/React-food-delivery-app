import React, { useState } from 'react'
import style from "./fooddisplaycard.module.css";
import { assets } from '../../assets/frontend_assets/assets.js';

const FoodDisplayCard = ({item}) => {
  
  let {_id,name,image,price,description,category} =item

  const [itemCount,setItemCount] =  useState(0)


  
  return (
    <div className={style.foodDisplayCard}>
        <div className={style.image}>
            <img src={image} alt="" />
            <div className={style.add_cart}>
            {itemCount>0 && <img onClick={()=>{setItemCount(prev=>prev-1)}}  src= {assets.remove_icon_red } alt="" />}
            {itemCount>0 &&  <span>{itemCount}</span>}
            <img onClick={()=>{setItemCount(prev=>prev+1)}}  src={ itemCount===0 ?  assets.add_icon_white :  assets.add_icon_green } alt="" />
            </div>

        </div>
       <div className={style.contents}>
         <div className={style.heading}>
          <h4>{name}</h4>
          <img src={assets.rating_starts} alt="" />
        </div>
        <span>
          {description}
        </span>
        <span>
         ${price}
        </span>
       </div>
    </div>
  )
}

export default FoodDisplayCard