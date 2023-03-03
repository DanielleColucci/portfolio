import './styles/App.css'
import React, { useState, useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'

// Components
import Home from './pages/Home'
import NavBar from './components/Nav/NavBar'
import SmallScreenNav from './components/Nav/SmallScreenNav'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import About from './pages/About'
import Footer from './components/Footer'

function App() {
  const [width, setWidth] = useState(window.innerWidth)
  const [isOpen, setIsOpen] = useState(false)
  const breakpoint = 600
  
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
  
  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {width < breakpoint 
        ? <SmallScreenNav 
          width={width}
          isOpen={isOpen} 
          handleOpen={handleOpen}
        /> 
        : <NavBar 
          width={width} 
        />
      }
      <Home />
      <Projects />
      <div className='contact-resume-container'>
        <Contact />
        <Resume />
      </div>
      <About />
      <div id='to-top-button'>
        <HashLink to='/#home'>BACK TO TOP</HashLink>
      </div>
      <Footer />
    </>
  );
}

export default App;
