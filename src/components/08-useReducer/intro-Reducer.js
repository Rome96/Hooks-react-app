const initialState = [{
  id: 1,
  todo: 'comprar pan',
  done: false
}];

const rootReducer = (state = initialState, action) => {

  // if (action?.type === 'add') {
  //   return [
  //     ...state,
  //     action.payload
  //   ]
  // }

  switch (action?.type) {
    case 'add':
      return [
        ...state,
        action.payload
      ]  
    default:
      break;
  }

  return state;
};

const newTodo = {
  id: 2,
  todo: "comprar leche",
  done: false,
};

//action
const addTodo = {
  type: 'add',
  payload: newTodo
}

let todos = rootReducer();

todos = rootReducer(todos, addTodo)

console.log(todos)