import { projects } from "../data/projects"

const Projects = () => {
  return (
    <>
      <h1>Projects</h1>
      <ul>
        {projects.map((project, idx) => (
          <li key={idx}>{project.title}</li>
        ))}
      </ul>
    </>
  )
}

export default Projects