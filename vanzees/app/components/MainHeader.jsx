import { useState } from "react"
import { NavLink } from "@remix-run/react"

// Components
import Hamburger from "./Hamburger"

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaravan } from "@fortawesome/free-solid-svg-icons"

//Styles
import headerStyles from '../styles/header.css'

export function links() {
    return [{ rel: 'stylesheet', href:headerStyles }]
}

const MainHeader = () => {
    const [ mobileNav, setMobileNav ] = useState(false);

    const activeLink = {
        color: '#568EA3'
      }

    const handleMobileNav = () => {
        setMobileNav(!mobileNav)
    }

    const reveal = {left: !mobileNav ? '100%' : '0%'};

    return (
        <header>
            <div className="logo_container">
                <NavLink    to='/'
                            className='header_link'>
                    <FontAwesomeIcon icon={faCaravan} className="home_link"/>
                </NavLink>
            </div>

            <Hamburger handleMobileNav={handleMobileNav} mobileNav={mobileNav}/>

            <nav className="mobile_nav" style={reveal}>
                <NavLink    to='/' 
                            className='header_link'
                            style={({isActive}) => isActive ? activeLink : null}
                            onClick={handleMobileNav}>
                Home
                </NavLink>
                <NavLink    to='/about'
                            className='header_link'
                            style={({isActive}) => isActive ? activeLink : null}
                            onClick={handleMobileNav}>
                About
                </NavLink>

                <NavLink  to='/vans' 
                            className='header_link'
                            style={({isActive}) => isActive ? activeLink : null}
                            onClick={handleMobileNav}>
                Vans
                </NavLink>
                
                <NavLink  to='/host' 
                        className='header_link'
                        style={({isActive}) => isActive ? activeLink : null}
                        onClick={handleMobileNav}>
                Host
                </NavLink>
                <NavLink  to='/login' 
                        className='header_link'
                        style={({isActive}) => isActive ? activeLink : null}
                        onClick={handleMobileNav}>
                Login
                </NavLink>
            </nav>
        </header>
    )
}

export default MainHeader