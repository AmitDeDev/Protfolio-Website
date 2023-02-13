import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {GrLinkedin} from 'react-icons/gr'
import {GoMarkGithub} from 'react-icons/go'

function Footer() {
  
  // const countEl = document.getElementById('count');

  // function updateVisitorCount() {
  //   fetch('https://api.countapi.xyz/update/protfoliopage/mywebsite/?amount=1')
  //     .then(res => res.json())
  //     .then(res => {
  //       countEl.innerHTML = res.value;
  //     })
  // }

  // updateVisitorCount();

  return (
    <footer>
      <a href="#" className='footer__logo'>AMIT DEHAS</a>

      <ul className='permalinks'>
        <li><a href="#">HOME</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#sevices">Services</a></li>
        <li><a href="#protfolio">Projects</a></li>
        <li><a href="#testimonials">Hobbies</a></li>
        <li><a href="#contacts">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://m.me/amit.dehas.3"><FaFacebookF/></a>
        <a href="https://www.instagram.com/amitdehas/"><GrInstagram/></a>
        <a href="https://www.linkedin.com/in/amit-dehas/"><GrLinkedin/></a>
        <a href="https://github.com/AmitDeDev"><GoMarkGithub/></a>
      </div>
      
      <h5>This page was viewed</h5>
      <h3 id="count">0</h3>
      <h5>Times</h5>
      <div className="footer__copyright">
        <small>&copy; Amit Dehas protfolio. All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer