import { projects } from "../data/projects"
import ProjectsList from "../components/ProjectsList"

const Projects = () => {
  return (
    <>
      <h1>Projects</h1>
      <ProjectsList projects={projects}/>
    </>
  )
}

export default Projects