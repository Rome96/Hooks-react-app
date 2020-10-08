import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';
import TodoList from './TodoList';


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
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
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