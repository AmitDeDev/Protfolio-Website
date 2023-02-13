import React from 'react'
import './header.css'
import CTA from './CTA'
import ME4 from '../../assets/ME4.png'
import HeaderSocials from './HeaderSocials'
import { motion } from "framer-motion";

// import Typical from 'react-typical'; -> somehow it does not work * I need to solve it soon as possible
// There is an issue with the -> npm install --save react-typical

function Header() {
  return (
    <header>
      <div className="container header_container">
        <motion.div whileHover={{ scale: 1, rotate: 10 }}
            whileTap={{
              scale: 0.5,
              rotate: -20,
              borderRadius: "100%",
            }}>
        <h5>Hello I'm</h5>
        <h1>Amit Dehas</h1>
        <h5 className="text-light">I'm a Fullstack Developer</h5>
        </motion.div>
        <CTA />
        <HeaderSocials />

        <motion.div whileHover={{ scale: 1, rotate: 10 }}
            whileTap={{
              scale: 0.5,
              rotate: -20,
            }} className='me'>
          <img src={ME4} alt='me' />
        </motion.div>

        <a href="#contact" className='scroll_down'>Scroll Down -{'>'}{'>'} </a>
      </div>
    </header>
  )
}

export default Header