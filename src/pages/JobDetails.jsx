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
    const job = jobs.find(job => job.id == this.props.jobId);
    console.log(job ? job : "No job found with this ID");
    return (
      <div>
        <h1 className="text-3xl font-bold m-8 text-center">Job Details</h1>
        <div className="container mx-auto shadow-xl shadow-cyan-700 rounded-lg p-6 w-1/2">
          <div className="mb-6 flex flex-row items-center justify-between">
            <h2 className="text-2xl font-bold mb-2">
              Job Title: {job ? job.title : "Job Title Here"}
            </h2>
            <p
              className={`px-3 py-1 rounded-full bg-cyan-700 bg-opacity-50 font-bold ${
                job
                  ? job.status === "applied"
                    ? "text-cyan-700"
                    : job.status === "interview"
                    ? "text-yellow-600"
                    : job.status === "offer"
                    ? "text-green-700"
                    : "text-red-500"
                  : ""
              }`}
            >
              {job
                ? job.status.charAt(0).toUpperCase() + job.status.slice(1)
                : "Status Here"}
            </p>
          </div>
          <p className="text-gray-800 mb-4">
            <span className="font-bold">Company:</span> {job ? job.company : "Company Name Here"}
          </p>
          <p className="text-gray-800 mb-4">
            <span className="font-bold">Date Applied:</span> {job ? job.dateApplied : "Date Here"}
          </p>
          <p className="text-gray-800 mb-4">
            <span className="font-bold">Location:</span> {job ? job.location : "Location Here"}
          </p>
          <p className="text-gray-800 mb-4">
            <span className="font-bold">Notes:</span> {job ? job.notes : "Job Notes Here"}
          </p>
          <div className="btns flex justify-center space-x-4 mt-6">
            <button className="bg-cyan-700 text-white px-4 py-2 rounded hover:bg-cyan-900 transition-colors duration-200">
              Edit Job
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200 ml-4">
              Delete Job
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// export default JobDetails
