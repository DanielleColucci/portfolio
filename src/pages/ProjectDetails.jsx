import '../styles/ProjectDetails.css'
import { findProject } from "../utilities/functions"
import { useParams } from "react-router-dom"
import Footer from '../components/Footer'

const ProjectDetails = () => {
  const { projectDetails } = useParams()
  const currentProject = findProject(projectDetails)

  return (
    <>
      <main id="details-main">
        <h1><span>{currentProject.title}</span></h1>
        <p><i>{currentProject.description}</i></p>
        <img src={currentProject.image} alt={currentProject.title} />
        <div id="links-container">
          <a title="view GitHub repo" href={currentProject.repositoryLink} target="_blank" rel="noreferrer">GitHub</a>
          <a title="view deployed site" href={currentProject.deploymentLink} target="_blank" rel="noreferrer">Launch Site</a>
        </div>
      </main>
      <Footer />
    </>
  )
} 

export default ProjectDetails