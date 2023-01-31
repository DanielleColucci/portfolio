import '../styles/ProjectsList.css'
import ProjectPreview from "./ProjectPreview"

const ProjectsList = (props) => {
  return (
    <main id='projects-list-main'>
      <h1 id='projects-title'><span>Projects</span></h1>
      <ul id="projects-list">
        {props.projects.map((project, idx) => (
          <ProjectPreview key={idx} project={project} />
        ))}
      </ul>
    </main>
  )
}

export default ProjectsList