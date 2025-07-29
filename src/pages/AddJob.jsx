import React, { Component } from "react";
import { jobs } from "../utils/dummyData";
import { Navigate } from "react-router-dom";
import { withRouter } from "../utils/withRouter";

class AddJob extends Component {
  state = {
    redirect: false,
    job: {
      title: "",
      company: "",
      status: "applied",
      dateApplied: "",
      location: "",
      notes: "",
    },
    isEditMode: false,
  };

  componentDidMount() {
    const { jobId } = this.props.params;

    if (jobId) {
    const jobToEdit = jobs.find((job) => job.id.toString() === jobId);
      if (jobToEdit) {
        this.setState({
          job: jobToEdit,
          isEditMode: true,
        });
      }
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      job: {
        ...prevState.job,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { jobId } = this.props.params;

    if (this.state.isEditMode) {
      const index = jobs.findIndex((job) => job.id.toString() === jobId);
      if (index !== -1) {
        jobs[index] = this.state.job;
        alert("Job updated successfully!");
      } else {
        alert("Job not found for update!");
      }
    } else {
      const newJob = { ...this.state.job, id: Date.now() };
      jobs.push(newJob);
      alert("Job added successfully!");
    }

    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    }

    const { title, company, status, dateApplied, location, notes } =
      this.state.job;

    return (
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold text-center">
          {this.state.isEditMode ? "Edit Job" : "Add Job"}
        </h1>

        <div className="container mx-auto shadow-xl shadow-cyan-700 rounded-lg p-6 mt-5 max-w-5xl">
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={this.handleSubmit}
          >
            <div>
              <label className="block text-gray-700 mb-1">Job Title</label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={this.handleChange}
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
                onChange={this.handleChange}
                className="p-3 border border-gray-300 rounded-md w-full"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Status</label>
              <select
                name="status"
                value={status}
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
                className="p-3 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-1">Notes</label>
              <textarea
                name="notes"
                value={notes}
                onChange={this.handleChange}
                className="p-3 border border-gray-300 rounded-md w-full"
                rows={3}
              ></textarea>
            </div>

            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-cyan-700 text-white text-lg px-10 py-3 rounded-md hover:bg-cyan-900 transition duration-200 w-full md:w-1/2"
              >
                {this.state.isEditMode ? "Update Job" : "Add Job"}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(AddJob);