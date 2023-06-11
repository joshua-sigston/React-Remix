import { Outlet } from '@remix-run/react'

import MainHeader from '../components/navigation/MainHeader'

import marketStyles from '../styles/marketing.css'

export function links() {
    return [{ rel: 'stylesheet', href: marketStyles}]
    
}

export default function MarketingAppLayout() {
    return (
        <>
        <MainHeader />
        <Outlet />
        </>
    )
}