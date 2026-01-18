import React, { createContext, useEffect, useState } from 'react'
import { food_list } from "../assets/frontend_assets/assets.js";
export const storeContext = createContext(null);

const StoreContext = ({children}) => {

 const [items,setItems] =   useState(food_list) ;
 const [cartItems,setCartItems] = useState({});
 
 const addToCart = (itemId)=>{
    if(!cartItems[itemId]){
      setCartItems(prev=>({...prev,[itemId]:1}))
    }
    else{
      setCartItems(prev=>({...prev,[itemId]:prev[itemId]+1}))
    }
 }
 
 const removeFromCart = (itemId)=>{
    setCartItems(prev=>({...prev,[itemId]:prev[itemId]-1}))
 }
  

 useEffect(()=>{
   
 },[cartItems])

  return (
    <storeContext.Provider value={{items,setItems,cartItems,setCartItems,addToCart,removeFromCart}}>{children}</storeContext.Provider>
  )
}

export default StoreContext