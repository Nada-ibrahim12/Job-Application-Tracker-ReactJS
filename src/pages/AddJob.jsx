import React, { Component } from "react";
import { jobs } from "../utils/dummyData";

export class AddJob extends Component {
  render() {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold text-center">Add Job</h1>
        <div className="container mx-auto shadow-xl shadow-cyan-700 rounded-lg p-6 mt-5 max-w-5xl">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-1">Job Title</label>
              <input
                type="text"
                name="title"
                className="p-3 border border-gray-300 rounded-md w-full"
                placeholder="Enter job title"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Company</label>
              <input
                type="text"
                name="company"
                className="p-3 border border-gray-300 rounded-md w-full"
                placeholder="Enter company name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Status</label>
              <select
                name="status"
                className="p-3 border border-gray-300 rounded-md w-full"
                required
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
                className="p-3 border border-gray-300 rounded-md w-full"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Location</label>
              <input
                type="text"
                name="location"
                className="p-3 border border-gray-300 rounded-md w-full"
                placeholder="Enter job location"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-1">Notes</label>
              <textarea
                name="notes"
                className="p-3 border border-gray-300 rounded-md w-full"
                placeholder="Enter job notes"
                rows={3}
              ></textarea>
            </div>

            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-cyan-700 text-white text-lg px-10 py-3 rounded-md hover:bg-cyan-900 transition duration-200 w-full md:w-1/2"
              >
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
