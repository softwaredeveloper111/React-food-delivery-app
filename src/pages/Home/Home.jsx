import React from 'react'
import style from "./home.module.css";
import Header from '../../components/header/Header'

const Home = () => {
  return (
    <div className={style.home}>
      <Header/>
    </div>
  )
}

export default Home