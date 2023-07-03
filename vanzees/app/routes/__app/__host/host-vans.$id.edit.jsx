import { useFetcher } from "@remix-run/react";
import VanForm from "../../../components/VanForm"

import { updateVan, deleteVan } from "../../../data/van.server";

import { redirect } from "@remix-run/node";

export async function action({params, request}) {
    const  vanID= params.id;
    
    if(request.method === 'PATCH') {
        const formData = await request.formData();
        const vanData = Object.fromEntries(formData);
        
        // validate data submitted by user
        // try {
        //     validateExpenseInput(expenseData)
        // } catch (error) {
        //     return error;
        // }
    
        updateVan(vanID, vanData)
        return redirect(`/host`)
    } else if (request.method === 'DELETE') {
        console.log('running delete')
        await deleteVan(vanID);
        // return redirect('/host')
        return { vanId: vanID}
    }
}

export default function EditVan() {

    return(
        <section className="edit_form-container flex_row">
            <VanForm/>
        </section>
    )
}