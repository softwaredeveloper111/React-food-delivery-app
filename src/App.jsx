import React from 'react'
import Nav from './components/Nav/Nav'
import Home from './pages/Home/Home'
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className='app'>
       <Nav/>
       <Home/>
       <Footer/>
    </div>
  )
}

export default App