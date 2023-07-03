// Components
import LogInForm from "../../components/LogInForm"
// Server
import { validateCredentials } from '../../data/validation.server'
import { login, signup } from "../../data/auth.server";

// Action
export async function action({ request }) {
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get('mode') || 'login';

    const formData = await request.formData();
    const credentials = Object.fromEntries(formData);

    try {
        validateCredentials(credentials)
      } catch (error) {
        return error;
    }

    try {
        if (mode === 'login') {
            return await login(credentials);
        } else {
            return await signup(credentials);
        }
    } catch (error) {
        if (error.status === 422 || error.status === 401) {
            return { credentials: error.message}
        }
    }
}

export default function LogInPage() {

    return(
        <section className="login_container grid">
            <LogInForm />
        </section>
        
    )
}