// Components
import ExpensesForm from '../../../components/expenses/ExpenseForm'
import Modal from '../../../components/util/Modal'
// Remix
import { useNavigate } from '@remix-run/react';
import { redirect } from '@remix-run/node';
// Server
import { deleteExpense, updateExpense } from '../../../data/expenses.server';
import { validateExpenseInput } from '../../../data/validation.server';
// import { getExpense } from '../../../data/expenses.server';

// export async  function loader({ params }) {
//     const expenseId = params.id;
//     const expense = await getExpense(expenseId);
//     return expense;
// }

// Action Function
export async function action({ params, request }) {
    const expenseId = params.id;

    if(request.method === 'PATCH') {
        const formData = await request.formData();
        const expenseData = Object.fromEntries(formData);
    
        // validate data submitted by user
        try {
            validateExpenseInput(expenseData)
        } catch (error) {
            return error;
        }
    
        updateExpense(expenseId, expenseData)
        return redirect('/expenses')
    } else if (request.method === 'DELETE') {
        await deleteExpense(expenseId);
        // return redirect('/expenses')
        return { deletedId: expenseId}
    }
}

export default function AddExpensePage() {
    const navigate = useNavigate();

    const closeHandler = () => {
        navigate('..')
    }

    return(
        <div>
            <Modal onClose={closeHandler}>
                <ExpensesForm />
            </Modal>
        </div>
    )
}