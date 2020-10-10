import React from 'react'
import { useForm } from '../../hooks/useForm';

const TodoAdd = ({ handleAdd }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 0) return;

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAdd(newTodo);
    reset();
  };

  return (
    <>
      <h4>Add TODO</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='description'
          autoComplete='off'
          value={description}
          placeholder='Learning...'
          className='form-control'
          onChange={handleInputChange}
        />
        <button
          type='submit'
          className='btn btn-outline-primary mt-2 btn-block'
        >
          Add
        </button>
      </form>
    </>
  );
};

export default TodoAdd;
