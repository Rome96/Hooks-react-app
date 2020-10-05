import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import './styles.css';

const initialState = [
  {
  id: 1,
  desc: 'Learning react',
  done: false
 },
 {
  id: 2,
  desc: 'Learning Hooks',
  done: false
 }
]

const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleSubmit = e => {
    e.preventDefault()

    const newTodo = {
      id: 3,
      desc: "Learning Unit test",
      done: false,
    };

    const action = {
      type: 'add',
      payload: newTodo
    }

    dispatch(action)
  }

  console.log({ todos });

  return (
    <div>
      <h3>
        Todo App <small>({todos.length})</small>
      </h3>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
              <li key={todo.id} className="list-group-item">
                <p className="text-center">
                  {i + 1}. {todo.desc}
                </p>
                <button className="btn btn-danger">delete</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5">
          <h4>Add TODO</h4>
          <hr/>
          <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="description"
                autoComplete="off"
                placeholder="Learning..."
                className="form-control"
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