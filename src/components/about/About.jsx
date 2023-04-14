import React from 'react'
import './about.css'
import aboutmeimage from '../../assets/aboutmeimage.jpg'
import {FaAward} from 'react-icons/fa'
import {FaLaptopCode} from 'react-icons/fa'
import {BiWinkSmile} from 'react-icons/bi'
import {useState} from 'react'

function About() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={aboutmeimage} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <a href="#experience" className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years working on self projects</small>
            </a>
              
            <a href="#protfolio" className='about__card'>
              <FaLaptopCode className='about__icon'/>
              <h5>Projects</h5>
              <small>15+ and its just the beginning</small>
            </a>
              
            <a href="#testimonials" className='about__card'>
              <BiWinkSmile className='about__icon'/>
              <h5>Education</h5>
              <small>20+ Courses & Self learning</small>
            </a>

          </div>

            <p>
              I am an ambitious full-stack developer with fast learning ability, consistently strive to develop and learn new things.
              A great team worker with strong interpersonal skills that always eager to face new challenges.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About