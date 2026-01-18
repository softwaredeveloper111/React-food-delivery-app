import React, { useContext } from 'react'
import style from "./cart.module.css";
import { assets ,food_list } from "../../assets/frontend_assets/assets.js";
import { storeContext } from '../../context/StoreContext.jsx';
import { useNavigate } from "react-router-dom";

const Cart = () => {
 
 const navigate = useNavigate()
 const {items,setItems,cartItems,setCartItems,addToCart,removeFromCart} =  useContext(storeContext)

 
 let filterProducts = [];
 let subtotal = 0;
  for(let i in cartItems){
    // i is an id of the foodproduct
    let pr = items.find(item=>item._id===i)
    filterProducts.push({...pr,quantity:cartItems[i]})
  }

  filterProducts.forEach(item=>{
    subtotal+=(Number(item.price)*Number(item.quantity))
  })


  function navigateToPlaceOrder(){
    navigate("/order")
  }


  
  return (
    <div className={style.cart}>

        <div className={style.gridTable}>

         <div className={style.tcontent}>
          <span>Items</span>
          <span>Title</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Toltal</span>
          <span>Remove</span>
         </div>

         { filterProducts.length>0 ? filterProducts.map((item,index)=>(

          <div className={style.tcontent}>
            <span><img className={style.foodImg} src={item.image} alt="" /></span>
            <span>{item.name}</span>
            <span>${item.price}</span>
            <span>{item.quantity}</span>
            <span>${Number(item.quantity) * Number(item.price)}</span>
            <span><img className={style.crossIcon} src={assets.cross_icon} alt="" /></span>
          </div>


         )) : <h4 className={style.noproudct}>No product has been selected.😭</h4>}
          
        </div> 

       
       {filterProducts.length>0 && (
             <div className={style.cartBottom}>
             <div className={style.cartBottom_leftpart}>
                  <h4>Cart Totals</h4>
                  <div className={style.calculate}>
                    <div className={style.innerCalculate}>
                      <span>Subtotal</span>
                      <span>${subtotal}</span>
                    </div>
                    <div className={style.innerCalculate}>
                      <span>Delivery Fee</span>
                      <span>$5</span>
                    </div>
                    <div className={style.innerCalculate}>
                      <h5>Total</h5>
                      <h5>${subtotal+5}</h5>
                    </div>
                  </div>
                  <button onClick={navigateToPlaceOrder}>Proceed to checkout</button>
             </div>


             <div className={style.cartBottom_rightpart}>
                   <span>If you have a promo code, Enter it here</span>
                   <div className={style.promocode_input}>
                    <input type="text" placeholder='promo code' />
                   <button type='button'>submit</button>
                   </div>
             </div>

        </div>
       )}
       
    </div>
  )
}

export default Cart