
// Styles
//Styles
import footerStyles from '../styles/footer.css'

export function links() {
    return [{ rel: 'stylesheet', href:footerStyles }]
}

export default function Footer() {
    return (
        <footer className="footer_container">
          <h3>&#169; 2023 Vanzies</h3>
        </footer>
      )
}