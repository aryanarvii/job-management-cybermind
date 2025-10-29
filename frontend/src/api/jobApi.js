import axios from 'axios'

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || 'http://localhost:5000/',
})

export const fetchJobs = (params = {}) => API.get('/api/jobs/', { params })
export const createJob = (payload) => API.post('/api/jobs/create', payload)
export const deleteJob = (id) => API.delete(`/api/jobs/${id}`)
