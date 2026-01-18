import React from 'react'
import style from "./appdownload.module.css";
import { assets } from '../../assets/frontend_assets/assets';

const AppDownload = () => {
  

  

  return (
    <div className={style.app_download_component} id='mobile-app'>
         <h1>For Better Experience Download <br /> Tomato App</h1>
         <div className={style.app_download_images}>
          <img src={assets.play_store} alt="" />
          <img src={assets.app_store} alt="" />
         </div>
    </div>
  )
}

export default AppDownload