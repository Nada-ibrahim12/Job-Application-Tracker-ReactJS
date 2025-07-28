import React, { Component } from "react";
import CountCard from "../components/CountCard";
import JobCard from "../components/JobCard";

export default function Dashboard() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-center mt-10">Job Applications</h1>
      <p className="text-center mt-4 text-gray-600">
        Track and manage your job applications
      </p>
      <div className="grid grid-cols-5 md:grid-cols-5 lg:grid-cols-6 gap-4 mt-8 text-center">
        {[...Array(5)].map((_, i) => (
          <CountCard key={i} title="Sample Title" count={5} />
        ))}
      </div>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <input
          type="search"
          placeholder="Search companies or job titles..."
          className="p-3 border border-gray-300 rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          aria-label="Search"
          // onSubmit={(e) => e.preventDefault()}
        />
        <select className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
          <option value="all">All Status</option>
          <option value="applied">Applied</option>
          <option value="interview">Interview</option>
          <option value="offer">Offer</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>
      <div className="jobs grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {[...Array(5)].map((_, i) => (
          <JobCard
            key={i}
            title="Sample Job Title"
            company="Sample Company"
            location="Remote"
            description="This is a sample job description."
            status="applied"
          />
        ))}
      </div>
      </div>
  );
}
