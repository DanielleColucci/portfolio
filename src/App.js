import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

// Components
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import NavBar from './components/Nav/NavBar'
import SmallScreenNav from './components/Nav/SmallScreenNav'
import ProjectDetails from './pages/ProjectDetails'

function App() {
  const [width, setWidth] = useState(window.innerWidth)
  const [isOpen, setIsOpen] = useState(false)
  const breakpoint = 768
  
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
  
  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handlePageChange = () => {
    setIsOpen(false)
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
      {/* <Routes>
        <Route path="/" element={<Home handlePageChange={handlePageChange} />} />
        <Route path="/about" element={<About handlePageChange={handlePageChange} />} />
        <Route path="/contact" element={<Contact handlePageChange={handlePageChange} />} />
        <Route path="/projects" element={<Projects handlePageChange={handlePageChange} />} />
        <Route path="/projects/:projectDetails" element={<ProjectDetails handlePageChange={handlePageChange} />} />
        <Route path="/resume" element={<Resume handlePageChange={handlePageChange} />} />
      </Routes> */}
      <Home />
    </>
  );
}

export default App;
