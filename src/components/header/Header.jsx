import React from 'react';
import './header.css';
import CTA from './CTA';
import ME4 from '../../assets/ME4.png';
import HeaderSocials from './HeaderSocials';
import { motion } from "framer-motion";
import TypeWriterEffect from 'react-typewriter-effect';


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
        <h5>Hi there! my name is</h5>
        <h1>Amit Dehas</h1>
        <h5 className="text-light">And I'm a 
              <TypeWriterEffect 
                      textStyle={{
                        color: 'white',
                        fontWeight: 500,
                        fontSize: '1.5em',
                        textAlign: 'center'
                      }}
                startDelay={1000}
                cursorColor="white"
                multiText={[
                  'Fullstack web Developer 💻',
                  'Unity - Game Developer 🎮',
                  'Software Developer 💻'
                ]}
                multiTextDelay={1000}
                typeSpeed={30}
                multiTextLoop
              />
        </h5>
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