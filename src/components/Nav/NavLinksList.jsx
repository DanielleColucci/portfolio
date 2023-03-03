import { HashLink } from 'react-router-hash-link'

const NavLinksList = ({ width }) => {
  const fullNav = width > 600 ? true : false
  return (
    <nav className={fullNav ? 'full-nav' : 'dropdown-nav'}>
      <HashLink smooth to='/#home'>HOME</HashLink>
      <HashLink smooth to='/#projects'>PROJECTS</HashLink>
      <HashLink smooth to='/#contact'>CONTACT</HashLink>
      <HashLink smooth to='/#resume'>RESUME</HashLink>
      <HashLink smooth to='/#about'>ABOUT</HashLink>
    </nav>
  )
}

export default NavLinksList