import React from 'react'
import { useForm } from 'react-hook-form'
import { createJob } from '../api/jobApi.js'
import toast from 'react-hot-toast'
import { ChevronRight } from "lucide-react";

export default function CreateJobModal({ onClose }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    const payload = {
      title: data.title,
      companyName: data.companyName,
      location: data.location.split(',').map((l) => l.trim()).filter(Boolean),
      jobType: data.jobType,
      minSalary: Number(data.minSalary || 0),
      maxSalary: Number(data.maxSalary || 0),
      minExperience: Number(data.minExperience || 0),
      maxExperience: Number(data.maxExperience || 0),
      description: data.description,
      requirements: data.requirements,
      responsibilities: data.responsibilities,
      deadline: data.deadline || null,
    }

    try {
      await createJob(payload)
      toast.success('Job created successfully!')
      reset()
      onClose()
    } catch (e) {
      console.error(e)
      toast.error('Failed to create job. Please try again.')
    }
  }

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg max-w-2xl w-full h-[90vh] flex flex-col relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center mt-4">
          Create Job Opening
        </h2>

        {/* Scrollable Form */}
        <div className="overflow-y-auto px-6 pb-6">
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Job Title */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Job Title</label>
              <input
                {...register('title', { required: 'Job title is required' })}
                className="border p-2 rounded"
                placeholder="e.g. Full Stack Developer"
              />
              {errors.title && <p className="text-xs text-red-500">{errors.title.message}</p>}
            </div>

            {/* Company Name */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Company Name</label>
              <input
                {...register('companyName', { required: 'Company name is required' })}
                className="border p-2 rounded"
                placeholder="e.g. Amazon"
              />
              {errors.companyName && <p className="text-xs text-red-500">{errors.companyName.message}</p>}
            </div>

            {/* Location */}
            <div className="flex flex-col gap-1 col-span-1">
              <label className="text-sm font-medium text-gray-700">Location</label>
              <input
                {...register('location', { required: 'Location is required' })}
                className="border p-2 rounded"
                placeholder="e.g. Chennai, Bangalore (comma separated)"
              />
              {errors.location && <p className="text-xs text-red-500">{errors.location.message}</p>}
            </div>

            {/* Job Type */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-500">Job Type</label>
              <select
                {...register('jobType', { required: 'Please select a job type' })}
                className="border p-2 rounded"
              >
                <option value="">Select Job Type</option>
                <option value="FullTime">Full Time</option>
                <option value="PartTime">Part Time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
              {errors.jobType && <p className="text-xs text-red-500">{errors.jobType.message}</p>}
            </div>

            {/* Salary Range */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Salary Range (₹)</label>
              <div className="flex gap-2">
                <input
                  {...register('minSalary', { required: 'Min salary required' })}
                  placeholder="Min Salary"
                  type="number"
                  className="border p-2 rounded w-full"
                />
                <input
                  {...register('maxSalary', { required: 'Max salary required' })}
                  placeholder="Max Salary"
                  type="number"
                  className="border p-2 rounded w-full"
                />
              </div>
              {(errors.minSalary || errors.maxSalary) && (
                <p className="text-xs text-red-500">Please provide both min and max salary</p>
              )}
            </div>

            {/* Experience Range */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Experience Range (Years)</label>
              <div className="flex gap-2">
                <input
                  {...register('minExperience', { required: 'Min experience required' })}
                  placeholder="Min Exp"
                  type="number"
                  className="border p-2 rounded w-full"
                />
                <input
                  {...register('maxExperience', { required: 'Max experience required' })}
                  placeholder="Max Exp"
                  type="number"
                  className="border p-2 rounded w-full"
                />
              </div>
              {(errors.minExperience || errors.maxExperience) && (
                <p className="text-xs text-red-500">Please provide both min and max experience</p>
              )}
            </div>

            {/* Description */}
            <div className="flex flex-col gap-1 col-span-2">
              <label className="text-sm font-medium text-gray-700">Job Description</label>
              <textarea
                {...register('description', { required: 'Description is required' })}
                className="border p-2 rounded min-h-[60px]"
                placeholder="Enter job description"
              />
              {errors.description && <p className="text-xs text-red-500">{errors.description.message}</p>}
            </div>

            {/* Requirements */}
            <div className="flex flex-col gap-1 col-span-1">
              <label className="text-sm font-medium text-gray-700">Requirements</label>
              <textarea
                {...register('requirements')}
                className="border p-2 rounded min-h-[60px]"
                placeholder="Enter job requirements"
              />
            </div>

            {/* Responsibilities */}
            <div className="flex flex-col gap-1 col-span-1">
              <label className="text-sm font-medium text-gray-700">Responsibilities</label>
              <textarea
                {...register('responsibilities')}
                className="border p-2 rounded min-h-[60px]"
                placeholder="Enter job responsibilities"
              />
            </div>

            {/* Deadline */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Application Deadline</label>
              <input
                {...register('deadline')}
                type="date"
                className="border p-2 rounded"
              />
            </div>

            {/* Buttons */}
            <div className="col-span-2 flex justify-between gap-3 mt-2">
              <button
                type="button"
                onClick={onClose}
                className="w-52 px-4 py-2 rounded-lg border hover:border-black font-semibold"
              >
                Save Draft ▾
              </button>
              <button
                type="submit"
                className="w-52 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2 rounded-lg flex items-center justify-center"
              >
                Publish <ChevronRight />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
