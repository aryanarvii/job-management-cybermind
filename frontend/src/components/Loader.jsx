import React, { useEffect, useState } from 'react'

export default function Loader() {
  const [showMessage, setShowMessage] = useState(false)

  // After 10s, show warm-up message
  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 10000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-[60vh] gap-4 animate-fade-in">
      {/* Spinner */}
      <div className="w-10 h-10 border-4 border-gray-300 border-t-indigo-600 rounded-full animate-spin"></div>
      {/* Message */}
      <p className="text-gray-600 text-sm">
        {showMessage
          ? '⚙️ Warming up backend server... please hold on.'
          : 'Fetching jobs, please wait...'}
      </p>
    </div>
  )
}
