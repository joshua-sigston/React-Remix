import { Link, useOutletContext, useFetcher } from "@remix-run/react";

export default function DashboardPage() {
    const { hostVans } = useOutletContext();
    const fetcher = useFetcher();

    function deleteVanHandler() {
        const proceed = confirm('Are you sure?');
        if (!proceed) {
          return;
        }
        console.log('before fetcher')
        fetcher.submit(null, { method: 'DELETE', action: `/host-vans/${van.id}/edit` });
        console.log('after fetcher')
      }
    
    //   if (fetch.state === 'idle') {
    //     return(
    //       <article className='expense-item locked'>
    //         <p>Deleting...</p>
    //       </article>
    //     )
    //   }

    return (
        <section className="dashboard_container">
            <div className="income_overview flex_row">
                <div className="left_col flex_column">
                    <h2>Welcome!</h2>
                    <p>Your total income:</p>
                    <h1>{Math.floor((Math.random() * 30) * 100)}</h1>
                </div>
                <Link to='/income' className="details">Details</Link>
            </div>
            <div className="review_overview flex_row">
                <div className="review_score">
                    <h3>Review Score</h3>
                    <p>{Math.floor((Math.random() * 5))}/5</p>
                </div>
                <Link to="/reviews" className="details">Details</Link>
            </div>
            <div className="vans_overview">
                <div className="vans_overview-header flex_row">
                    <h3>Your Vans</h3>
                    <Link to='/host-vans' className="details">View All</Link>
                </div>
                {hostVans.map((van) => {
                return(
                    <article key={van.id} className="van_list flex_row">
                            <img src={van.image} alt={van.title} className="image_thumb"/>
                            <div className="van_info flex_column">
                                <h4>{van.title}</h4>
                                <p>${van.price}/day</p>
                            </div>
                            <div className="btns_container flex_column">
                                <Link to={`/host-vans/${van.id}/edit`}>Edit</Link>
                                <button onClick={deleteVanHandler}>Delete</button>
                                {/* <Form method="DELETE" action={`/host-vans/${van.id}/edit`}>
                                    <button>Delete</button> 
                                </Form> */}
                            </div>
                    </article>
                )
                })}
            </div>
        </section>
    )
}