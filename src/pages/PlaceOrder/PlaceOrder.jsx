import React from 'react'
import style from "./placeorder.module.css";

const PlaceOrder = () => {
  return (
    <div className={style.placroder_container}>
           <div className={style.placeorder_container_left}>
              <h2>Delivery Information</h2>
              <form>
                <div>
                  <input type="text" placeholder='First name' />
                  <input type="text" placeholder='Last name' />
                </div>

                <input type="email" placeholder='Email address' />
                <input type="text" placeholder='Street' />
                <div>

                  <input type="text" placeholder='City' />
                  <input type="text" placeholder='state' />
                </div>
                <div>
                  <input type="text" placeholder='Zip code' />
                  <input type="text" placeholder='Country' />
                </div>
               <input type="tel" placeholder='Phone' />
              </form>
           </div>


           <div className={style.placeorder_container_right}>
           
                  <h4>Cart Totals</h4>
                  <div className={style.calculate}>
                    <div className={style.innerCalculate}>
                      <span>Subtotal</span>
                      <span>${10}</span>
                    </div>
                    <div className={style.innerCalculate}>
                      <span>Delivery Fee</span>
                      <span>$5</span>
                    </div>
                    <div className={style.innerCalculate}>
                      <h5>Total</h5>
                      <h5>${10+5}</h5>
                    </div>
                  </div>
                  <button>Proceed to payment</button>
          
           </div>
    </div>
  )
}

export default PlaceOrder