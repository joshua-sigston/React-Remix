import { Outlet } from "react-router";

import ExpensesList from '../../components/expenses/ExpensesList'

const dummyData = [
  {
      id: 'e1',
      title: 'first expense',
      amount: 12.39,
      date: new Date().toISOString()
  },
  {
      id: 'e2',
      title: 'first expense',
      amount: 12.39,
      date: new Date().toISOString()
  }
]

export default function ExpensesLayout() {
    return (
      <>
        <Outlet />
        <main>
          <ExpensesList expenses={dummyData}/>
        </main>
      </>
    );
  }