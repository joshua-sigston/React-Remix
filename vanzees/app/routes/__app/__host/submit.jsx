// Components
import SubmitForm from "../../../components/SubmitForm"
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
    return redirect('/my-vans')
}

export default function SubmitVanPage() {
    const navigate = useNavigate();
    
    return (
        <>
            <SubmitForm />
        </>
    )
}