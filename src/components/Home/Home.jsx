import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../../data/motion";

const Home = () => {
  return (
    <motion.div
      className="Home"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.div className="about" variants={fadeIn("left", "tween", 0.2, 1)}>
        <h2>About me</h2>
        <img src="./Line 5.png" alt="line gradient" className="line" />
      </motion.div>
      <motion.div
        className="about-details"
        variants={fadeIn("left", "tween", 0.4, 1)}
      >
        Highly skilled and dedicated Frontend Developer with 3 years of
        experience in building responsive, user-centric web applications.
        Proficient in Wordpress, modern JavaScript frameworks, HTML, CSS, and a
        strong advocate of best practices in UI/UX design and SEO practices.
      </motion.div>

      <motion.h2 variants={fadeIn("left", "tween", 0.6, 1)}>
        What I do!
      </motion.h2>
      <motion.div
        className="what-i-do"
        variants={fadeIn("left", "tween", 0.8, 1)}
      >
        <div className="what-one">
          <div className="what-one-intro">
            <img src="./Vector (3).svg" alt="" />
            <p>
              <h3>Web development</h3>
            </p>
          </div>
          <p>
            I find myself most captivated by the power and flexibility of
            React.js. I'm always eager to dive into new projects that leverage
            JavaScript and discover innovative ways to create fast, scalable,
            and user-friendly applications.
          </p>
        </div>

        <div className="what-two">
          <div className="what-one-intro">
            <img src="./Vector (3).svg" alt="" />
            <p>
              <h3>Wordpress development</h3>
            </p>
          </div>
          <p>
            With a focus on user-centric design and cutting-edge technologies, I
            thrive on building intuitive and efficient websites that make a
            positive impact on people's lives. Let's turn ideas into reality and
            shape the future together.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
