// Components
import SubmitForm from "../../../components/SubmitForm"
// Remix
import { redirect } from '@remix-run/node';
import { useNavigate } from '@remix-run/react';
// Server
import { addVan } from "../../../data/van.server";

// Action
export async function action({ request }) {
    const formData = await request.formData();
    const vanData = Object.fromEntries(formData);
    await addVan(vanData);
    return redirect('/my-vans')
}

export default function SubmitVanPage() {
    return (
        <>
            <SubmitForm />
        </>
    )
}