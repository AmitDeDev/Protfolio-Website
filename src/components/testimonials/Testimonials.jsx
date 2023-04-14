import React from 'react'
import './testimonials.css'
import python from '../../assets/python.jpg'
import cyberimage from '../../assets/cyberimage.jpg'
import Udemy from '../../assets/Udemy.jpg'
import videogames from '../../assets/videogames.jpg'
import podcast from '../../assets/podcast.jpg'
import learn from '../../assets/learn.jpg'
import books4 from '../../assets/books4.jpg'
import work from '../../assets/work.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: python,
    name: 'Full Stack - Python / JavaScript',
    review: 'John Brice collage - 2021 ~ 2022, At this course I learned how to build complex server side using Python - Django & Flask frameworks, and how to integrate with client side using JavaScript, TypeScript, CSS & HTML5 - React, Angular frameworks. during this course I built 3 massive projects and a lot small projects. also I learned how to write complex SQL queries, how to use Docker & Heroku, Railway, Vercel and of course Git / GitHub and much much more.'
  },
  {
    avatar: cyberimage,
    name: 'Cyber Security',
    review: 'Kernelios collage - Jan 2021 ~ Jun 2021, At this course I learned about cyber attacks and defenses methods, I learned how to work with Linux and Metasploit, how to attack web services and how to track packeges via Wireshark. and how to defense against cyber attacks. how to build virtual machines and get accsess to specific directory inside these machines from other virtual machines.'
  },
  {
    avatar: Udemy,
    name: 'Udemy & Codecademy courses',
    review: 'As part of my self-learning, I am always curious to learn new things, new technologies, different languages ​​and diverse work environments. In order to expand my knowledge and specialize in the thing I love the most! - Software Development. So far I have completed over 20 courses on Udemy, various courses such as: Complete C# Masterclass, Complete C# Unity Game Developer 2D & 3D, Design Patterns in C# and .NET, Automate the Boring Stuff with Python Programming, Ultimate AWS Certified Developer Associate 2023 New DVA-C02, Machine Learning A-Z: AI, Python & R + ChatGPT [2023], and much more!'
  },
  {
    avatar: learn,
    name: 'Online learning sites & Forums',
    review: 'As part of independent learning I encounter many problems, therefore I supplement and strengthen my professional knowledge using websites such as AlgoExpert, LeetCode, Cracking the Coding Interview, Code Wars, etc. An integral part of independent learning is the huge challenge and the need to look for solutions to problems without any direction, to know how to look for the missing piece of information in the puzzle in order to learn it and integrate it into my projects in the best possible way. By the way, this is why I also use professional forums usch as: Webdevelopers.com / Stack Overflow / CodeCademy Discuss and more.'
  },
  {
    avatar: podcast,
    name: 'Podcasts',
    review: 'I like to listen to interesting podcasts in the field of development and keep up to date with everything that is new and happening in the field. I listen to the following podcasts a lot: מזיזי הטרנספורמים, עושים תוכנה, מפתחים חסרי תרבות, כלכליסט, קוד פתוח, מפתחים מחוץ לקופסה'
  },
  {
    avatar: books4,
    name: 'Books and Articles',
    review: 'Another way I learn is by reading books and articles in the field of development. My favorite books are: Clean Architecture: A Craftsman`s Guide to software Structure and Design by Robert C. Martin, Design Patterns: Elements Of Reusabe Object Oriented Software by Erich Gamma & The Pragmatic Programmer. From Journeyman to Master by Andrew Hunt, David Thomas, Ward Cunningham and Addison Wesley.'
  },
  {
    avatar: work,
    name: 'Work - gaining practical experience',
    review: 'And of course, every day at work for me is a day to learn something new! I do work as a QA Engineer, but I work under a development team at a gaming company alongside great developers. At work I learn about working in a team, mental flexibility, thinking outside the box and of course how to work in the industry correctly and efficiently. Practical experience is the best school!'
  }

]

function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Education</h5>
      <h2>Courses & Self learning</h2>

      <Swiper className="container testimonials__container" 
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials