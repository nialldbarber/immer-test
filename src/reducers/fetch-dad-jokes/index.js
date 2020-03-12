import { FETCH_LOADING, FETCH_SUCCESS, FETCH_ERROR } from 'constants/fetch-dad-jokes'

const initialState = {
  jokes: [],
  loading: false,
  error: false
}

export const fetchDadJokesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      state.loading = true
      return state
    case FETCH_SUCCESS:
      state.loading = false
      state.jokes = action.data
      return state
    case FETCH_ERROR:
      state.error = true
      state.loading = false
      return state
    default:
      return state
  }
}
