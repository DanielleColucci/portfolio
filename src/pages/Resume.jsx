import File from "../assets/file.png"
import "../styles/Resume.css"

const Resume = () => {
  return (
    <>
      <main id="resume">
        <h1 id="resume-header"><span>Resume</span></h1>
        <h3>Click the icon to download my <span className="bg">resume</span>!</h3>
        <a title="download resume" href="./Danielle-Colucci_Resume.pdf" download="Danielle-Colucci_Resume.pdf">
          <img id="resume-icon" src={File} alt="resume icon" />
        </a>
      </main>
    </>
  )
}

export default Resume