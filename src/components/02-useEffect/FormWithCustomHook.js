import React from 'react';
import { useForm } from '../hooks';
import './effect.css';

const FormWithCustomHook = () => {

  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formValues;

  const handleOnSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      alert('Todos los campos son obligatorios!')
    } else {
      console.log(formValues)
    }
    return;
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <h3>Form With Custom Hook</h3>
      <hr />
      <div className='form-group'>
        <label>Name:</label>
        <input
          name='name'
          type='text'
          value={name}
          placeholder='name'
          className='form-control'
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className='form-group'>
        <label>Email:</label>
        <input
          name='email'
          type='text'
          value={email}
          placeholder='email'
          className='form-control'
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className='form-group'>
        <label>Password:</label>
        <input
          name='password'
          type='password'
          value={password}
          placeholder='****'
          className='form-control'
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <button type='submit' className='btn btn-primary'>Send</button>
    </form>
  );
};

export default FormWithCustomHook;
