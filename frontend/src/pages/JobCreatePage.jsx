import { useForm } from "react-hook-form";
import { createJob } from "../api/jobApi";

export default function JobCreatePage() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    // Convert location string to array
    data.location = data.location.split(",").map(l => l.trim());
    await createJob(data);
    reset();
    alert("Job Created ✅");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Create New Job</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 max-w-lg">
        <input {...register("title")} placeholder="Job Title" className="border p-2 rounded" required />
        <input {...register("companyName")} placeholder="Company Name" className="border p-2 rounded" required />
        <input {...register("location")} placeholder="Locations (comma separated)" className="border p-2 rounded" required />
        <select {...register("jobType")} className="border p-2 rounded" required>
          <option value="">Select Job Type</option>
          <option value="FullTime">Full-time</option>
          <option value="PartTime">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
        </select>
        <input {...register("minSalary")} placeholder="Min Salary" className="border p-2 rounded" type="number" />
        <input {...register("maxSalary")} placeholder="Max Salary" className="border p-2 rounded" type="number" />
        <textarea {...register("description")} placeholder="Description" className="border p-2 rounded" />
        <textarea {...register("requirements")} placeholder="Requirements" className="border p-2 rounded" />
        <textarea {...register("responsibilities")} placeholder="Responsibilities" className="border p-2 rounded" />
        <input {...register("deadline")} type="date" className="border p-2 rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Create Job</button>
      </form>
    </div>
  );
}
