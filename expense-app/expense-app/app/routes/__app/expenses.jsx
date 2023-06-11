import { Outlet, Link } from '@remix-run/react';
import { FaPlus, FaDownload } from 'react-icons/fa'

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
          <ExpensesList expenses={dummyData}/>
        </main>
      </>
    );
  }