import React, { useContext, useState } from "react";
import style from "./fooddisplaycard.module.css";
import { assets } from "../../assets/frontend_assets/assets.js";
import {storeContext} from "../../context/StoreContext.jsx";

const FoodDisplayCard = ({ item }) => {
  let { _id, name, image, price, description, category } = item;
  const { cartItems, setCartItems, addToCart, removeFromCart } = useContext(storeContext);
  

  return (
    <div className={style.foodDisplayCard}>
      <div className={style.image}>
        <img src={image} alt="" />
        <div className={style.add_cart}>
          {!cartItems[_id] ? (
            <img
              onClick={() => addToCart(_id)}
              src={assets.add_icon_white}
              alt=""
            />
          ) : (
            <>

                <img
                  onClick={() => removeFromCart(_id)}
                  src={assets.remove_icon_red}
                  alt=""
                />
              
               <span>{cartItems[_id]}</span>
              <img
                onClick={() => addToCart(_id)}
                src={
    
                  assets.add_icon_green
                }
                alt=""
              />
            </>
          )}
        </div>
      </div>
      <div className={style.contents}>
        <div className={style.heading}>
          <h4>{name}</h4>
          <img src={assets.rating_starts} alt="" />
        </div>
        <span>{description}</span>
        <span>${price}</span>
      </div>
    </div>
  );
};

export default FoodDisplayCard;
