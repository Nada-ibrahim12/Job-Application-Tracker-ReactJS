import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useJobs } from "../context/JobContext";
import { v4 as uuidv4 } from "uuid";
import { motion, AnimatePresence } from "framer-motion";

const AddJob = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const { jobs, addJob, updateJob } = useJobs();
  const [errors, setErrors] = useState({});

  const [job, setJob] = useState({
    title: "",
    company: "",
    status: "applied",
    dateApplied: "",
    location: "",
    notes: "",
  });

  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (jobId) {
      const jobToEdit = jobs.find((job) => job.id.toString() === jobId);
      if (jobToEdit) {
        setJob(jobToEdit);
        setIsEditMode(true);
      }
    }
  }, [jobId, jobs]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
  };

  const validationForm = () => {
    const newErrors = {};
    if (!job.title) newErrors.title = "Job title is required";
    if (!job.company) newErrors.company = "Company name is required";
    if (!job.dateApplied)
      newErrors.dateApplied = "Application date is required";
    if (!job.location) newErrors.location = "Location is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validationForm()) {
      return;
    }

    if (isEditMode) {
      updateJob(job);
      navigate("/", {
        state: {
          message: "Job updated successfully!",
          type: "success",
        },
      });
    } else {
      addJob({ ...job, id: uuidv4() });
      navigate("/", {
        state: {
          message: "Job added successfully!",
          type: "success",
        },
      });
    }
  };

  const handleBlur = (e) => {
  const { name, value } = e.target;
  if (!value.trim()) {
    setErrors((prev) => ({ ...prev, [name]: `${name} is required` }));
  } else {
    setErrors((prev) => {
      const updated = { ...prev };
      delete updated[name];
      return updated;
    });
  }
};

  const { title, company, status, dateApplied, location, notes } = job;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}>
        <div className="container mx-auto p-6 ">
          <h1 className="text-3xl font-bold text-center">
            {isEditMode ? "Edit Job" : "Add Job"}
          </h1>

          <div className="container mx-auto shadow-xl shadow-cyan-700 rounded-lg p-6 mt-5 max-w-5xl">
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block text-gray-700 mb-1">Job Title</label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={handleChange}
                  className={`p-3 border border-gray-300 rounded-md w-full ${
                    errors.title ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.title && (
                  <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Company</label>
                <input
                  type="text"
                  name="company"
                  value={company}
                  onChange={handleChange}
                  className={`p-3 border border-gray-300 rounded-md w-full ${
                    errors.company ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.company && (
                  <p className="text-red-500 text-sm mt-1">{errors.company}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Status</label>
                <select
                  name="status"
                  value={status}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-md w-full"
                >
                  <option value="applied">Applied</option>
                  <option value="interview">Interview</option>
                  <option value="offer">Offer</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-1">
                  Application Date
                </label>
                <input
                  type="date"
                  name="dateApplied"
                  value={dateApplied}
                  onChange={handleChange}
                  className={`p-3 border border-gray-300 rounded-md w-full ${
                    errors.dateApplied ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.dateApplied && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.dateApplied}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  value={location}
                  onChange={handleChange}
                  className={`p-3 border border-gray-300 rounded-md w-full ${
                    errors.location ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.location && (
                  <p className="text-red-500 text-sm mt-1">{errors.location}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-1">
                  <i className="fa-regular fa-note-sticky"></i> Notes
                </label>
                <textarea
                  name="notes"
                  value={notes}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-md w-full"
                  rows={3}
                ></textarea>
              </div>

              <div className="md:col-span-2 flex justify-center">
                <button
                  type="submit"
                  className="bg-cyan-700 text-white text-lg px-10 py-3 rounded-md hover:bg-cyan-900 transition duration-200 w-full md:w-1/2"
                >
                  {isEditMode ? "Update Job" : "Add Job"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AddJob;
