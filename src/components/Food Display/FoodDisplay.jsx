import React, { useContext } from 'react'
import style from "./foodDisplay.module.css";
import { storeContext } from "../../context/StoreContext";

const FoodDisplay = () => {

 
  const {items,setItems} = useContext(storeContext);
  console.log(items)

  return (
    <div className={style.FoodDisplayContainer} >

          <h2>Top dishes near you</h2>

    </div>
  )
}

export default FoodDisplay