import React from 'react'
import './testimonials.css'
import ME from '../../assets/ME.jpg'
import surf2 from '../../assets/surf2.jpg'
import boxing from '../../assets/boxing.jpg'
import Motorcycle from '../../assets/motorcycle.jpg'
import videogames from '../../assets/videogames.jpg'
import painter from '../../assets/painter.jpg'
import learn from '../../assets/learn.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: surf2,
    name: 'Surfing',
    review: 'I love the sea, I think it is the best place to improve your thinking by listening to the waves and the birds Yes I am a surfer'
  },
  {
    avatar: boxing,
    name: 'Boxing',
    review: 'I love boxing I am a professional MMA fighter the thing I love the most about this kind of sport is that you learn how to fight your biggest fears'
  },
  {
    avatar: Motorcycle,
    name: 'Motorcycle',
    review: 'I love to Ride motorcycles I love the open space above my head and the wind the adrenaline shot that it gives you when you hit the gas handle'
  },
  {
    avatar: videogames,
    name: 'Video Games',
    review: 'Ever since I remember myself I loved video games it was a love from first look '
  },
  {
    avatar: painter,
    name: 'Painting',
    review: 'I love to open my mind into new imagination and paint the thing thats on my mind'
  },
  {
    avatar: learn,
    name: 'Learning Writing and Reading',
    review: 'I am always eager to learn new things throu books and articles that I didnt knew before I love to hear podcasts and I love to write short stories about thing Ive learned and the jouney along the road'
  }

]

function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Fun Facts About Me</h5>
      <h2>My Hobbies</h2>

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