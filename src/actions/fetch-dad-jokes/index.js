import { FETCH_LOADING, FETCH_SUCCESS, FETCH_ERROR } from 'constants/fetch-dad-jokes'

export const fetchLoading = () => ({ type: FETCH_LOADING })
export const fetchSuccess = (data) => ({ type: FETCH_SUCCESS, data })
export const fetchError = (error) => ({ type: FETCH_ERROR, error })

export function fetchDadJokes() {
  return async (dispatch) => {
    try {
      dispatch(fetchLoading())
      const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          accept: 'application/json'
        },
      }).then(res => res.json()).then((data) => {
        dispatch(fetchSuccess(data))
      })
      console.log(response)
    } catch (err) {
      dispatch(fetchError(err))
      console.log('error!')
    }
  }
}
