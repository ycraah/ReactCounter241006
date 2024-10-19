function TodoEditor() {
  return (
    <div>
      <h1 className="mb-2 text-lg font-bold">새로운 Todo 작성하기📝</h1>
      <form>
        <input
          type="text"
          placeholder="새로운 Todo..."
          className="w-full max-w-xs input input-bordered"
        />
      </form>
    </div>
  )
}

export default TodoEditor
