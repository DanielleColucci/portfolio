import { hyphenateWords } from "../utilities/functions"
import { Link } from "react-router-dom"

const ProjectPreview = (props) => {
  const { project } = props

  return (
    <>
      <li>
        <div className="project-preview-card">
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <Link to={`/projects/${hyphenateWords(project.title)}`}>Learn More</Link>
        </div>
      </li>
    </>
  )
}

export default ProjectPreview