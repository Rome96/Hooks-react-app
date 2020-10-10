import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import TodoList from './TodoList';
import  TodoAdd  from './TodoAdd';


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

  const handleAdd = newTodo => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  }

  return (
    <div>
      <h3>
        Todo App <small>({todos.length})</small>
      </h3>
      <hr />
      <div className="row">
        <div className="col-md-7 col-sm-12">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className="col-md-5 col-sm-12">
          <TodoAdd handleAdd={handleAdd} />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;