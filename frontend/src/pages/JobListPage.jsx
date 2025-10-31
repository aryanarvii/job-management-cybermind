import React, { useEffect, useState } from 'react'
import FilterBar from '../components/FilterBar'
import JobCard from '../components/JobCard'
import { fetchJobs } from '../api/jobApi'
import Loader from '../components/Loader'

export default function JobListPage() {
  const [filters, setFilters] = useState({})
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  const load = async () => {
    setLoading(true)
    try {
      const { data } = await fetchJobs(filters)
      setJobs(data)
    } catch (e) {
      console.error(e)
      // fallback demo data
      setJobs([
        { _id: '1', title: 'Full Stack Developer', companyName: 'Amazon', location: ['Chennai','Bangalore'], jobType: 'FullTime', minSalary: 50000, maxSalary: 120000 },
        { _id: '2', title: 'Node Js Developer', companyName: 'Tesla', location: ['Hyderabad'], jobType: 'FullTime', minSalary: 60000, maxSalary: 110000 },
        { _id: '3', title: 'UX/UI Designer', companyName: 'Google', location: ['Remote'], jobType: 'Contract', minSalary: 40000, maxSalary: 90000 },
        { _id: '4', title: 'Frontend Developer Intern', companyName: 'Paytm', location: ['Delhi'], jobType: 'Internship', minSalary: 15000, maxSalary: 30000 },
      ])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])
  useEffect(() => { load() }, [JSON.stringify(filters)])

  return (
    <div>
      <FilterBar onJobsFetched={setJobs} />
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 py-8">
          {jobs.map((j) => <JobCard key={j._id || j.id} job={j} />)}
        </div>
      )}
    </div>
  )
}
