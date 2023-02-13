import React from 'react'
import './experience.css'
import {ImHtmlFive} from 'react-icons/im'
import {SiJavascript} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {IoLogoCss3} from 'react-icons/io'
import {SiAngular} from 'react-icons/si'
import {SiBootstrap} from 'react-icons/si'
import {SiTypescript} from 'react-icons/si'
import {SiPython} from 'react-icons/si'
import {DiDjango} from 'react-icons/di'
import {SiDjango} from 'react-icons/si'
import {SiFlask} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {AiOutlineConsoleSql} from 'react-icons/ai'
import {SiDocker} from 'react-icons/si'
import {SiCsharp} from 'react-icons/si'
import {SiUnity} from 'react-icons/si'
import {SiDotnet} from 'react-icons/si'
import {FaAws} from 'react-icons/fa'

function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <ImHtmlFive className='experience__details-icon'/>
              <div>
                <h4>HTML 5</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <IoLogoCss3 className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiJavascript className='experience__details-icon'/>
                <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiBootstrap className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaReact className='experience__details-icon'/>
              <div>  
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiAngular className='experience__details-icon'/>
              <div>  
                <h4>Angular</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiTypescript className='experience__details-icon'/>
              <div>  
                <h4>TypeScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiUnity className='experience__details-icon'/>
              <div>  
                <h4>Unity</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* End of Frontend */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiPython className='experience__details-icon'/>
              <div>  
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiCsharp className='experience__details-icon'/>
              <div>  
                <h4>C#</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <DiDjango className='experience__details-icon'/>
              <div>  
                <h4>Django</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiDjango className='experience__details-icon'/>
              <div>  
                <h6>Django REST framework</h6>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiFlask className='experience__details-icon'/>
              <div>  
                <h4>Flask</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiMysql className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineConsoleSql className='experience__details-icon'/>
              <div>
                <h4>SQL Alchemy</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiDocker className='experience__details-icon'/>
              <div>  
                <h4>Docker</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiDotnet className='experience__details-icon'/>
              <div>  
                <h4>.NET</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaAws className='experience__details-icon'/>
              <div>  
                <h4>AWS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience