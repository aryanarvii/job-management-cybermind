import React, { useState } from 'react'
import SalaryRangeSlider from './SalaryRangeSlider'
import jobtypesvg from '../assets/jobTypeVector.svg'
import { fetchJobs } from '../api/jobApi.js'


export default function FilterBar({ onJobsFetched }) {
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')
  const [jobType, setJobType] = useState('')
  // const [min, setMin] = useState(50000)
  // const [max, setMax] = useState(80000)
  const [salaryRange, setSalaryRange] = useState([30000, 120000]); // [min, max]


  const apply = async () => {
      try {
        const { data } = await fetchJobs({
          title,
          location,
          jobType,
          minSalary: salaryRange[0],
          maxSalary: salaryRange[1],
        })
        onJobsFetched(data)
      } catch (err) {
        console.error('Error fetching jobs:', err)
      }
    }

  return (
    <div className="w-full bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4 py-4 px-4">
        {/* Search */}
        <div className="flex items-center gap-2 border-r px-3 h-12 bg-white flex-1 min-w-[220px]">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-gray-500">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Search By Job Title, Role" className="w-full outline-none text-sm placeholder:text-gray-500 w-48 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"/>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 border-r px-3 h-12 bg-white">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-gray-500">
            <path d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
            <path d="M19.5 10.5C19.5 15 12 21 12 21s-7.5-6-7.5-10.5a7.5 7.5 0 1 1 15 0Z"/>
          </svg>
          <select value={location} onChange={(e)=>setLocation(e.target.value)} className="text-sm text-gray-500 bg-white w-48 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
            <option value="">Preferred Location</option>
            <option>Chennai</option>
            <option>Bangalore</option>
            <option>Hyderabad</option>
            <option>Delhi</option>
            <option>Mumbai</option>
          </select>
        </div>

        {/* Job type */}
        <div className="flex items-center gap-2 border-r px-3 h-12 bg-white ">
          <img src={jobtypesvg}></img>
          <select value={jobType} onChange={(e)=>setJobType(e.target.value)} className="text-sm text-gray-500 outline-none shadow-sm  w-48 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
            <option value="">Job type</option>
            <option value="FullTime">Full Time</option>
            <option value="PartTime">Part Time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        {/* Salary Range */}

        <SalaryRangeSlider 
          value={salaryRange} 
          onChange={setSalaryRange} />

        <button onClick={apply} className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-lg">
          Apply
        </button>
      </div>
    </div>
  )
}


