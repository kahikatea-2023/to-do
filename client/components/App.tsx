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
      <div className="layout">
        <div className="form">
          <h1>What Do You Have To Do?</h1>
          <form className="input">
            <input type="text" id="todo" name="todo"></input>
          </form>
          <button type="submit">Add</button>
        </div>
        <div className="list">
          <h1>To Do!</h1>
          <ul>
            {todos.map((todo) => (
              <li key={todo}>{todo}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
