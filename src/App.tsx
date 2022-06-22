import { useState } from 'react'
import { TodoList } from './TodoList'

function App() {
  const [todos, setTodos] = useState([])
  return (
    <>
      <TodoList 
        text='todos' 
      />
      <input type="text" />
      <button>Add todo</button>
      <button>Clear Completed todos</button>
      <div>0 left to do</div>
    </>
  )
}

export default App
