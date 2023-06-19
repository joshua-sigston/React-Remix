import { Outlet } from '@remix-run/react'

// Components
import HostHeader from '../../components/HostHeader'

export default function HostLayout() {
    
    return(
        <>
            <HostHeader />
            <Outlet />
        </>
    )
}