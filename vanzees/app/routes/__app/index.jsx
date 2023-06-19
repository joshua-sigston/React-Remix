import { NavLink } from '@remix-run/react';

import homeStyles from '../../styles/homePage.css';

export function links() {
  return [{rel: 'stylesheet', href: homeStyles}]
}

const Index = () => {
  return (
    <div className='home_container'>
      <h2>Prepared to make a classical jounrey with classical style.</h2>
      <NavLink  to='vans' className='to_vans-link'>Explore The Vans</NavLink>
    </div>
  );
}

export default Index
