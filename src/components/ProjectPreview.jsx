const ProjectPreview = (props) => {
  const { project } = props

  return (
    <>
      <li className="preview-card">
        <img src={project.image} alt={project.title} />
        <div className="card-overlay">
          <div className='project-title'>{project.title}</div>
          <div className='project-links'>
            {project.repositoryLink && <a title="view GitHub repo" href={project.repositoryLink} target="_blank" rel="noreferrer">GitHub</a>}
            {project.deploymentLink && <a title="view deployed site" href={project.deploymentLink} target="_blank" rel="noreferrer">Launch Site</a>}
          </div>
          <div className='project-description'>{project.description}</div>
          <div className='skills-list'>
            {project.skills.map((skill, idx) => (
              <img className='project-badge' key={idx} src={skill} alt="badge" />
            ))}
          </div>
        </div>
      </li>
    </>
  )
}

export default ProjectPreview