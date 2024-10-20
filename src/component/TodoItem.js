function TodoItem() {
  return (
    <div className="flex items-center p-2 border-b border-gray-200">
      <div className="mr-5 checkList">
        <input type="checkbox" />
      </div>
      <div className="title-col">React 공부하기</div>
      <div className="ml-auto mr-3 text-sm text-gray-400 date-col">
        {new Date().toLocaleDateString()}
      </div>
      <div className="button-col">
        <button className="btn btn-sm">삭제</button>
      </div>
    </div>
  )
}

export default TodoItem
