const Hamburger = ({handleMobileNav}) => {

    const handleHamburger = () => {
      handleMobileNav()
    }
  
    return (
      <div className='hamburger_container' onClick={handleHamburger}>
        <div className='patty'></div>
        <div className='patty'></div>
        <div className='patty'></div>
      </div>
    )
  }
  
  export default Hamburger