import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchTodos } from '../slices/todos'

function App() {
  const todos = useAppSelector((state) => state.todos)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <>
      <div className="app">
        <h1>To-Do Full Stack!</h1>
        <ul>
          {todos.map((todo) => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
