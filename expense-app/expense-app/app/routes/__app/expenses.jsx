// Remix
import { Outlet, Link, useLoaderData } from '@remix-run/react';
import { FaPlus, FaDownload } from 'react-icons/fa'
// Components
import ExpensesList from '../../components/expenses/ExpensesList'
// Server
import { getExpenses } from '../../data/expenses.server';
import { requireUserSession } from '../../data/auth.server';

export async function loader({ request }) {
  const userId = await requireUserSession(request);
  
  const expenses = await getExpenses(userId);
  return expenses
}

export default function ExpensesLayout() {
  const expenses = useLoaderData();

  const hasExpenses = expenses && expenses.length >0
    return (
      <>
        <Outlet />
        <main>
          <section id="expenses-actions">
            <Link to='add'>
              <FaPlus />
              <span>Add Expenses</span>
            </Link>
            <a href='/expenses/raw'>
              <FaDownload />
              <spand>Load Raw Data</spand>
            </a>
          </section>
          {hasExpenses && <ExpensesList expenses={expenses}/>}
          {!hasExpenses && 
            <section>
              <h1>No Expenses Found</h1>
              <p>Start <Link to='add'>adding some</Link> today</p>
            </section>
          }
        </main>
      </>
    );
  }