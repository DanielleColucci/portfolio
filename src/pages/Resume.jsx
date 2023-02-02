import File from "../assets/file.png"
import "../styles/Resume.css"
import Footer from "../components/Footer"
import { useEffect } from "react"

const Resume = () => {
  document.body.classList.add('prevent-scroll')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <main id="resume-main">
        <h1 id="resume-header"><span>Resume</span></h1>
        <a title="download resume" href="./Danielle-Colucci_Resume.pdf" download="Danielle-Colucci_Resume.pdf">
          <img id="resume-icon" src={File} alt="resume icon" />
        </a>
        <p>Click the icon to download my <span className="bg">resume</span>!</p>
      </main>
      <Footer />
    </>
  )
}

export default Resume