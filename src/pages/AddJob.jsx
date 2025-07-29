import React, { Component } from "react";
import { jobs } from "../utils/dummyData";


export class AddJob extends Component {
  render() {
    return (
      <div>
        <h1 className="text-2xl font-bold text-center mt-10">Add Job</h1>
        <div className="container mx-auto shadow-xl shadow-cyan-700 rounded-lg p-10 mt-10">
          <form className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-x-10 gap-y-6">
            <div className="mb-4">
              <label className="block text-gray-700">Job Title</label>
              <input
                type="text"
                className="p-3 border border-gray-300 rounded-md w-full"
                placeholder="Enter job title"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Company</label>
              <input
                type="text"
                className="p-3 border border-gray-300 rounded-md w-full"
                placeholder="Enter company name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Status</label>
              <select className="p-3 border border-gray-300 rounded-md w-full">
                <option value="applied">Applied</option>
                <option value="interview">Interview</option>
                <option value="offer">Offer</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Application Date</label>
              <input
                type="date"
                className="p-3 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Location</label>
              <input
                type="text"
                className="p-3 border border-gray-300 rounded-md w-full"
                placeholder="Enter job location"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Notes</label>
              <textarea
                className="p-3 border border-gray-300 rounded-md w-full"
                placeholder="Enter job notes"
              ></textarea>
            </div>
            <div className="col-span-2 flex justify-center">
              <button className="bg-cyan-700 text-white text-xl px-10 py-4 rounded-md w-1/2 hover:bg-cyan-900 transition-colors duration-200"
                type="submit"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const newJob = {
                    id: jobs.length + 1,
                    title: formData.get("title"),
                    company: formData.get("company"),
                    location: formData.get("location"),
                    status: formData.get("status"),
                    dateApplied: formData.get("dateApplied"),
                    notes: formData.get("notes"),
                  };
                  console.log(newJob);
                }}>
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddJob;
