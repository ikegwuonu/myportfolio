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
            <button onClick={()=>setMenuProducts(portfolioData)} className={`${menuProducts===portfolioData?"active-menu":""}`}>All</button>
            <button onClick={()=>filter("react")} className={`${menuProducts[0].framework==="react"?"active-menu":""}`}>React</button>
            <button onClick={()=>filter("html")} className={`${menuProducts[0].framework==="html"?"active-menu":""}`}>Bootstrap</button>
            <button onClick={()=>filter("scss")} className={`${menuProducts[0].framework==="scss"?"active-menu":""}`}>SCSS</button>
            {/*<p onClick={()=>filterLibrary("SCSS")} className={`${menuProducts[0].library==="SCSS"?"active-menu":""}`}>SCSS</p>*/}
            <button>Webpack</button>
            <button>API</button>
            <button>Redux</button>
        </div>
        <div className='portfolio-list'>
            {menuProducts.map((portfolio, index)=>
                (
                <div className="portfolio" key={index}> 
                    <img src={portfolio.img} alt="portfolio image" />
                    <div>
                        <p>{portfolio.name}</p>
                        <p ><a href={portfolio.link}>Go to link</a></p>
                    </div>
                </div>
                ))}

        </div>

    </div>
  )
}

export default Portfolio