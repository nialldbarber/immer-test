import { v4 as uuidv4 } from 'uuid'
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from 'constants/todos'

export const addTodo = (todo) => ({ type: ADD_TODO, id: uuidv4(), todo, complete: false })
export const removeTodo = (id) => ({ type: REMOVE_TODO, id })
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, id })
