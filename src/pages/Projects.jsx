import '../styles/Projects.css'
import { projects } from "../data/projects"
import ProjectsList from "../components/ProjectsList"
import Footer from '../components/Footer'
import { useEffect } from 'react'

const Projects = () => {
  document.body.classList.remove('prevent-scroll')
  
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  //   // handlePageChange()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
  
  return (
    <section id='projects'>
      <ProjectsList projects={projects}/>
      <Footer />
    </section>
  )
}

export default Projects