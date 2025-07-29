import React, { Component } from "react";
import { jobs } from "../utils/dummyData";
import { useNavigate, useParams, Navigate } from "react-router-dom";

const JobDetailsWrapper = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  return <JobDetails jobId={jobId} navigate={navigate} />;
};

export default JobDetailsWrapper;
export class JobDetails extends Component {
  state = {
    redirect: false,
    showModal: false,
  };
  handleDelete = () => {
    this.setState({ showModal: true });
  };
  confirmDelete = () => {
    const { jobId } = this.props;
    const jobIndex = jobs.findIndex((job) => job.id === parseInt(jobId));

    if (jobIndex !== -1) {
      jobs.splice(jobIndex, 1);
      alert("Job deleted successfully!");
      this.setState({ redirect: true, showModal: false });
    } else {
      alert("Job not found!");
      this.setState({ showModal: false });
    }
  };

  cancelDelete = () => {
    this.setState({ showModal: false });
  };
  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    }
    const job = jobs.find((job) => job.id === parseInt(this.props.jobId));
    return (
      <>
        {this.state.showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-5 t ">
            <div className="bg-white p-6 rounded-md shadow-md w-96">
              <h3 className="text-lg font-semibold mb-4">Confirm Deletion</h3>
              <p className="mb-6">Are you sure you want to delete this job?</p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={this.cancelDelete}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={this.confirmDelete}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
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
                className={`mt-2 sm:mt-0 px-4 py-1 rounded-full font-semibold bg-opacity-30 ${
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
                <span className="font-semibold">Company: </span>
                {job?.company || "Company Name Here"}
              </p>
              <p>
                <span className="font-semibold">Date Applied: </span>
                {job?.dateApplied || "Date Here"}
              </p>
              <p>
                <span className="font-semibold">Location: </span>
                {job?.location || "Location Here"}
              </p>
              {job?.notes && (
                <p>
                  <span className="font-semibold">Notes: </span>
                  {job.notes}
                </p>
              )}
            </div>

            <div className="flex justify-center gap-4 pt-6">
              <button
                className="bg-cyan-700 hover:bg-cyan-800 text-white px-6 py-2 rounded-lg transition duration-200"
                onClick={() => this.props.navigate(`/edit/${job.id}`)}
              >
                Edit Job
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition duration-200"
                onClick={this.handleDelete}
              >
                Delete Job
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
