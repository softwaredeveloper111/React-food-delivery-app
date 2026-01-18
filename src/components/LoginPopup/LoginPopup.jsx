import React, { useState } from 'react'
import style from "./login.module.css";

const LoginPopup = ({setlogin}) => {
  
  function clickEventHandler(){
    setlogin(prev=>false)
  }

  const [signUpState, setsignUpState] = useState(true)

  function clickEventHandler2(){
    setsignUpState(prev=>!prev)
  }


  return (
   <div className={style.wrapper}>
     <div className={style.login_popup}>
         <div className={style.header}>
            <h3>{signUpState ? "Sign Up ": "Login"}</h3> 
           <span onClick={clickEventHandler}><i className="ri-close-line"></i></span>
          </div> 
          
          {
            signUpState ? (
              <form>
               <input type="text" placeholder='Your name'/>
              <input type="email" placeholder='Your email' />
               <input type="password" placeholder='password' />
               <button type='submit'>Create account</button>
              </form>)
            :
            (
              <form>
              <input type="email" placeholder='Your email' />
              <input type="password" placeholder='password' />
               <button type='submit'>Login</button>
              </form>
            )
          }

          <div className={style.privacy}>
            <input type="checkbox" id='check'/>
            <label htmlFor="check">By continuing. I agree to the terms of use & privacy policy.</label> 
          </div>


          <div className={style.already}>
             <span className={style.bb}>{signUpState ? "Already have an account":"Create a new account"}?</span><span onClick={clickEventHandler2} className={style.aa}> {signUpState?"Login here":"Click here"}.</span>
          </div>
          
    </div>
   </div>
  )
}

export default LoginPopup