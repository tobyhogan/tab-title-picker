import * as React from 'react'
import { useState, useEffect } from 'react'

function App() {
  const [title, setTitle] = useState('')

  // Check local storage on initial load
  useEffect(() => {
    const savedTitle = localStorage.getItem('tabTitle')
    if (savedTitle) {
      setTitle(savedTitle)
      document.title = savedTitle
    }
  }, [])

  const handleUpdateTitle = () => {
    document.title = title
    localStorage.setItem('tabTitle', title)
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
            onKeyDown={handleKeyPress}
            placeholder="Enter new title"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleUpdateTitle}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  )
}

export default App 
