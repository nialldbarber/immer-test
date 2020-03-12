import { INCREMENT, DECREMENT, RESET } from 'constants/counter'

const initialState = {
  count: 0
}

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      state.count += 1
      return state
    case DECREMENT:
      state.count -= 1
      return state
    case RESET:
      state.count = 0
      return state
    default:
      return state
  }
}
