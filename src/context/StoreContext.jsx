import React, { createContext, useEffect, useState } from 'react'
import { food_list } from "../assets/frontend_assets/assets.js";
export const storeContext = createContext(null);

const StoreContext = ({children}) => {

 const [items,setItems] =   useState(food_list)      
 
  

  return (
    <storeContext.Provider value={{items,setItems}}>{children}</storeContext.Provider>
  )
}

export default StoreContext