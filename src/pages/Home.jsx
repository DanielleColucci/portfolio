import '../styles/Home.css'
import Headshot from '../assets/headshot.jpeg'
import Footer from '../components/Footer'

import { useEffect } from 'react'

const Home = ({ handlePageChange }) => {
  document.body.classList.add('prevent-scroll')
  
  useEffect(() => {
    window.scrollTo(0, 0)
    handlePageChange()
  }, [])

  return (
    <>
      <main className='home-main'>
        <div id="content-container">
          <div className="header">
            <p><span className='bg'>Hello there, </span>my name is</p>
            <h1><span>Danielle Colucci</span></h1>
            <p>A Boston-based <span className='bg'>software engineer</span> with a passion for problem solving and an eye for detail</p>
          </div>
          <img id='headshot' src={Headshot} alt="profile" />
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default Home