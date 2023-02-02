import GitHubLogo from '../assets/github.png'
import LinkedInLogo from '../assets/linkedin.png'
import EmailIcon from '../assets/email.png'

const Footer = () => {
  return (
    <div className='footer'>
      <a title="email Danielle" href="mailto:ddcolucci99@gmail.com">
        <img src={EmailIcon} alt="email icon" />
      </a>
      <a title="LinkedIn" href="https://www.linkedin.com/in/daniellecolucci99/" target="_blank" rel="noreferrer">
            <img className='logo' src={LinkedInLogo} alt="LinkedIn logo" />
          </a>
          <a title="GitHub" href="https://github.com/DanielleColucci" target="_blank" rel="noreferrer">
            <img className='logo' src={GitHubLogo} alt="GitHub logo" />
          </a>
    </div>
  )
}

export default Footer