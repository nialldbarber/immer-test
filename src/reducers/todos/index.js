import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from 'constants/todos'

const initialState = {
  list: [
    {
      id: 1, todo: 'hello'
    }
  ]
}

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      state.list.push({ id: action.id, todo: action.todo })
      return state
    case REMOVE_TODO:
      state.list = state.list.filter(todo => todo.id !== action.id)
      return state
    case TOGGLE_TODO:
      state.list.map(todo => (todo.id === action.id ? todo.complete = !todo.complete : todo))
      return state
    default:
      return state
  }
}
