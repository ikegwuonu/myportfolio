import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2yh4d51', 'template_lfkh9f8', form.current, {
        publicKey: 'cDVuHy-VOb1Y9osOD',
      })
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          form.current.reset(); // Reset form after successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className='Contact'>
      <div className='contact-one'>
        <h2>Contact</h2>
        <img src="./Line 5.png" alt="line gradient" className='line' />
      </div>
      <div className='form'>
        <p>
          I am always eager to discuss <b>new projects, partnerships</b> in the tech world.
        </p>
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <div className='form-name'>
            <span><b>Name:</b> </span>
            <input type="text" name='from_name' required />
          </div>
          <div className='form-name'>
            <span><b>Email:</b> </span>
            <input type="email" name='from_email' required />
          </div>
          <div className='form-name'>
            <span><b>Message:</b> </span>
            <textarea name='message' required />
          </div>
          <button className='submit' type="submit">Submit</button>
        </form>
        <br />
      </div>
    </div>
  );
};

export default Contact;
