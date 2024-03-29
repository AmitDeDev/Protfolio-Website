import React from 'react'
import './services.css'
import {BsCheckLg} from 'react-icons/bs'

function Services() {
  return (
    <section id='services'>
      <h5>Additional work experience</h5>
      <h2>Work Experience</h2>

      <div className="container services__container">
      <article className='service'>
          <div className="service__head">
            <h3>Unity - Game Developer </h3>
          </div>

         
          <ul className="service__list">
            <li>
              <div className='service__list-icon'><BsCheckLg /></div>
              <p>Building machines in the game - Best Casino Legends, using the UNITY game engine </p>
            </li>
            <li>
              <div className='service__list-icon'><BsCheckLg /></div>
              <p>Writing clean and tidy code in the C# programming language while taking performance into account. </p>
            </li>
            <li>
              <div className='service__list-icon'><BsCheckLg /></div>
              <p>Working with external servers on the client side, working according to code architecture and design patterns. </p>
            </li>
            <li>
              <div className='service__list-icon'><BsCheckLg /></div>
              <p>Management of assets, prefabs, addressables. </p>
            </li>
            <li>
              <div className='service__list-icon'><BsCheckLg /></div>
              <p>Copying SDF files between development environments using AWS Bit Bucket 3. </p>
            </li>
          </ul>
        </article>
        {/* End of content creation */}
        {/* End of WEB Development */}
        <article className='service'>
          <div className="service__head">
            <h3>Software QA Engineer </h3>
          </div>

         
          <ul className="service__list">
            <li>
              <div className='service__list-icon'><BsCheckLg /></div>
              <p>Planning and writing STP, STD and STR documents. </p>
            </li>
            <li>
              <div className='service__list-icon'><BsCheckLg /></div>
              <p>Writing and executing complex SQL queries. </p>
            </li>
            <li>
              <div className='service__list-icon'><BsCheckLg /></div>
              <p>Working with – Unity, Couchbase, Kibana, Android studio, Postman, GitHub Desktop and SourceTree, Chrome DevTools for testing Web applications. </p>
            </li>
            <li>
              <div className='service__list-icon'><BsCheckLg /></div>
              <p>Tests of the application on multiple platforms (Web/Mobile/WinApp). </p>
            </li>
          </ul>
        </article>
        {/* End of content creation */}
        <article className='service'>
          <div className="service__head">
            <h3>CRM Operator</h3>
          </div>

         
          <ul className="service__list">
            <li>
              <div className='service__list-icon'><BsCheckLg /></div>
              <p>Execution - Competitive Intelligence, analysis and research. </p>
            </li>
            <li>
              <div className='service__list-icon'><BsCheckLg /></div>
              <p>Planning, writing and execution many marketing strategies. </p>
            </li>
            <li>
              <div className='service__list-icon'><BsCheckLg /></div>
              <p>Operating complex configurations and execute complex back-office operations. </p>
            </li>
            <li>
              <div className='service__list-icon'><BsCheckLg /></div>
              <p>Improving RTP (retention) by establishing personal contact with customers and publishing marketing communications through social networks. </p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Computer Technician & Helpdesk</h3>
          </div>

         
          <ul className="service__list">
            <li>
            <div className='service__list-icon'><BsCheckLg /></div>
              <p>Resolving hardware, network, and systems faults in computers and peripherals such as scanners and printers. </p>
            </li>
            <li>
              <div className='service__list-icon'><BsCheckLg /></div>
              <p>Network troubleshooting with SecureCRT and PORTNOX, Experience working with Active Directory. </p>
            </li>
            <li>
              <div className='service__list-icon'><BsCheckLg /></div>
              <p>Providing support and troubleshooting for all hospital users in Windows 7, 10 by remote takeover with Dameware. </p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX article */}
      </div>
    </section>
  )
}

export default Services