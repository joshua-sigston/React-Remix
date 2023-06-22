import { Outlet } from '@remix-run/react'

import MainHeader from '../components/navigation/MainHeader'

import marketStyles from '../styles/marketing.css'
import { getUserFromSession } from '../data/auth.server'

export function links() {
    return [{ rel: 'stylesheet', href: marketStyles}]
    
}

export function loader({request}) {
    return getUserFromSession(request)
}

export default function MarketingAppLayout() {
    return (
        <>
        <MainHeader />
        <Outlet />
        </>
    )
}