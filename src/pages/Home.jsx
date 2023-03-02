import '../styles/Home.css'
import Headshot from '../assets/headshot.jpeg'
import Footer from '../components/Footer'

// pages 
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'
import About from './About'

import { useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'

const Home = () => {

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  //   // handlePageChange()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  return (
    <>
      <main id='home'>
        <div id="content-container">
          <div className="header">
            <p><span className='bg'>Hello there, </span>my name is</p>
            <h1><span>Danielle Colucci</span></h1>
            <p>A Boston-based <span className='bg'>software engineer</span> with a passion for problem solving and an eye for detail</p>
            <div>
              <HashLink to='/#projects'>View My Projects</HashLink>
              <HashLink to='/#contact'>Contact Me</HashLink>
            </div>
          </div>
        <img id='headshot' src={Headshot} alt="profile" />
        </div>
        <div className='skills-container'>
          <img className='badge' src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt='javascript badge'/>
          <img className='badge' src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt='typescript badge'/>
          <img className='badge' src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt='react badge'/>
          <img className='badge' src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt='python badge'/>
          <img className='badge' src="https://img.shields.io/badge/node.js-339933?logo=node.js&logoColor=white&style=for-the-badge" alt='node.js badge'/>
          <img className='badge' src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt='express.js badge'/>
          <img className='badge' src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt='mongoDB badge'/>
          <img className='badge' src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt='postgres badge'/>
          <img className='badge' src="https://img.shields.io/badge/html5-E34F26?logo=html5&logoColor=white&style=for-the-badge" alt='html badge'/>
          <img className='badge' src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt='css badge'/>
          <img className='badge' src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" alt='sequelize badge'/>
          <img className='badge' src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt='git badge'/>
          <img className='badge' src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt='github badge'/>
        </div>
      </main>
      <Projects />
      <Contact />
      <Resume />
      <About />
      <Footer/>
    </>
  )
}

export default Home