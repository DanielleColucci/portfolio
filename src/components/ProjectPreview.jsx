import { hyphenateWords } from "../utilities/functions"
import { Link } from "react-router-dom"

const ProjectPreview = (props) => {
  const { project } = props

  return (
    <>
      <li className="preview-card">
        <img src={project.image} alt={project.title} />
        <div className="card-overlay">
          <Link title="click to learn more" to={`/projects/${hyphenateWords(project.title)}`}>
            <p>{project.title}</p>
          </Link>
        </div>
      </li>
    </>
  )
}

export default ProjectPreview