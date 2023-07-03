// Components
import VanForm from "../../../components/VanForm"
// Remix
import { redirect } from '@remix-run/node';
import { useNavigate } from '@remix-run/react';
// Server
import { addVan } from "../../../data/van.server";
import { getUserSession } from "../../../data/auth.server";

// Action
export async function action({ request }) {
    const userID = await getUserSession(request);
    const formData = await request.formData();
    const vanData = Object.fromEntries(formData);

    await addVan(vanData, userID);
    return redirect('/host-vans')
}

export default function SubmitVanPage() {
    const navigate = useNavigate();
    
    return (
        <section className="form_container flex_row">
            <VanForm />
        </section>
    )
}