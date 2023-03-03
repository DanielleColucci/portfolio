import NavLinksList from "./NavLinksList"

const NavBar = ({ width }) => {
  return (
    <>
      <div id='nav-blur-bar'></div>
      <NavLinksList width={width}/>
    </>
  )
}

export default NavBar