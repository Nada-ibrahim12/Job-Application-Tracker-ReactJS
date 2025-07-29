import React, { Component } from "react";
import { Link } from "react-router-dom";

export class JobCard extends Component {
  render() {
    console.log('JobCard props:', this.props);
    return (
      <div className="border p-6 rounded-md shadow-md flex flex-row justify-between bg-white hover:shadow-lg transition-shadow duration-200">
        <div>
          <h2 className="text-xl font-bold">{this.props.title}</h2>
          <p className="text-gray-600">{this.props.company}</p>
          <p className="text-gray-500">{this.props.location}</p>
          <p className="mt-2 text-gray-700">Applied Date: {this.props.dateApplied}</p>
          <p className="mt-2">Note: {this.props.notes}</p>
        </div>
        <div className="mt-4 flex flex-col text-center">
          <p
            className={`px-3 py-1 rounded-full bg-cyan-700 bg-opacity-40 font-bold ${
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
          </p>
          <Link
            className="mt-2 px-4 py-2 bg-cyan-700 text-white rounded hover:bg-cyan-900 transition-colors duration-200"
            to={`/job/${this.props.id}`}
            aria-label={`View details for ${this.props.title}`}
            onClick={() =>
              console.log(`Viewing details for job: ${this.props.id}`)
            }
          >
            View Details
          </Link>
        </div>
      </div>
    );
  }
}

export default JobCard;
