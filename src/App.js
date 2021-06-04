import React, { useState, useEffect } from 'react';
import './global-style.css';
import {style} from './dynamic-style.js';
import Header from './components/header/Header';
import bg_m_dark from './images/bg-mobile-dark.jpg';
import bg_d_dark from './images/bg-desktop-dark.jpg';
import bg_m_light from './images/bg-mobile-light.jpg';
import bg_d_light from './images/bg-desktop-light.jpg';





function App() {

  const [isDark, setIsDark] = useState(true);

  function handleClick(){

    setIsDark(
      isDark ? false : true
    )
  }
 
  useEffect(() => {
    isDark? document.body.style.backgroundColor = style.dark.app_bg.backgroundColor
        :  document.body.style.backgroundColor = style.light.app_bg.backgroundColor
  }, [isDark])

  return (
    

    <div className='App'
        id= 'app'
        >
        <picture>
        <source srcSet={isDark? bg_m_dark : bg_m_light} media="(max-width: 768px)" />
        <img
          className="app-bg-image"
          srcSet={isDark? bg_d_dark : bg_d_light}
          alt="" 
        />
        </picture>
        <div className = 'app-container'>
        <Header isDark = {isDark} handleClick = {handleClick}/>
      </div>
    </div>
  
  );
}

export default App;
