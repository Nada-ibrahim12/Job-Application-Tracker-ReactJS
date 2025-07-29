import React, { Component } from 'react'
import { jobs } from '../utils/dummyData';
import { useParams } from 'react-router-dom';

const JobDetailsWrapper = () => {
  const { jobId } = useParams();
  return <JobDetails jobId={jobId} />;
};

export default JobDetailsWrapper;
export class JobDetails extends Component {
  render() {
    const job = jobs.find((job) => job.id == this.props.jobId);
    return (
      <div className="py-12 px-4">
        <h1 className="text-3xl font-bold text-center mb-10 text-cyan-800">
          Job Details
        </h1>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg shadow-cyan-700/70 p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 rounded-lg shadow-inner shadow-cyan-700/80">
            <h2 className="text-2xl font-semibold">
              {job?.title || "Job Title Here"}
            </h2>
            <span
              className={`mt-2 sm:mt-0 px-4 py-1 rounded-full font-semibold bg-opacity-30
              ${
                job
                  ? job.status === "applied"
                    ? "bg-cyan-700 text-cyan-700"
                    : job.status === "interview"
                    ? "bg-yellow-500 text-yellow-700"
                    : job.status === "offer"
                    ? "bg-green-600 text-green-100"
                    : "bg-red-500 text-red-100"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              {job
                ? job.status.charAt(0).toUpperCase() + job.status.slice(1)
                : "Status Here"}
            </span>
          </div>

          <div className="space-y-4 text-gray-800">
            <p>
              <span className="font-semibold">Company:</span>{" "}
              {job?.company || "Company Name Here"}
            </p>
            <p>
              <span className="font-semibold">Date Applied:</span>{" "}
              {job?.dateApplied || "Date Here"}
            </p>
            <p>
              <span className="font-semibold">Location:</span>{" "}
              {job?.location || "Location Here"}
            </p>
            <p>
              <span className="font-semibold">Notes:</span>{" "}
              {job?.notes || "Job Notes Here"}
            </p>
          </div>

          <div className="flex justify-center gap-4 pt-6">
            <button className="bg-cyan-700 hover:bg-cyan-800 text-white px-6 py-2 rounded-lg transition duration-200">
              Edit Job
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition duration-200">
              Delete Job
            </button>
          </div>
        </div>
      </div>
    );
  }
}
