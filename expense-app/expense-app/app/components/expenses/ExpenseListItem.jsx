import { Form, Link, useFetcher, useSubmit } from '@remix-run/react'

function ExpenseListItem({ id, title, amount }) {
  const fetch = useFetcher();

  function deleteExpenseItemHandler() {
    const proceed = confirm('Are you sure?');
    if (!proceed) {
      return;
    }
    fetch.submit(null, { method: 'delete', action: `/expenses/${id}` })
  }

  if (fetch.state !== 'idle') {
    return(
      <article className='expense-item locked'>
        <p>Deleting...</p>
      </article>
    )
  }

  return (
    <article className="expense-item">
      <div>
        <h2 className="expense-title">{title}</h2>
        <p className="expense-amount">${amount.toFixed(2)}</p>
      </div>
      <menu className="expense-actions">
        <button onClick={deleteExpenseItemHandler}>Delete</button>
        <Link to={id}>Edit</Link>
      </menu>
    </article>
  );
}

export default ExpenseListItem;
