function TodoEditor() {
  return (
    <div className="mb-4">
      <h1 className="mb-2 text-lg font-bold">새로운 Todo 작성하기📝</h1>
      <form>
        <input
          type="text"
          placeholder="새로운 Todo..."
          className="w-full max-w-xs mr-3 input input-bordered"
        />
        <button className="btn btn-active">추가</button>
      </form>
    </div>
  )
}

export default TodoEditor
