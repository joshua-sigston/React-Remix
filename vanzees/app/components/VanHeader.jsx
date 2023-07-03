import { NavLink } from "@remix-run/react"

export default function HostHeader() {
        const activeLink = {
                color: '#568EA3'
        }
    return(
        <header>
                <NavLink  to='/'
                        end
                        className="header_link"
                        style={({isActive}) => isActive ? activeLink : null}>
                Details
                </NavLink>

                <NavLink  to='reviews'
                        className="header_link"
                        style={({isActive}) => isActive ? activeLink : null}>
                Photos
                </NavLink>
            </header>
    )
}