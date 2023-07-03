import { Link, useOutletContext } from "@remix-run/react";

import VanCard from "../../../components/VanCard";
export default function HostVansPage() {
    const { hostVans }= useOutletContext();
    
    return (
        <section className="host_vans-container grid">
        <h3>MyVans</h3>
            {hostVans.map((van) => {
                return(
                    <div key={van.id} >
                        <Link to={van.id}>
                            <VanCard van={van}/>
                        </Link>
                    </div>
                )
            })}
        </section>
    )
}