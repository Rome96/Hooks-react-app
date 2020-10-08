import React from 'react';
import PropTypes from 'prop-types'
import TodoListItem from './TodoListItem';

const TodoList = props => {
  const {todos, handleDelete, handleToggle} = props;

  return <ul className="list-group list-group-flush">
    {todos.map((todo, i) => (
      <TodoListItem
        i={i}
        {...todo}
        key={todo.id}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    ))}
  </ul>
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default TodoList;
