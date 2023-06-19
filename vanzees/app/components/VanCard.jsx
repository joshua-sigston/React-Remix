import { Link } from '@remix-run/react'

export default function VanCard({van}) {
    return (
        <div className="card_container" key={van.id}>
            <img src={van.imageUrl} alt="a van" />
            <h3>{van.name}</h3>
            <p>{van.type}</p>
            <p>${van.price}</p>
        </div>  
    )
}