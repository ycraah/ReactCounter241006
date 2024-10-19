function Header() {
  const today = new Date()
  return (
    <div className="mb-5">
      <h1 className="text-3xl font-bold">오늘은 📅</h1>
      <h1 className="mt-5 text-3xl font-bold text-gray-400">
        {new Date().toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          weekday: 'long'
        })}
      </h1>
    </div>
  )
}

export default Header
