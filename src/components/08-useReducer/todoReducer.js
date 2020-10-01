export const todoReducer = (state = [], action) => {
  switch (action?.type) {
    case 'add':
      return {}  
    default:
      return state
  }
}