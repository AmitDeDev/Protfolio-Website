import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import './contact.css'

// Email imports
import { useRef } from 'react';
import emailjs from 'emailjs-com'

//Toas import
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const form = useRef();

  const notify = () => toast("The message has been sent! Thank you! I will answer as soon as possible");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_10xkl9h', 'template_em4xmm9', form.current, 'h_yQ6QEgaNQY7JBn0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h6>amitprotfolio@gmail.com</h6>
            <a href="mailto:amitprotfolio@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Amit Dehas</h5>
            <a href="https://m.me/amit.dehas.3" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>Amit Dehas</h5>
            <a href="https://wa.me/+972502666492" target="_blank">Send a message</a>
            {/* Need to Investigate from WhatsApp API - https://api.whatsapp.com */}
            {/* https://api.whatsapp.com/send?phone=+972502666492 */}
            {/* <a href="https://wa.me/+972502666492">Send a message</a> */}
          </article>
        </div>

          {/* Need to investigate why I'm not getting mails via - amitprotfolio@gmail.com -> emailJS */}
        
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="5" placeholder='Your Message' required></textarea>
          <button onClick={notify} type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        <ToastContainer />
      </div>
    </section>
  )
}

export default Contact 