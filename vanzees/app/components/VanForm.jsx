// Remix
import { Link, useActionData, Form, useNavigation, useMatches, useParams } from '@remix-run/react'

export default function VanForm() {
    const validationErrors = useActionData();
    const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10
    const navigation = useNavigation();
    const matches = useMatches();
    const params = useParams();
    
    const vans = matches.find(match => match.id === 'routes/__app/__host').data;
    const vanData = vans.find(van => van.id === params.id);

    if(params.id && !vanData) {
        return <p>Invalid expense Id</p>
      }

      const isSubmitting = navigation.state !== 'idle';

    const defaultValues = vanData
        ? {
        title: vanData.title,
        price: vanData.price,
        image: vanData.image,
        description: vanData.description,
        type: vanData.type
        }
        : {
        title: '',
        price: '',
        image: '',
        description: '',
        type: ''
        };

  return (
    <Form method={vanData ? 'PATCH' : 'POST'} className="form flex_column">
      <div className='flex_row input_container'>
        <label htmlFor="title">Van Title</label>
        <input type="text" id="title" name="title" required maxLength={30} defaultValue={defaultValues.title}/>
      </div>

      <div className='flex_row input_container'>
        <label htmlFor="price">Price</label>
        <input type="number" id="amount" name="amount" min="0" step="0.01" required defaultValue={defaultValues.price}/>
      </div>

      <div className='flex_row input_container'>
        <label htmlFor="image">Image Url</label>
        <input type="text" id='image' name='image' required defaultValue={defaultValues.image}/>
      </div>

      <div className='flex_row input_container'>
        <textarea className='textarea' placeholder='describe van' cols='40' type="text" id='description' name='description' required minLength={15} defaultValue={defaultValues.description}/>
      </div>

      <div className='flex_row input_container'>
        <label htmlFor="type">Van type:</label>
        <select id="type" name='type'defaultValue={defaultValues.type} className='options'>
          <option value="simple">Simple</option>
          <option value="rugged">Rugged</option>
          <option value="luxury">Luxury</option>
        </select>
      </div>
      {/* {
        validationErrors && 
        <ul>{Object.values(validationErrors).map(error => <li key={error}>{error}</li>)}</ul>
      } */}
      <div className="form_btns-container">
        <button disabled={isSubmitting}>{isSubmitting ? 'Saving..' : 'Save Van'}</button>
        <Link to='/host'>Cancel</Link>
      </div>
    </Form>
  );
}
