const ProjectPreview = (props) => {
  const { project } = props

  return (
    <>
      <li>
        <div className="project-preview-card">
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <button>Learn More</button>
        </div>
      </li>
    </>
  )
}

export default ProjectPreview