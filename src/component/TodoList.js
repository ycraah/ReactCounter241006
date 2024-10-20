import TodoItem from './TodoItem'

function TodoList() {
  return (
    <div>
      <h1 className="mb-2 text-lg font-bold">Todo List🧾</h1>
      <input
        type="text"
        className="w-full border-b-2 h-[40px]"
        placeholder="검색어를 입력하세요"
      />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  )
}

export default TodoList
