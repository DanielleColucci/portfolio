import '../styles/Projects.css'
import { projects } from "../data/projects"
import ProjectsList from "../components/ProjectsList"
import Footer from '../components/Footer'

const Projects = () => {
  return (
    <>
      <ProjectsList projects={projects}/>
      <Footer />
    </>
  )
}

export default Projects