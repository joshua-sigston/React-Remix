// Components
import AuthForm from "../../components/auth/AuthForm";
// Styles
import authStyles from '../../styles/auth.css'
export function links() {
  return [{ rel: 'stylesheet', href: authStyles}]
}
// Server
import { validateCredentials } from '../../data/validation.server'
import { signUp, login } from "../../data/auth.server";
// Remix
import { redirect } from "@remix-run/node";
// Action
export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const authMode = searchParams.get('mode') || 'login';
  console.log(authMode)
  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);

  try {
    validateCredentials(credentials)
  } catch (error) {
    return error;
  }

  try {
    if (authMode === 'login') {
      return await login(credentials);
    } else {
      return await signUp(credentials);
    }
  } catch (error) {
    if (/(422|401|403)/.test(error.status)) {
      return { credentials: error.message };
    }
      return { credentials: 'Something went wrong!' };
  }
  
}

export default function AuthPage() {
    return (
      <div >
       <AuthForm />
      </div>
    );
  }