import { Outlet } from '@remix-run/react'
import MainHeader, { links as headerLink} from "../components/MainHeader"
import Footer, { links as footerLink } from '../components/Footer'
import { getUserSession } from '../data/auth.server'

// Styles
export function links() {
  return [...headerLink(), ...footerLink()]
}

// Loader
export async function loader({ request }) {
    // check for valid session cookie
    return getUserSession(request);
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