import { HashLink } from 'react-router-hash-link'

const NavLinksList = ({ width }) => {
  const fullNav = width > 600 ? true : false
  return (
    <nav className={fullNav ? 'full-nav' : 'dropdown-nav'}>
      <HashLink to='/#home'>HOME</HashLink>
      <HashLink to='/#projects'>PROJECTS</HashLink>
      <HashLink to='/#contact'>CONTACT</HashLink>
      <HashLink to='/#resume'>RESUME</HashLink>
      <HashLink to='/#about'>ABOUT</HashLink>
    </nav>
  )
}

export default NavLinksList