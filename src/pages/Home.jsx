import '../styles/Home.css'
import Headshot from '../assets/headshot.jpeg'
import Footer from '../components/Footer'

import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = ({ handlePageChange }) => {

  useEffect(() => {
    window.scrollTo(0, 0)
    handlePageChange()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <main className='home-main'>
        <div id="content-container">
          <div className="header">
            <p><span className='bg'>Hello there, </span>my name is</p>
            <h1><span>Danielle Colucci</span></h1>
            <p>A Boston-based <span className='bg'>software engineer</span> with a passion for problem solving and an eye for detail</p>
            <div>
              <Link to='/projects'>View My Projects</Link>
              <Link to='/contact'>Contact Me</Link>
            </div>
          </div>
        <img id='headshot' src={Headshot} alt="profile" />
        </div>
        <div className='skills-container'>
          <img class='badge' src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt='javascript badge'/>
          <img class='badge' src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt='typescript badge'/>
          <img class='badge' src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt='react badge'/>
          <img class='badge' src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt='python badge'/>
          <img class='badge' src="https://img.shields.io/badge/node.js-339933?logo=node.js&logoColor=white&style=for-the-badge" alt='node.js badge'/>
          <img class='badge' src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt='express.js badge'/>
          <img class='badge' src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt='mongoDB badge'/>
          <img class='badge' src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt='postgres badge'/>
          <img class='badge' src="https://img.shields.io/badge/html5-E34F26?logo=html5&logoColor=white&style=for-the-badge" alt='html badge'/>
          <img class='badge' src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt='css badge'/>
          <img class='badge' src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" alt='sequelize badge'/>
          <img class='badge' src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt='git badge'/>
          <img class='badge' src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt='github badge'/>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default Home