import React, {useState} from 'react';
import './Portfolio.css';
import { portfolioData } from '../../data/portfolioData'
const Portfolio = () => {
    const [menuProducts, setMenuProducts]=useState(portfolioData);

    const filter=(framework)=>{
        setMenuProducts(portfolioData.filter((portfolio)=>
            portfolio.framework===framework
        ))
    }
   {/*const filterLibrary=(library)=>{
        setMenuProducts(portfolioData.filter((portfolio)=>
            portfolio.library===library
        ))
    }*/}
  return (
    <div className='Portfolio-container'>
        <div className='about'>
            <h2>Portfolio</h2>
            <img src="./Line 5.png" alt="line gradient" className='line'/>
        </div>
        <div className='portfolio-menu'>
            <p onClick={()=>setMenuProducts(portfolioData)} className={`${menuProducts===portfolioData?"active-menu":""}`}>All</p>
            <p onClick={()=>filter("react")} className={`${menuProducts[0].framework==="react"?"active-menu":""}`}>React</p>
            <p onClick={()=>filter("html")} className={`${menuProducts[0].framework==="html"?"active-menu":""}`}>HTML & CSS</p>
            {/*<p onClick={()=>filterLibrary("SCSS")} className={`${menuProducts[0].library==="SCSS"?"active-menu":""}`}>SCSS</p>*/}
            <p>Webpack</p>
            <p>API</p>
            <p>Redux</p>
        </div>
        <div className='portfolio-list'>
            {menuProducts.map((portfolio, index)=>
                (
                <div className="portfolio" key={index}> 
                    <img src={portfolio.img} alt="portfolio image" />
                    <div>
                        <p>{portfolio.name}</p>
                        <p ><a>Go to link</a></p>
                    </div>
                </div>
                ))}

        </div>

    </div>
  )
}

export default Portfolio