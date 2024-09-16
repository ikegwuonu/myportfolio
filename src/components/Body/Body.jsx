import React, { useContext, useState } from "react";
import "./Body.css";
import Home from "../Home/Home";
import Resume from "../Resume/Resume";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import { AppContext } from "../../context";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../data/motion";

const Body = () => {
  const { menu, setMenu, mobile, toggleSideBar, setToggleSideBar } =
    useContext(AppContext);

  return (
    <div className="Body">
      <motion.div
        className={`left-side ${mobile && toggleSideBar ? "toggle" : ""}`}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <img
          src="./closee.png"
          className="display"
          onClick={() => setToggleSideBar(!toggleSideBar)}
        />
        <motion.img
          src="./3d-img.png"
          alt="profile pic"
          className="profile-pic"
          variants={fadeIn("right", "tween", 0.2, 1)}
        />
        <motion.h2 variants={fadeIn("right", "tween", 0.2, 1)}>
          Juliet Ikegwuonu
        </motion.h2>
        <motion.p variants={fadeIn("right", "tween", 0.2, 1)}>
          Frontend Developer
        </motion.p>
        <motion.div
          className="socials-div"
          variants={fadeIn("right", "tween", 0.4, 1)}
        >
          <a href="https://linkedin.com/in/juliet-ikegwuonu">
            <img src="./Vector (1).svg" className="socials" alt="linkedin" />
          </a>
          <a href="https://github.com/ikegwuonu">
            <img src="./ri_github-fill.png" className="socials" alt="github" />
          </a>
        </motion.div>
        <div className="contact">
          <motion.div
            className="contact-detail"
            variants={fadeIn("right", "tween", 0.4, 1)}
          >
            <img src="./gridicons_phone.png" alt="phone" />
            <div className="contact-info">
              <p>Phone</p>
              <p>
                <b>+234 812 083 274</b>
              </p>
            </div>
          </motion.div>
          <hr />
          <motion.div
            className="contact-detail"
            variants={fadeIn("right", "tween", 0.6, 1)}
          >
            <img src="./mail.svg" alt="phone" />
            <div className="contact-info">
              <p>Email</p>
              <p>
                <b>juliet.kegwuonu@gmail.com</b>
              </p>
            </div>
          </motion.div>
          <hr />
          <motion.div
            className="contact-detail"
            variants={fadeIn("right", "tween", 0.8, 1)}
          >
            <img src="./locate.svg" alt="phone" />
            <div className="contact-info">
              <p>Location</p>
              <p>
                <b>Abuja, Nigeria</b>
              </p>
            </div>
          </motion.div>

          <hr />
        </div>

        <motion.a
          href="./FRONTREAL.pdf"
          download="Juliet_CV"
          variants={fadeIn("right", "tween", 1, 1)}
        >
          <div className="download">
            <img src="./doenload.svg" alt="download cv" />
            <p>Download CV</p>
          </div>
        </motion.a>
        <br />
      </motion.div>
      <div className="right-side">
        {menu === "home" && <Home />}
        {menu === "resume" && <Resume />}
        {menu === "portfolio" && <Portfolio />}
        {menu === "contact" && <Contact />}
      </div>
    </div>
  );
};

export default Body;
