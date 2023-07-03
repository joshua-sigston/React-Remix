import { useLoaderData, Link } from "@remix-run/react";
import { json } from "@remix-run/node";
// Server
import { getVans } from "../../data/van.server";
// Component
import Details from "../../components/Details";
// Styles
import detailsStyles from '../../styles/detailsPage.css'
export function links() {
    return [{ rel: 'stylesheet', href: detailsStyles}]
}

export async function loader({ params }) {
    const vans = await getVans();
    const vanID = params.vansID;
    const selectedVan = vans.find(van => van.id === vanID);

    if(!selectedVan) {
        throw json({message: 'could not find note for id' + vanID})
    }
    return selectedVan
}

export default function VanDetailsPage() {
    const van = useLoaderData();
    
    return(
        <section className="details_container grid">
            <Link to='/vans' className="back_link">Back to Vans</Link>
            <Details van={van} />
            <button>Rent this Van</button>
        </section>
    )
}