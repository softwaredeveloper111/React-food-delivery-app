import React, { useState } from 'react'
import Nav from './components/Nav/Nav'
import Home from './pages/Home/Home'
import Footer from "./components/Footer/Footer";
import Routing from './utils/Routing';
import LoginPopup from './components/LoginPopup/LoginPopup';

const App = () => {

  
  const [login, setlogin] = useState(false)

  return (
    <>
    {login ? <LoginPopup setlogin={setlogin}/>:<></>}
    <div className='app'>
       <Nav setlogin = {setlogin}/>
       <Routing/>
       <Footer/>
    </div>
   </>
  )
}

export default App