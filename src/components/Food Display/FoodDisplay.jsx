import React, { useContext } from 'react'
import style from "./foodDisplay.module.css";
import { storeContext } from "../../context/StoreContext";
import FoodDisplayCard from '../FoodItemCard/FoodDisplayCard';

const FoodDisplay = () => {

 
  const {items,setItems} = useContext(storeContext);


  return (
    <div className={style.FoodDisplayContainer} >

          <h2>Top dishes near you</h2>
         <div className={style.foodDisplayItemContainer}>
          {items.map(item=><FoodDisplayCard key={item._id} item={item}/>)}
         </div>
    </div>
  )
}

export default FoodDisplay