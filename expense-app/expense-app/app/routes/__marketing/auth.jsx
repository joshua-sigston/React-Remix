// Components
import AuthForm from "../../components/auth/AuthForm";
// Styles
import authStyles from '../../styles/auth.css'
export function links() {
  return [{ rel: 'stylesheet', href: authStyles}]
}
// Server
import { validateCredentials } from '../../data/validation.server'
import { signUp } from "../../data/auth.server";
// Remix
import { redirect } from "@remix-run/node";
// Action
export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const authMode = searchParams.get('mode') || 'login';

  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);

  try {
    validateCredentials(credentials)
  } catch (error) {
    return error;
  }

  if (authMode === 'login') {
    // login logic
  } else {
    await signUp(credentials)
    return redirect('/expenses')
  }
  return null
}

export default function AuthPage() {
    return (
      <div >
       <AuthForm />
      </div>
    );
  }