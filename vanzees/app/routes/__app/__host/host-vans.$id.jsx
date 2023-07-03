import { Outlet, useNavigation, useLoaderData, useNavigate } from '@remix-run/react'
import VanHeader from '../../../components/VanHeader'
// Sever
import { getUserVans } from '../../../data/van.server';
import { json } from "@remix-run/node";
// Component
import Details from '../../../components/Details'
import VanForm from '../../../components/VanForm';
// Styles
import detailsStyles from '../../../styles/detailsPage.css'
export function links() {
    return [{ rel: 'stylesheet', href: detailsStyles}]
}

export async function loader({ params }) {
    const vans = await getUserVans();
    const vanID = params.id;

    const selectedVan = vans.find(van => van.id === vanID);

    if(!selectedVan) {
        throw json({message: 'could not find note for id' + vanID})
    }
    return selectedVan
}

export default function VanDetails() {
    const van = useLoaderData();
    const navigate = useNavigate();

    const closeHandler = () => {
        navigate(`${van.id}`)
    }
    
    return(
        <section>
            <Details van={van} />
        </section>
    )
}