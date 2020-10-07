import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';
import './styles.css';


const init = () => { // computar estado inicial
  return JSON.parse(localStorage.getItem('todos')) || [] // si regresa null, retorna un [] vacio
  // return [{
  //   id: new Date().getTime(),
  //   desc: 'Learning react',
  //   done: false
  // }];
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  const [{ description }, handleInputChange, reset] = useForm({ description: "" });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = id => {
    const action = {
      type: 'delete',
      payload: id
    };

    dispatch(action);
  }

  const handleToggle = id => {
    dispatch({
      type: 'toggle',
      payload: id,
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (description.trim().length <= 0) return;

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const action = {
      type: 'add',
      payload: newTodo
    };

    dispatch(action)
    reset()
  };

  return (
    <div>
      <h3>
        Todo App <small>({todos.length})</small>
      </h3>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map(({id, desc, done}, i) => (
              <li key={id} className="list-group-item">
                <p
                  className={`${ done && 'complete' }`}
                  onClick={() => handleToggle(id)}
                >
                  {i + 1}. {desc}
                </p>
                <button className="btn btn-danger" onClick={() => handleDelete(id)}>
                  delete
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5">
          <h4>Add TODO</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              autoComplete="off"
              value={description}
              placeholder="Learning..."
              className="form-control"
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn btn-outline-primary mt-2 btn-block"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;