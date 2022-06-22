import { useState } from 'react'
import TodoList from './TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TodoList />
    <input type="text" />
    <button>Add todo</button>
    <button>Clear Completed todos</button>
    <div>0 left to do</div>
    </>
  )
}

export default App
