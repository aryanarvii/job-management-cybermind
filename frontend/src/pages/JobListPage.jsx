import React, { useEffect, useState } from 'react'
import FilterBar from '../components/FilterBar'
import JobCard from '../components/JobCard'
import { fetchJobs } from '../api/jobApi'

export default function JobListPage() {
  const [filters, setFilters] = useState({})
  const [jobs, setJobs] = useState([])

  const load = async () => {
    try {
      const { data } = await fetchJobs(filters)
      setJobs(data)
    } catch (e) {
      console.error(e)
      // fallback demo cards when backend not available
      setJobs([
        { _id: '1', title: 'Full Stack Developer', companyName: 'Amazon', companyLogo: '', location: ['Chennai','Bangalore'], jobType: 'FullTime', minSalary: 50000, maxSalary: 120000 },
        { _id: '2', title: 'Node Js Developer', companyName: 'Tesla', companyLogo: '', location: ['Hyderabad'], jobType: 'FullTime', minSalary: 60000, maxSalary: 110000 },
        { _id: '3', title: 'UX/UI Designer', companyName: 'Swiggy', companyLogo: '', location: ['Remote'], jobType: 'Contract', minSalary: 40000, maxSalary: 90000 },
        { _id: '4', title: 'Full Stack Developer', companyName: 'Amazon', companyLogo: '', location: ['Delhi'], jobType: 'Internship', minSalary: 15000, maxSalary: 30000 },
      ])
    }
  }

  useEffect(() => { load() }, [])
  useEffect(() => { load() }, [JSON.stringify(filters)])

  return (
    <div>
      <FilterBar onJobsFetched={setJobs}  />
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 py-8">
        {jobs.map((j) => <JobCard key={j._id || j.id} job={j} />)}
      </div>
    </div>
  )
}
