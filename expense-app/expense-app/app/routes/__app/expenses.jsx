// Remis
import { json } from '@remix-run/node';
import { Outlet, Link, useLoaderData } from '@remix-run/react';
import { FaPlus, FaDownload } from 'react-icons/fa'

import ExpensesList from '../../components/expenses/ExpensesList'

import { getExpenses } from '../../data/expenses.server';

export function loader() {
  return getExpenses()
}

export default function ExpensesLayout() {
  const expenses = useLoaderData();
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
          <ExpensesList expenses={expenses}/>
        </main>
      </>
    );
  }