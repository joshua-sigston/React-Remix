import { Link } from "@remix-run/react";

// API
import { getData } from "../../../api";

// json
import { json } from '@remix-run/node'

// userLoader
import { useLoaderData } from '@remix-run/react';
import { getUserSession } from "../../../data/auth.server";
import { getUserVans } from "../../../data/van.server";

// export async function loader({ request }) {
//     const userID = await getUserSession(request);

//     const vans = await getUserVans(userID);
//     return vans;
// }

export default function HostVansPage() {
    const hostVans = useLoaderData();

    return (
        <>
        <h1>my vans</h1>
            {/* {hostVans.map((van) => {
                return(
                    <div key={van.id} >
                        <Link to={van.id}>
                            <h1>{van.title}</h1>
                        </Link>
                    </div>
                )
            })} */}
        </>
    )
}