import File from "../assets/file.png"
import "../styles/Resume.css"

const Resume = () => {
  return (
    <main id="resume-main">
      <h1 id="resume-header"><span>Resume</span></h1>
      <a href="./Danielle-Colucci_Resume.pdf" download="Danielle-Colucci_Resume.pdf">
        <img id="resume-icon" src={File} alt="resume icon" />
      </a>
      <p>Click the icon to download my <span className="bg">resume</span>!</p>
    </main>
  )
}

export default Resume