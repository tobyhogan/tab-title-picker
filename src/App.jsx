import { useState, useEffect } from 'react'

function App() {
  const [title, setTitle] = useState('')
  const [pageTitle, setPageTitle] = useState('Change the Tab Title')
  const [darkMode, setDarkMode] = useState(false)

  // Load saved data on mount
  useEffect(() => {
    // Get title from URL path
    const path = window.location.pathname.slice(1) // Remove leading slash
    const savedTitle = path ? decodeURIComponent(path) : 'Change the Tab Title'
    const savedDarkMode = localStorage.getItem('darkMode') === 'enabled'
    
    setTitle(savedTitle)
    setPageTitle(savedTitle)
    document.title = savedTitle
    setDarkMode(savedDarkMode)
  }, [])

  // Update dark mode class on body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [darkMode])

  const handleUpdateTitle = () => {
    const newTitle = title || 'Change the Tab Title'
    setPageTitle(newTitle)
    document.title = newTitle
    
    // Update URL with encoded title
    const encodedTitle = encodeURIComponent(newTitle)
    window.history.pushState({}, '', `/${encodedTitle}`)
  }

  const handleClearInput = () => {
    setTitle('')
  }

  const handleAddText = (text) => {
    const newValue = title ? `${title} ${text}` : text
    setTitle(newValue)
  }

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode ? 'enabled' : 'disabled')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleUpdateTitle()
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#1a1a1a] text-[#333] dark:text-[#e0e0e0] transition-colors duration-300">
      {/* Dark mode toggle button */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-5 right-5 w-12 h-12 rounded-full bg-transparent border-2 border-[#333] dark:border-[#e0e0e0] text-[#333] dark:text-[#e0e0e0] flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
        aria-label="Toggle dark mode"
      >
        {/* Sun Icon */}
        <svg
          className={`w-6 h-6 ${darkMode ? 'hidden' : 'block'}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="5" strokeWidth="2"/>
          <line x1="12" y1="1" x2="12" y2="3" strokeWidth="2"/>
          <line x1="12" y1="21" x2="12" y2="23" strokeWidth="2"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" strokeWidth="2"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" strokeWidth="2"/>
          <line x1="1" y1="12" x2="3" y2="12" strokeWidth="2"/>
          <line x1="21" y1="12" x2="23" y2="12" strokeWidth="2"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" strokeWidth="2"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" strokeWidth="2"/>
        </svg>
        {/* Moon Icon */}
        <svg
          className={`w-6 h-6 ${darkMode ? 'block' : 'hidden'}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeWidth="2" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      </button>

      {/* Main content */}
      <div className="text-center pt-12 px-4">
        <h1 className="text-4xl mt-12 mb-5">
          {pageTitle}
        </h1>
        
        <p className="text-xl mb-5">
          Enter a new title and click the button to update:
        </p>
        
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter new title here"
          className="text-base py-2.5 px-2.5 my-2.5 w-4/5 max-w-md rounded-md border border-[#ccc] dark:border-[#555] bg-white dark:bg-[#2a2a2a] text-[#333] dark:text-[#e0e0e0] focus:outline-none focus:border-[#2575fc]"
        />
        
        <div className="mt-2.5">
          <button
            onClick={handleUpdateTitle}
            className="text-base py-2.5 px-5 my-2.5 bg-[#28a745] text-white border-none rounded-md cursor-pointer transition-all duration-300 hover:bg-[#218838] hover:-translate-y-0.5 active:translate-y-0"
          >
            Update Title
          </button>
          <button
            onClick={handleClearInput}
            className="text-base py-2.5 px-5 my-2.5 ml-2.5 bg-[#007bff] text-white border-none rounded-md cursor-pointer transition-all duration-300 hover:bg-[#0056b3] hover:-translate-y-0.5 active:translate-y-0"
          >
            Clear
          </button>
        </div>



        <div className="

          mt-4 max-w-lg mx-auto 

          [&_button]:text-sm [&_button]:py-2 [&_button]:px-4 
          
          [&_button]:bg-[#5a6268] hover:[&_button]:bg-[#70787d] 

          [&_button]:text-white [&_button]:border-none [&_button]:rounded-md [&_button]:cursor-pointer

        ">



          <h2 className="text-xl mb-4">Quick Add Text:</h2>
          
          {/* Types category */}
          <div className="mb-6">
            <h3 className="text-lg mb-2 font-semibold">Types</h3>
            <div className="flex flex-wrap justify-center gap-2">

              <button
                onClick={() => handleAddText('Working')}
              >
                " Working "
              </button>
              <button
                onClick={() => handleAddText('Personal')}
              >
                " Personal "
              </button>
              <button
                onClick={() => handleAddText('Consulting')}
              >
                " Consulting "
              </button>
            </div>
          </div>

          {/* Numbers category */}
          <div>
            <h3 className="text-lg mb-2 font-semibold">Numbers</h3>
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => handleAddText('1')}
              >
                " 1 "
              </button>
              <button
                onClick={() => handleAddText('2')}
              >
                " 2 "
              </button>
              <button
                onClick={() => handleAddText('3')}
              >
                " 3 "
              </button>
              <button
                onClick={() => handleAddText('4')}
              >
                " 4 "
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
