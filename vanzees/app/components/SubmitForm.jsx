// Remix
import { Link, useActionData, Form, useNavigation } from '@remix-run/react'

function SubmitForm() {
  const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10
  const validationErrors = useActionData();
  const navigation = useNavigation();

  const isSubmitting = navigation.state !== 'idle';

  return (
    <Form method="post" className="form" id="expense-form">
      <p>
        <input type="text" id="title" name="title" placeholder='Van Title' required maxLength={30} />
      </p>

      <div className="form-row">
        <p>
          <input
            type="number"
            id="amount"
            name="amount"
            min="0"
            step="0.01"
            placeholder='Price'
            required
          />
        </p>
        <p>
            <input type="text" id='image' name='image' placeholder='ImageUrl' required />
        </p>
        <p>
            <input type="text" id='description' name='description' placeholder='Describe Van' required minLength={15}/>
        </p>
        <p>
            <input type="text" id='type' name='type' placeholder='type of van' required minLength={5}/>
        </p>
      </div>
      {
        validationErrors && 
        <ul>{Object.values(validationErrors).map(error => <li key={error}>{error}</li>)}</ul>
      }
      <div className="form-actions">
        <button disabled={isSubmitting}>{isSubmitting ? 'Saving..' : 'Add Van'}</button>
        <Link to='/vans'>Cancel</Link>
      </div>
    </Form>
  );
}

export default SubmitForm;
