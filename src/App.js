import React from 'react'
import {useState, useRef} from 'react'
import Header from './component/Header'
import TodoEditor from './component/TodoEditor'
import TodoList from './component/TodoList'

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: 'React 공부',
    createdDate: new Date().getTime()
  },
  {
    id: 1,
    isDone: false,
    content: '빨래 널기',
    createdDate: new Date().getTime()
  },
  {
    id: 1,
    isDone: false,
    content: '노래 연습하기',
    createdDate: new Date().getTime()
  }
]

function App() {
  const [todo, setTodo] = useState(mockTodo)
  const onCreate = content => {
    const newItem = {
      id: 0,
      content,
      isDone: false,
      cratedDate: new Date().getTime()
    }
    setTodo([newItem, ...todo])
  }
  return (
    <div className="w-[500px] h-[500px] border-2 border-gray-500 mx-auto mt-5 p-5">
      <Header />
      <TodoEditor />
      <TodoList />
    </div>
  )
}

export default App
