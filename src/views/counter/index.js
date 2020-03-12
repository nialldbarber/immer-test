import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import { increment, decrement, reset } from 'actions/counter'

const style = {
  width: '200px',
  height: '200px',
  borderRadius: '6px',
  background: 'linear-gradient(0deg, rgb(119, 0, 255), rgba(119, 0, 255, 0)), linear-gradient(90deg, rgb(255, 0, 136), rgb(0, 153, 255))'
}

const Example = () => (
  <motion.div style={style} drag animate={{ scale: [0, 1, 2, 1] }} />
)

const CounterPage = () => {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Counter page</h1>
      <p>Count is: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>RESET</button>
      <Example />
    </div>
  )
}

export default CounterPage
