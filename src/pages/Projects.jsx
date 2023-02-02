import '../styles/Projects.css'
import { projects } from "../data/projects"
import ProjectsList from "../components/ProjectsList"
import Footer from '../components/Footer'
import { useEffect } from 'react'

const Projects = () => {
  document.body.classList.remove('prevent-scroll')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <ProjectsList projects={projects}/>
      <Footer />
    </>
  )
}

export default Projects