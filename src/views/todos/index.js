import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { addTodo, toggleTodo, removeTodo } from 'actions/todos'

const TodosPage = () => {
  const todos = useSelector(state => state.todos.list)
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      todo: ''
    },
    onSubmit: (val) => {
      const { todo } = val
      dispatch(addTodo(todo))
    }
  })

  return (
    <div>
      <h1>Todos page</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          id="todo"
          name="todo"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.todo}
        />
        <button type="submit">Add</button>
      </form>
      <div>
        <h1>Todos</h1>
        {todos && todos.map(({ id, todo, complete }) => (
          <p
            key={id}
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              textDecoration: complete ? 'line-through' : ''
            }}
            onClick={() => dispatch(toggleTodo(id))}
          >
            {todo}
            <span onClick={() => dispatch(removeTodo(id))}>X</span>
          </p>
        ))}
      </div>
    </div>
  )
}

export default TodosPage
