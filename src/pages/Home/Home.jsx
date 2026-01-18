import React, { useState } from 'react'
import style from "./home.module.css";
import Header from '../../components/header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/Food Display/FoodDisplay';
import AppDownload from '../../components/App download/AppDownload';

const Home = () => {


  const [category,setCategory]  = useState("All")


  return (
    <div className={style.home} id='home'>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay/>
      <AppDownload/>
      
    </div>
  )
}

export default Home