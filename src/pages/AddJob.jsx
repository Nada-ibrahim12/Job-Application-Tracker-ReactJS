import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useJobs } from "../context/JobContext";
import { v4 as uuidv4 } from "uuid";

const AddJob = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const { jobs, addJob, updateJob } = useJobs();

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!job.title || !job.company || !job.dateApplied || !job.location) {
      return;
    }

    if (isEditMode) {
      updateJob(job);
      alert("Job updated successfully!");
    } else {
      addJob({ ...job, id: uuidv4() });
      alert("Job added successfully!");
    }

    navigate("/");
  };

  const { title, company, status, dateApplied, location, notes } = job;

  return (
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
              className="p-3 border border-gray-300 rounded-md w-full"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Company</label>
            <input
              type="text"
              name="company"
              value={company}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
              required
            />
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
            <label className="block text-gray-700 mb-1">Application Date</label>
            <input
              type="date"
              name="dateApplied"
              value={dateApplied}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={location}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            />
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
  );
};

export default AddJob;
