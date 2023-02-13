import React from 'react'
import './protfolio.css'
import socialmedia1 from '../../assets/socialmedia1.JPG'
import socialmedia2 from '../../assets/socialmedia2.JPG'
import popthecandy from '../../assets/popthecandy.JPG'
import resturant2 from '../../assets/resturant2.JPG'
import portalmemory from '../../assets/portalmemory.JPG'
import gamersplatform from '../../assets/gamersplatform.JPG'
import code from '../../assets/code.jpg'


// Need to build a host server to host this data and store it

const data =[
  {
    id: 1,
    image: socialmedia2,
    title: `My first Django project it's little bit messy but I am still proud of it - Social Media built with python & Django, HTML5 and CSS, I deployed this project to heroku app but I'm currently seeking for alternative hosting app so I will deploy it soon for now you can watch a video I made`,
    github: 'https://github.com/AmitDeDev/First-Django-Project---Social-Media-',
    demo: 'https://github.com/AmitDeDev'
  },
  {
    id: 2,
    image: resturant2,
    title: `Resturant website built with python - Django on server side & JavaScript - React on client side, I deployed the server side to heroku app but I'm currently seeking for alternative hosting app so I will deploy it soon for now you can watch a video I made`,
    github: 'https://github.com/AmitDeDev/ResturantSystemFullStackProject',
    demo: 'https://github.com/AmitDeDev'
  },
  {
    id: 3,
    image: popthecandy,
    title: 'Pop the candies - little game I built using JavaScript, React and CSS',
    github: 'https://github.com/AmitDeDev/PopTheCandiesWebGame',
    demo: 'https://popthecandy-v1.netlify.app/'
  },
  {
    id: 4,
    image: portalmemory,
    title: 'Portal Memory - little memory game I built using JavaScript, React and CSS',
    github: 'https://github.com/AmitDeDev/Portal-Memory-game',
    demo: 'https://portalmemory.netlify.app/'
  },
  {
    id: 5,
    image: gamersplatform,
    title: `GamersZone - My upcoming new project, gamers website that will give lots of information about games, I'm using python & Django for the server side with MySQL and JavaScript & React on client side. comming soon!`,
    github: 'https://github.com/AmitDeDev',
    demo: 'https://github.com/AmitDeDev'
  },
  {
    id: 6,
    image: code,
    title: `Every 2-3 weeks I will upload new project I built, The upcoming projects will be: games I built using Unity & C# , API's using C# & .NET and much more! so stay tuned ;)`,
    github: 'https://github.com/AmitDeDev'
  }
]

function Protfolio() {
  return (
    <section id='protfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container protfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='protfolio__item'>
                <div className="protfolio__item-image">
                  <img src={image} alt={title} />
                </div>
              <h6>{title}</h6>
                <div className="protfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Protfolio