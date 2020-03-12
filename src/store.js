import throttle from 'lodash/throttle'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux-immer'
import produce from 'immer'
import { counterReducer } from 'reducers/counter'
import { todosReducer } from 'reducers/todos'
import { fetchDadJokesReducer } from 'reducers/fetch-dad-jokes'
import { loadState, saveState } from 'state'

const configureStore = () => {
  const persistedState = loadState()

  const store = createStore(
    combineReducers(produce, {
      counter: counterReducer,
      todos: todosReducer,
      jokes: fetchDadJokesReducer
    }),
    persistedState,
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )

  store.subscribe(throttle(() => {
    saveState(store.getState())
  }), 5000)

  return store
}

export default configureStore
