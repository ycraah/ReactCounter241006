import React from 'react'
import Header from './component/Header'
import TodoEditor from './component/TodoEditor'

function App() {
  return (
    <div className="w-[500px] h-[500px] border-2 border-gray-500 mx-auto mt-5 p-5">
      <Header />
      <TodoEditor />
      <h1>TodoList Component</h1>
    </div>
  )
}

export default App
