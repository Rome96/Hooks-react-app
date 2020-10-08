import React from 'react';
import PropTypes from 'prop-types'
import './styles.css';

const TodoListItem = props => {
  const { i, id, desc, done, handleToggle, handleDelete } = props;

  return <li className='list-group-item'>
    <p className={`${done && 'complete'}`} onClick={() => handleToggle(id)} >
      {i + 1}. {desc}
    </p>
    <button className='btn btn-danger' onClick={() => handleDelete(id)} >
      delete
    </button>
  </li>
};

TodoListItem.propTypes = {
  i: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  done: PropTypes.bool.isRequired,
  desc: PropTypes.string.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default TodoListItem;
