import React, { Component } from "react";
import { Link } from "react-router-dom";

export class JobCard extends Component {
  render() {
    return (
      <div className="border p-4 rounded-md shadow-md flex flex-row justify-between bg-white hover:shadow-lg transition-shadow duration-200">
        <div>
          <Link>
            <h2 className="text-xl font-bold">{this.props.title}</h2>
          </Link>
          <p className="text-gray-600">{this.props.company}</p>
          <p className="text-gray-500">{this.props.location}</p>
          <p className="mt-2">{this.props.description}</p>
        </div>
        <div className="mt-4 flex flex-col text-center">
          <Link
            className={`px-3 py-1 rounded-full bg-slate-300 font-bold ${
              this.props.status === "applied"
                ? "text-cyan-700"
                : this.props.status === "interview"
                ? "text-yellow-600"
                : this.props.status === "offer"
                ? "text-green-700"
                : "text-red-500"
            }`}
          >
            {this.props.status.charAt(0).toUpperCase() +
              this.props.status.slice(1)}
          </Link>
          <button className="mt-2 px-4 py-2 bg-cyan-700 text-white rounded hover:bg-cyan-900 transition-colors duration-200">
            View Details
          </button>
        </div>
      </div>
    );
  }
}

export default JobCard;
