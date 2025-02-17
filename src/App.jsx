import * as React from 'react'
import { useState, useEffect } from 'react'

function App() {
  const [title, setTitle] = useState('')
  const [isPressed, setIsPressed] = useState(false)

  useEffect(() => {
    const savedTitle = localStorage.getItem('tabTitle')
    if (savedTitle) {
      setTitle(savedTitle)
      document.title = savedTitle
    }
  }, [])

  const showPressEffect = () => {
    setIsPressed(true)
    setTimeout(() => setIsPressed(false), 150)
  }

  const handleUpdateTitle = () => {
    document.title = title
    localStorage.setItem('tabTitle', title)
    showPressEffect()
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleUpdateTitle()
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 relative">
      <div className="absolute top-[10vh] left-1/2 -translate-x-1/2">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Tab Title Picker
        </h1>
        <div className="flex gap-4 mt-10">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyUp={handleKeyPress}
            placeholder="Enter new title"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleUpdateTitle}
            className={`px-4 py-2 bg-blue-500 text-white rounded-lg 
              relative top-0
              transition-all duration-75
              hover:bg-blue-600
              active:top-1 active:bg-blue-700
              ${isPressed ? 'top-1 bg-blue-700' : ''}`}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  )
}

export default App 
