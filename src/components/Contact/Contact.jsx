import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <div  className='Contact'>
      <div className='contact-one'>
        <h2>Contact</h2>
        <img src="./Line 5.png" alt="line gradient" className='line'/>
      </div>
      <div className='form'>
        <p>I am always eager to discussing
          <b>new projects, partnerships</b>
          in the tech world. 
        </p>
        <div className='form-name'>
          <span><b>Name:</b> </span>
          <input type="text" />
        </div>
        <div className='form-name'>
          <span><b>Email:</b> </span>
          <input type="text" />
        </div>
        <div className='form-name'>
          <span><b>Message:</b> </span>
          <input type="text" />
        </div>
        <br />
        <div className='submit'>Submit</div>
      </div>
        
    </div>
  )
}

export default Contact