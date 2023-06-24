import { Outlet } from '@remix-run/react'

// Components
import HostHeader from '../../components/HostHeader'
import { getUserSession, verifyUserLogin } from '../../data/auth.server'
import { getUserVans } from '../../data/van.server';

// export async function loader({ request }) {
//     const userID = await getUserSession(request);
    
//     const vans = await getUserVans();
//     return vans
// }

export default function HostLayout() {
    
    return(
        <>
            <HostHeader />
            <Outlet />
        </>
    )
}