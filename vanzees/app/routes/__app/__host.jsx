import { Outlet, useLoaderData } from '@remix-run/react'
// Components
import HostHeader from '../../components/HostHeader'
import { verifyUserLogin } from '../../data/auth.server'
import { getUserVans } from '../../data/van.server';
// Styles
import hostStyles from '../../styles/hostPage.css'
export function links() {
    return [{ rel: 'stylesheet', href: hostStyles}]
}


export async function loader({ request }) {
    const userID = await verifyUserLogin(request);

    const vans = await getUserVans(userID);
    return vans;
}

export default function HostLayout() {
    const hostVans = useLoaderData();
    const reviewScore = Math.floor((Math.random() * 5));
    const totalIncome = Math.floor((Math.random() * 30) * 100);
    return(
        <>
            <HostHeader />
            <Outlet context={{hostVans, reviewScore, totalIncome}}/>
        </>
    )
}