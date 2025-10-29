import React from 'react'
import { useEffect, useState } from 'react'
import { timeAgo } from '../utils/timeAgo'
import { getCompanyLogo } from '../utils/getCompanyLogo';


export default function JobCard({ job }) {
  const [relativeTime, setRelativeTime] = useState(timeAgo(job.createdAt))

  useEffect(() => {
    const interval = setInterval(() => {
      setRelativeTime(timeAgo(job.createdAt))
    }, 60000) // update every minute
    return () => clearInterval(interval)
  }, [job.createdAt])

  return (
    <div className="bg-white shadow-soft border rounded-xl p-4 flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <div className="flex gap-3 items-start">
          <div className="w-20 h-20 rounded-xl bg-gradient-to-tr from-[#FEFEFD] to-[#F1F1F1] grid place-items-center overflow-hidden">
            <img
              src={getCompanyLogo(job.companyName)}
              alt={job.companyName}
              className="w-20 h-20 rounded-xl object-contain border"
            />
          </div>
          
        </div>
        <span className="w-[75px] h-[45px] rounded-md text-sm text-center py-1 bg-[#B0D9FF] text-black font-semibold">{job.createdAt ? `Posted ${timeAgo(job.createdAt)}` : ''}</span>
      </div>

      <div>
            <h2 className="font-bold text-lg text-gray-800 my-2">{job.title}</h2>
            <p className="text-gray-500 text-sm">{job.companyName}</p>
        </div>

      <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
        <span>👤 {job.minExperience||0} - {job.maxExperience||0} years</span>
        <span>📍 {Array.isArray(job.location) ? job.location.join(', ') : job.location}</span>
        <span>💼 {job.jobType}</span>
        {(job.minSalary || job.maxSalary) && (
          <span>💰 ₹{Math.round((job.minSalary||0)/1000)}k - ₹{Math.round((job.maxSalary||0)/1000)}k</span>
        )}
        {/* <span>Last Date: {job.deadline}</span> */}
      </div>

      <ul className="mt-3 text-gray-500 text-sm list-disc pl-5 space-y-1">
        <li>{job.description}</li>
        <li>{job.requirements}</li>
        <li>{job.responsibilities}</li>
      </ul>

      <button className="mt-4 bg-[#00AAFF] hover:bg-blue-700 text-white font-medium py-2 rounded-lg">
        Apply Now
      </button>
    </div>
  )
}
