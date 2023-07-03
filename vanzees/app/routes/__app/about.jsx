import aboutImage from '../../images/tyler-nix-6mze64HRU2Q-unsplash.jpg'
// Styles
import aboutStyles from '../../styles/aboutPage.css'
export function links() {
    return [{ rel: 'stylesheet', href: aboutStyles}]
}

export default function AboutPage() {
    return (
      <div className='about_container'>
        <div className="images_container">
          <img src={aboutImage} alt="a van" />
        </div>
        <div className="info_container">
          <h2>See the world in style, while you travel with ease and a smile.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur labore quas inventore perspiciatis a eos unde saepe minus impedit aspernatur.</p>
        </div>
      </div>
    );
  }