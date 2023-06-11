import ExpensesForm from '../../../components/expenses/ExpenseForm'
import Modal from '../../../components/util/Modal'
import { useNavigate } from '@remix-run/react';

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