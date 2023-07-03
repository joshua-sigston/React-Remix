import { NavLink } from "@remix-run/react"

export default function HostHeader() {
        const activeLink = {
                color: '#568EA3'
        }
    return(
        <header>
                <NavLink  to='/host'
                        end
                        className="header_link"
                        style={({isActive}) => isActive ? activeLink : null}>
                Host
                </NavLink>

                <NavLink  to='reviews'
                        className="header_link"
                        style={({isActive}) => isActive ? activeLink : null}>
                Reviews
                </NavLink>

                <NavLink  to='/income'
                        className="header_link"
                        style={({isActive}) => isActive ? activeLink : null}>
                Income
                </NavLink>

                <NavLink  to='host-vans'
                        className="header_link"
                        style={({isActive}) => isActive ? activeLink : null}>
                My Vans
                </NavLink>

                <NavLink  to='submit'
                        className="header_link"
                        style={({isActive}) => isActive ? activeLink : null}>
                Submit
                </NavLink>
            </header>
    )
}