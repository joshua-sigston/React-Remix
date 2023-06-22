// Components
import ExpensesForm from '../../../components/expenses/ExpenseForm'
import Modal from '../../../components/util/Modal'
// Remix
import { redirect } from '@remix-run/node';
import { useNavigate } from '@remix-run/react';
// Server
import { addExpense } from '../../../data/expenses.server';
import { validateExpenseInput } from '../../../data/validation.server';
import { requireUserSession } from '../../../data/auth.server';

export async function action({request}) {
    const userId = await requireUserSession(request);
    const formData = await request.formData();
    const expenseData = Object.fromEntries(formData);
    
    // validate data submitted by user
    try {
        validateExpenseInput(expenseData)
    } catch (error) {
        return error;
    }

    await addExpense(expenseData, userId);
    return redirect('/')
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