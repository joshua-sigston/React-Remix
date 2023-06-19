import { useLoaderData, Link } from "@remix-run/react";

// API
import { getData } from "../../api";

// json
import { json } from '@remix-run/node'

export default function VanDetailsPage() {
    const van = useLoaderData();
    
    return(
        <section>
            <Link to='/vans'>Back to Vans</Link>
            <h2>{van.name}</h2>
        </section>
    )
}

export async function loader({ params }) {
    const vans = await getData();
    const vanID = params.vansID;
    const selectedVan = vans.find(van => van.id === vanID);

    if(!selectedVan) {
        throw json({message: 'could not find note for id' + vanID})
    }
    return selectedVan
}