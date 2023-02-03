import NavLinksList from "./NavLinksList"

const SmallScreenNav = ({ width, isOpen, handleOpen }) => {
  return (
    <>
      <button onClick={handleOpen} className={isOpen ? 'open menu-button' : 'menu-button'}>
        {isOpen ? 'X' : '≡'}
      </button>
      {isOpen && <NavLinksList width={width}/>}
    </>
  )
}

export default SmallScreenNav