import { Link } from "@remix-run/react";

// API
import { getData } from "../../../api";

// json
import { json } from '@remix-run/node'

// userLoader
import { useLoaderData } from '@remix-run/react';

export async function loader() {
    const data = await getData();
    if(!data || data.length === 0) {
        throw json({message: 'Could not find nay notes.'}, {
            status: 404,
            statusText: 'Not found.'
        }
    );
    }
    return data
}

export default function HostVansPage() {
    const vanData = useLoaderData();
    
    const hostVans= vanData.filter((item) => item.hostId === '123');

    return (
        <>
            {hostVans.map((van) => {
                return(
                    <div key={van.id} >
                        <Link to={van.id}>
                            <h1>{van.name}</h1>
                        </Link>
                    </div>
                )
            })}
        </>
    )
}