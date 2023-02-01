import '../styles/Contact.css'
import LinkedInLogo from '../assets/linkedin.png'
import GitHubLogo from '../assets/github.png'
import Email from '../assets/email.png'

const Contact = () => {
  return (
    <main className='contact-main'>
      <h1><span>Let's chat!</span></h1>
      <div id='email-content'>
        <h3>Reach out with comments/questions or if you would like to collaborate. <br /> The best way to reach me is via <a href="mailto:ddcolucci99@gmail.com"><span className='bg'>email</span></a></h3>
        <a href="mailto:ddcolucci99@gmail.com">
          <img src={Email} alt="email icon" />
        </a>
      </div>
      <div id='socials-container'>
        <h2><span>Or reach out on socials:</span></h2>
        <div>
          <a href="https://www.linkedin.com/in/daniellecolucci99/" target="_blank" rel="noreferrer">
            <img className='logo' src={LinkedInLogo} alt="LinkedIn logo" />
          </a>
          <a href="https://github.com/DanielleColucci" target="_blank" rel="noreferrer">
            <img className='logo' src={GitHubLogo} alt="GitHub logo" />
          </a>
        </div>
      </div>
    </main>
  )
}

export default Contact