import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import './styles.css';

const initialState = [{
  id: 1,
  desc: 'Learning react',
  done: false
}]

const TodoApp = () => {

  const [todos] = useReducer(todoReducer, initialState);

  console.log(todos)

  return (
    <div>
      <h3>Todo App</h3>
      <hr/>
      <ul>
        <li>hola</li>
        <li>humanos</li>
        <li>jojo</li>
      </ul>
    </div>
  );
};

export default TodoApp;