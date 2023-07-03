import { json } from '@remix-run/node';
// import { getData } from '../../../api'

import { useLoaderData, NavLink, Outlet, Link } from '@remix-run/react';

// export async function loader({ params }) {
//     const vans = await getData();
//     const vanID = params.vanID;
//     const selectedVan = vans.find(van => van.id === vanID);

//     if(!selectedVan) {
//         throw json({message: 'could not find note for id' + vanID})
//     }
//     return selectedVan
// }

export default function HostVanDetails() {
    // const vans = useLoaderData();

    const activeLink = {
        color: 'brown',
        fontWeight: 'bold'
      }
    
    return (
        <section>
            <Link to='my-vans'>Back to your vans</Link>
            {/* <h1>{van.name}</h1> */}
            <h1>details</h1>
            {/* <Outlet /> */}
            <nav>
                {/* <NavLink  to={`/my-vans/${van.id}`}
                        end
                        style={({isActive}) => isActive ? activeLink : null}>
                Details
                </NavLink> */}

                {/* <NavLink  to={`/my-vans/${van.id}/photos`}
                        style={({isActive}) => isActive ? activeLink : null}>
                Photos
                </NavLink> */}
            </nav>
            {/* <Outlet context={{van}}/> */}
        </section>
    )
}
