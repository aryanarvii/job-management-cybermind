import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import JobListPage from './pages/JobListPage'
import CreateJobModal from './components/CreateJobModal'
import "./index.css"

export default function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onCreateJobClick={() => setShowModal(true)} />
      <Routes>
        <Route path="/" element={<JobListPage />} />
      </Routes>
      {showModal && <CreateJobModal onClose={() => setShowModal(false)} />}
    </div>
  )
}
