// Components
import ExpenseStatistics from '../../components/expenses/ExpenseStatistics'
import Chart from '../../components/expenses/Chart'
import Error from '../../components/util/Error'
// Styles
import expensesStyles from '../../styles/expenses.css'
// Server
import { getExpense } from '../../data/expenses.server'
// Remix
import { json } from '@remix-run/node'
import { useCatch, useLoaderData } from '@remix-run/react'
import { requireUserSession } from '../../data/auth.server'

export function links() {
  return [{ rel: "stylesheet", href: expensesStyles }]
}


export async function loader({ request }) {
  await requireUserSession(request);
  
  const expenses = await getExpense();

  if(!expenses || expenses.length === 0) {
    throw json(
      {message: 'Could not load expenses.'},
      {
        status: 404,
        statusText: 'Expenses not found.'
      }
    )
  }

  return expenses
}

export function CatchBoundary() {
  const caughtResponse = useCatch();
  return(
    <main>
      <Error title={caughtResponse.statusText}>
        <p>{caughtResponse.data?.message || 'Could not load expenses.'}</p>
      </Error>
    </main>
  )
}

export default function ExpensesAnalysisPage() {
  const expenses = useLoaderData();
    return (
      <div >
        <Chart expenses={expenses}/>
        <ExpenseStatistics expenses={expenses}/>
      </div>
    );
  }