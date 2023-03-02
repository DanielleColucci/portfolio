import '../styles/Projects.css'
import { projects } from "../data/projects"
import ProjectsList from "../components/ProjectsList"
import Footer from '../components/Footer'

const Projects = () => {
  return (
    <section id='projects'>
      <ProjectsList projects={projects}/>
      <Footer />
    </section>
  )
}

export default Projects