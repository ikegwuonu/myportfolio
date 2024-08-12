import React from 'react'
import './Resume.css'

const Resume = () => {
  return (
    <div className='Resume'>
    
      <div className='contact-one'>
        <h2>Resume</h2>
        <img src="./Line 5.png" alt="" className='line'/>
      </div>
      <div className='what-i-do'>
        <div className='what-one'>
          <div  className='what-one-intro'>
            <img src="./degree-hat.png" alt="" />
            <h3>Certification</h3>
          </div>
          <p>Hiit Plc</p>
          <p>Certification in Web Development</p> <br />
          <p>Sololearn</p>
          <p>Certification in SEO Coding</p>
        </div>

        <div className="what-two">
          <div  className='what-one-intro'>
            <img src="./briefcase.png" alt="" />
            <h3>Experience</h3>
          </div>
          <p>Acme Software Labs</p>
          <p>Frontend developer intern</p> <br />
          <p>CodSoft</p>
          <p>Web development intern</p>
        </div>
      </div>
      <br />
      <div className='core'>
        <h4>Core competencies</h4>
        <ul>
          <li><b>Languages & frameworks:</b> HTML5, CSS, JavaScript (ES6+), React.js, SASS/SCSS, Bootstrap, Tailwind CSS, Redux</li>
          <li><b>Tools & Technologies:</b> Git, GitHub, Webpack, NPM, WordPress, API's</li>
          <li><b>Design & Prototyping:</b> Responsive Web design, Cross-browser compatibilty</li>
          <li><b>Version control:</b> GitHub</li>
          <li><b>Soft-skills:</b> Communication, writing, time manaagement</li>
          
        </ul>
      </div>
      <div>
        <h3>Professional Experience & Projects</h3>
        <p>
          Frontend Developer | Freelance <br />
          

          Developed and deployed user-friendly web applications using React.js, increasing user engagement. <br />
          Integrated APIs, enhancing the website's functionality and <performance className="br"></performance>
          Optimized website performance, reducing page load time, resulting in a better user experience.</p>
      </div>

    </div>
  )
}

export default Resume