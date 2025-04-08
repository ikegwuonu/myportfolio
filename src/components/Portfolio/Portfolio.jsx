import React, { useState } from "react";
import "./Portfolio.css";
import { portfolioData } from "../../data/portfolioData";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../data/motion";

const Portfolio = () => {
  const [menuProducts, setMenuProducts] = useState(portfolioData);
  const [active, setActive] = useState("All");

  const filter = (framework) => {
    setActive(framework);
    setMenuProducts(
      portfolioData.filter((portfolio) => portfolio.framework === framework)
    );
  };
  {
    /*const filterLibrary=(library)=>{
        setMenuProducts(portfolioData.filter((portfolio)=>
            portfolio.library===library
        ))
    }*/
  }
  return (
    <motion.div
      className="Portfolio-container"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.div
        className="about"
        // variants={fadeIn("left", "tween", 0.2, 1)}
      >
        <h2>Portfolio</h2>
        <img src="./Line 5.png" alt="line gradient" className="line" />
      </motion.div>
      <motion.div
        className="portfolio-menu"
        // variants={fadeIn("left", "tween", 0.2, 1)}
      >
        <button
          onClick={() => setMenuProducts(portfolioData)}
          className={`${active === "All" ? "active-menu" : ""}`}
        >
          All
        </button>
        <button
          onClick={() => filter("Next.js")}
          className={`${active === "Next.js" ? "active-menu" : ""}`}
        >
          Next.js
        </button>
        <button
          onClick={() => filter("react")}
          className={`${active === "react" ? "active-menu" : ""}`}
        >
          React
        </button>
        <button
          onClick={() => filter("html")}
          className={`${active === "html" ? "active-menu" : ""}`}
        >
          Bootstrap
        </button>
        <button
          onClick={() => filter("scss")}
          className={`${active === "scss" ? "active-menu" : ""}`}
        >
          SCSS
        </button>
        {/*<p onClick={()=>filterLibrary("SCSS")} className={`${menuProducts[0].library==="SCSS"?"active-menu":""}`}>SCSS</p>*/}
        {/* <button>Webpack</button>
        <button>API</button>
        <button>Redux</button> */}
      </motion.div>
      <div className="portfolio-list">
        {menuProducts.map((portfolio, index) => (
          <motion.div
            className="portfolio"
            key={index}
            // variants={fadeIn("left", "tween", (index + 1) * 0.2, 1)}
          >
            <img src={portfolio.img} alt="portfolio image" />
            <div>
              <p>{portfolio.name}</p>
              <p>
                <a href={portfolio.link}>Go to link</a>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;
