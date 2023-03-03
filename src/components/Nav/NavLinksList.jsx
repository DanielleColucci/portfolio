import { HashLink } from 'react-router-hash-link'

const NavLinksList = (props) => {
  const fullNav = props.width > 600 ? true : false
  return (
    <nav className={fullNav ? 'full-nav' : 'dropdown-nav'}>
      <HashLink 
        smooth to='/#home'
        onClick={props.handleNavigate ? props.handleNavigate : null}
      >
        HOME
      </HashLink>
      <HashLink 
        smooth to='/#projects'
        onClick={props.handleNavigate ? props.handleNavigate : null}
      >
        PROJECTS
      </HashLink>
      <HashLink 
        smooth to='/#contact'
        onClick={props.handleNavigate ? props.handleNavigate : null}
      >
        CONTACT
      </HashLink>
      <HashLink 
        smooth to='/#resume'
        onClick={props.handleNavigate ? props.handleNavigate : null}
      >
        RESUME
      </HashLink>
      <HashLink 
        smooth to='/#about'
        onClick={props.handleNavigate ? props.handleNavigate : null}
      >
        ABOUT
      </HashLink>
    </nav>
  )
}

export default NavLinksList