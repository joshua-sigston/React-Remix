import { useState } from "react"
import { NavLink } from "@remix-run/react"

// Components
import Hamburger from "./Hamburger"

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaravan } from "@fortawesome/free-solid-svg-icons"

// Styles
import headerStyles from '../../styles/header.css';

export function links() {
  return [{rel: 'stylesheet', href: headerStyles}]
}

export default function MainHeader() {

    return (
        <header>
            <div className="logo_container">
                <NavLink    to='/'
                            className='header_link'>
                    <FontAwesomeIcon icon={faCaravan} className="home_link"/>
                </NavLink>
            </div>

            <Hamburger />

            <nav className="movile_nav">
                <NavLink    to='/' 
                            className='header_link'>
                    Home
                </NavLink>
                <NavLink  to='/about'
                  className='header_link'>
                    About
                </NavLink>

                <NavLink  to='/vans' 
                        className='header_link'>
                    Vans
                </NavLink>
                
                <NavLink  to='/host' 
                        className='header_link'>
                    Host
                </NavLink>
                <NavLink  to='/login' 
                        className='header_link'>
                    Login
                </NavLink>
            </nav>
        </header>
    )
}