import '../styles/Projects.css'
import { projects } from "../data/projects"
import ProjectsList from "../components/ProjectsList"

const Projects = () => {
  return (
    <section id='projects'>
      <ProjectsList projects={projects}/>
    </section>
  )
}

export default Projects