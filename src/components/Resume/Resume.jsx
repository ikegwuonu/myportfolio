import React from "react";
import "./Resume.css";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../data/motion";

const Resume = () => {
  return (
    <motion.div
      className="Resume"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.div
        className="contact-one"
        variants={fadeIn("left", "tween", 0.2, 1)}
      >
        <h2>Resume</h2>
        <img src="./Line 5.png" alt="" className="line" />
      </motion.div>
      <div className="what-i-do">
        <motion.div
          className="what-one"
          variants={fadeIn("left", "tween", 0.4, 1)}
        >
          <div className="what-one-intro">
            <img src="./degree-hat.png" alt="" />
            <h3>Certification</h3>
          </div>
          <p>Hiit Plc</p>
          <p>Certification in Web Development</p> <br />
          <p>Sololearn</p>
          <p>Certification in SEO Coding</p>
        </motion.div>

        <motion.div
          className="what-two"
          variants={fadeIn("left", "tween", 0.6, 1)}
        >
          <div className="what-one-intro">
            <img src="./briefcase.png" alt="" />
            <h3>Experience</h3>
          </div>
          <p>Acme Software Labs</p>
          <p>Frontend developer intern</p> <br />
          <p>CodSoft</p>
          <p>Web development intern</p>
        </motion.div>
      </div>
      <br />
      <motion.div className="core" variants={fadeIn("left", "tween", 0.6, 1)}>
        <h4>Core competencies</h4>
        <ul>
          <li>
            <b>Languages & frameworks:</b> HTML5, CSS, JavaScript (ES6+),
            React.js, SASS/SCSS, Bootstrap, Tailwind CSS, Redux
          </li>
          <li>
            <b>Tools & Technologies:</b> Git, GitHub, Webpack, NPM, WordPress,
            API's
          </li>
          <li>
            <b>Design & Prototyping:</b> Responsive Web design, Cross-browser
            compatibilty
          </li>
          <li>
            <b>Version control:</b> GitHub
          </li>
          <li>
            <b>Soft-skills:</b> Communication, writing, time manaagement
          </li>
        </ul>
      </motion.div>
      <motion.div className='variants={fadeIn("left","tween",0.8,1)}'>
        <h3>Professional Experience & Projects</h3>
        <p>
          Frontend Developer | Freelance <br />
          Developed and deployed user-friendly web applications using React.js,
          increasing user engagement. <br />
          Integrated APIs, enhancing the website's functionality and{" "}
          <performance className="br"></performance>
          Optimized website performance, reducing page load time, resulting in a
          better user experience.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Resume;
