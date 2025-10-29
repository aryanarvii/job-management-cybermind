import React from 'react'
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg'

export default function Navbar({ onCreateJobClick }) {
  return (
    <nav className="w-full backdrop-blur bg-white/80 sticky top-0 z-30 ">
      <div className="max-w-7xl mx-auto flex justify-center py-4 px-4">
        <div className="flex items-center gap-6 text-gray-700 text-sm font-medium shadow-md rounded-3xl px-4 py-3">
          <div className="flex items-center gap-2 pr-4 border-r ">
            <div className="w-8 h-8 rounded-xl  text-white flex items-center justify-center font-bold">
              <img src={logo} alt="Logo" className="w-10 h-10 bg-white" />
            </div>
          </div>
            <Link to="/" className="hover:text-gray-900">Home</Link>
            <Link to="/find-jobs" className="hover:text-gray-900">Find Jobs</Link>
            <Link to="/find-talents" className="hover:text-gray-900">Find Talents</Link>
            <Link to="/about-us" className="hover:text-gray-900">About Us</Link>
            <Link to="/testimonials" className="hover:text-gray-900">Testimonials</Link>
          <button
            onClick={onCreateJobClick}
            className="ml-2 bg-indigo-600 bg-gradient-to-tr from-indigo-800 to-fuchsia-500 text-white font-medium px-4 py-2 rounded-full shadow transform transition-transform duration-300 hover:scale-105"
          >
            Create Jobs
          </button>
        </div>
      </div>
    </nav>
  )
}

