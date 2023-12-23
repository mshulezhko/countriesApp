import React from 'react';
import { CgMoon } from "react-icons/cg";
import { IconContext } from "react-icons";


const Header = () => {
  const body = document.querySelector('body');

  if(localStorage.getItem('light-theme')){
    body.classList.add('light-theme')
  }else{
    body.classList.remove('light-theme')
  }


    const themeChanges = ()=>{
      
      body.classList.toggle('light-theme')

      if(body.classList.contains('light-theme')){
 localStorage.setItem('light-theme',true)
      } else{
        localStorage.removeItem('light-theme')
      }



    }
  return (
    <header className='header'>
        <h1>Where in the world?</h1>
       <button onClick={themeChanges} className="btn" id="theme-toggle-btn">
        <IconContext.Provider value={{ className: "react-icons" }}>

         <CgMoon />
         </IconContext.Provider>
         Dark Mode
        </button>
   
    </header>
  )
}

export default Header
