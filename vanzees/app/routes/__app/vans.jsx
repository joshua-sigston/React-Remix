import { Link, useSearchParams } from '@remix-run/react';

// API
import { getData } from '../../api'

// json
import { json } from '@remix-run/node'

// Styles
import vanStyles from '../../styles/vansPage.css'

export function links() {
    return [{ rel: 'stylesheet', href: vanStyles}]
}

// userLoader
import { useLoaderData } from '@remix-run/react';

// Component
import VanCard from '../../components/VanCard';

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

export default function VansPage() {
    const [ search, setSearch ] = useSearchParams();
    const vanList = useLoaderData();
    
    const typeFilter = search.get('type')
    const filteredVans = typeFilter ? vanList.filter(van => van.type === typeFilter) : vanList;
    
    const activeLink = {
        color: '#C0ADBA'
      }
    
    return (
        <>
            <nav className="type_nav-container">
                <Link to='.' 
                    style={typeFilter === null ? activeLink : null}
                    className="type_link">
                all Vans
                </Link>

                <Link to='?type=simple' 
                    style={typeFilter === 'simple' ? activeLink : null}
                    className="type_link">
                simple
                </Link>

                <Link to='?type=rugged' 
                    style={typeFilter === 'rugged' ? activeLink : null}
                    className="type_link">
                rugged
                </Link>

                <Link to='?type=luxury' 
                    style={typeFilter === 'luxury' ? activeLink : null}
                    className="type_link">
                luxury
                </Link>
            </nav>
            <section className='list_container'>
                {filteredVans.map((van, index) => {
                    return(
                    <Link key={van.id} to={van.id}>
                        <p>{van.id}</p>
                        <VanCard van={van}/>
                    </Link>
                    )
                })}
            </section>
        </>
    )
}
