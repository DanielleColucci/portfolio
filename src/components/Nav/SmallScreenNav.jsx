import NavLinksList from "./NavLinksList"

const SmallScreenNav = ({ width, isOpen, handleOpen, handleNavigate }) => {
  return (
    <>
      <button onClick={handleOpen} className={isOpen ? 'open menu-button' : 'menu-button'}>
        {isOpen ? 'X' : '≡'}
      </button>
      {isOpen && <NavLinksList width={width} handleNavigate={handleNavigate}/>}
    </>
  )
}

export default SmallScreenNav