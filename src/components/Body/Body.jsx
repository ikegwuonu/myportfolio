import React, { useContext, useState } from 'react'
import './Body.css'
import Home from '../Home/Home'
import Resume from '../Resume/Resume'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'
import { AppContext } from '../../context'

const Body = () => {
    const {menu, setMenu,mobile,toggleSideBar,setToggleSideBar}=useContext(AppContext);
     
  return (
    <div className='Body'>
        <div className={`left-side ${mobile && toggleSideBar?"toggle":""}`}>
            <img src='./closee.png' className='display' onClick={()=>setToggleSideBar(!toggleSideBar)}/>
            <img src="./3d-img.png" alt="profile pic" className='profile-pic'/>
            <h2>Juliet Ikegwuonu</h2>
            <p>Frontend Developer</p>
            <div className='socials-div'>
                <a href="https://github.com/ikegwuonu">
                    <img src="./Vector (1).svg" className='socials' alt="linkedin" />
                </a>
                <a href="http://wwww.linkedin.com/in/juliet-ikegwuonu">
                    <img src="./ri_github-fill.png" className='socials' alt="github" />
                </a>
            </div>
            <div className='contact'>
                <div className='contact-detail'>
                    <img src="./gridicons_phone.png" alt="phone" />
                    <div className='contact-info'>
                        <p>Phone</p>
                        <p><b>+234 812 083 274</b></p>
                    </div>
                </div>
                <hr />
                <div className='contact-detail'>
                    <img src="./mail.svg" alt="phone" />
                    <div className='contact-info'>
                        <p>Email</p>
                        <p><b>juliet.kegwuonu@gmail.com</b></p>
                    </div>
                </div>
                <hr />
                <div className='contact-detail'>
                    <img src="./locate.svg" alt="phone" />
                    <div className='contact-info'>
                        <p>Location</p>
                        <p><b>Abuja, Nigeria</b></p>
                    </div>
                </div>
               
                <hr />

            </div>
            
            <a href="./FRONTREAL.pdf" download="Juliet_CV">
                <div className='download'>
                    <img src="./doenload.svg" alt="download cv" />
                    <p>Download CV</p>
                </div>
            </a>
            <br/>
        </div>
        <div className="right-side">
            {menu==="home" && <Home/>}
            {menu==="resume" && <Resume/> }
            {menu ==="portfolio" && <Portfolio/>}
            {menu ==="contact" && <Contact/>}

        </div>
    </div>
  )
}

export default Body