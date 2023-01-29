import ProjectPreview from "./ProjectPreview"

const ProjectsList = (props) => {
  return (
    <>
      <h1>Title</h1>
      <ul>
        {props.projects.map((project, idx) => (
          <ProjectPreview key={idx} project={project} />
        ))}
      </ul>
    </>
  )
}

export default ProjectsList