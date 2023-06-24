// Remix
import { useNavigation, useSearchParams, Link, useActionData } from '@remix-run/react'
// Font-Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut, faUserPlus } from '@fortawesome/free-solid-svg-icons';

export default function LogInForm() {
    const [searchParams] = useSearchParams();
    const navigation = useNavigation();
    const validationErrors = useActionData();

    const mode = searchParams.get('mode') || 'login';
    const isSubmitting = navigation.state !== 'idle';
    const submitBtnCaption = mode === 'login' ? 'Login' : 'Sign Up';
    const toggleBtnCaption = mode === 'login' ? 'Create new user' : 'Log in with existing user.';

    return(
        <form method="POST" >
            <div className="icon_container">
                {mode === 'login' ? <FontAwesomeIcon icon={faUserAstronaut} /> : <FontAwesomeIcon icon={faUserPlus} />}
            </div>
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Enter password" required />
            {
                validationErrors && 
                <ul>
                    {Object.values(validationErrors).map(error => <li key={error}>{error}</li>)}
                </ul>
            }
            <div className="btn_container">
                <button disabled={isSubmitting}>{isSubmitting ? 'Processing...' : submitBtnCaption}</button>
                <Link to={mode === 'login' ? '?mode=signup' : '?mode=login'}>{toggleBtnCaption}</Link>
            </div>
        </form>
    )
}