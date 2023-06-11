import ExpenseStatistics from '../../components/expenses/ExpenseStatistics'
import Chart from '../../components/expenses/Chart'

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

import expensesStyles from '../../styles/expenses.css'

export function links() {
  return ({ rel: "stylesheet", href: expensesStyles })
}

export default function ExpensesAnalysisPage() {
    return (
      <div >
        <Chart expenses={dummyData}/>
        <ExpenseStatistics expenses={dummyData}/>
      </div>
    );
  }