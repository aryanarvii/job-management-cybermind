import Job from "../models/Job.js";

// CREATE JOB
export const createJob = async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET JOBS (with filters)
export const getJobs = async (req, res) => {
  try {
    const { title, location, jobType, minSalary, maxSalary } = req.query;
    const query = {};

    if (title) query.title = new RegExp(title, "i");
    if (location) query.location = { $in: [new RegExp(location, "i")] };
    if (jobType) query.jobType = jobType;
    if (minSalary || maxSalary) {
      const min = Number(minSalary) || 0;
      const max = Number(maxSalary) || 99999999;

      query.$and = [
        { minSalary: { $lte: max } },
        { maxSalary: { $gte: min } }
      ];
    }


    const jobs = await Job.find(query).sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE JOB
export const deleteJob = async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.json({ message: "Job deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
