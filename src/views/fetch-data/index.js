import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDadJokes } from 'actions/fetch-dad-jokes'

const FetchDataPage = () => {
  const jokes = useSelector(state => state.jokes.jokes)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDadJokes())
    console.log(jokes)
  }, [])

  return (
    <div>
      <h1>{jokes.joke}</h1>
    </div>
  )
}

export default FetchDataPage
