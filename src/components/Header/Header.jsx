import React, { useContext, useState } from 'react';
import {AppContext} from '../../context';
import './Header.css';

const Header = () => {
    const {menu,setMenu,mobile,toggleSideBar,setToggleSideBar}=useContext(AppContext);

  return (

    <div className='Header'>
        <div className='logo'>
            <img src='./icons8-menu-bar.svg' className='display' onClick={()=>setToggleSideBar(!toggleSideBar)}/> 
            <p>Juliet <span className='header-color'>Ikegwuonu</span> </p>
            <img src="./ph_moon.png" alt="" />
        </div>
        {/*menu begins*/}
        <div  className='menu-intro'>
            <div> </div>
        <div className='menu' >
            <div className={`${menu==="home"?"active":"not-active"}`} onClick={()=>setMenu("home")}>
                <img src="./Vector.png" alt="" />
                <p>Home</p>
            </div>
            <div className={` ${menu==="resume"?"active":"not-active"}`}  onClick={()=>setMenu("resume")}>
                <img src="./resume icon.png" alt="" />
                <p>Resume</p>
            </div>
            <div className={`${menu==="portfolio"?"active":"not-active"}`}  onClick={()=>setMenu("portfolio")}>
                <img src="./work icon.svg" alt="" />
                <p>Portfolio</p>
            </div>
            <div className={`${menu==="contact"?"active":"not-active"}`}>
                <img src="./contact icon.svg" alt="" onClick={()=>setMenu("contact")}/>
                <p>Contact</p>
            </div>
        </div>
        </div>
        
    </div>
    
  )
}

export default Header