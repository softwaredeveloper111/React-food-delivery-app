import React, { useState } from 'react'
import style from "./home.module.css";
import Header from '../../components/header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/Food Display/FoodDisplay';

const Home = () => {


  const [category,setCategory]  = useState("All")


  return (
    <div className={style.home}>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay/>
    </div>
  )
}

export default Home