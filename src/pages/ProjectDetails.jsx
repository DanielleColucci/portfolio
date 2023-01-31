import { findProject } from "../utilities/functions"
import { useParams } from "react-router-dom"

const ProjectDetails = () => {
  const { projectDetails } = useParams()
  const currentProject = findProject(projectDetails)

  return (
    <>
      <h1>{currentProject.title}</h1>
      <p>{currentProject.description}</p>
      <img src={currentProject.image} alt={currentProject.title} />
      <a href={currentProject.repositoryLink} target="_blank" rel="noreferrer">GitHub</a>
      <a href={currentProject.deploymentLink} target="_blank" rel="noreferrer">Launch</a>
    </>
  )
} 

export default ProjectDetails