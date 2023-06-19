import { Outlet } from '@remix-run/react'
import MainHeader, { links as headerLink} from "../components/MainHeader"
import Footer, { links as footerLink } from '../components/Footer'

// Styles
export function links() {
  return [...headerLink(), ...footerLink()]
}

export default function AppLayout() {
    return (
        <>
            <MainHeader />
            <Outlet />
            <Footer />
        </>
    )
}