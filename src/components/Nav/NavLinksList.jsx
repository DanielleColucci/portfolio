import { NavLink } from "react-router-dom"

const NavLinksList = ({ width }) => {
  const fullNav = width > 768 ? true : false
  return (
    <nav className={fullNav ? 'full-nav' : 'dropdown-nav'}>
      <NavLink to='/'>HOME</NavLink>
      <NavLink to='/projects'>PROJECTS</NavLink>
      <NavLink to='/about'>ABOUT</NavLink>
      <NavLink to='/resume'>RESUME</NavLink>
      <NavLink to='/contact'>CONTACT</NavLink>
    </nav>
  )
}

export default NavLinksList