import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    companyName: { type: String, required: true },
    location: [{ type: String, required: true }],
    jobType: {
      type: String,
      enum: ["FullTime", "PartTime", "Contract", "Internship"],
      required: true,
    },
    minSalary: Number,
    maxSalary: Number,
    minExperience: Number,
    maxExperience: Number,
    description: String,
    requirements: String,
    responsibilities: String,
    deadline: Date,
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);
