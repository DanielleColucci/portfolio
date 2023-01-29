import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
      <NavLink to='/'>HOME</NavLink>
      <NavLink to='/about'>ABOUT</NavLink>
      <NavLink to='/contact'>CONTACT</NavLink>
      <NavLink to='/projects'>PROJECTS</NavLink>
      <NavLink to='/resume'>RESUME</NavLink>
    </nav>
  )
}

export default NavBar