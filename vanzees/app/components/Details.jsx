export default function Details({ van }) {
    return(
        <div className="van_container">
                <div className="left_col">
                    <img src={van.image} alt={van.title} />
                </div>
                <div className="right_col">   
                    <p className="type">{van.type}</p>
                    <h2>{van.title}</h2>
                    <p className="price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                </div>
        </div>
    )
}