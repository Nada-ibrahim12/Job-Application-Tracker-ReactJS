import React, { Component, useEffect, useState } from "react";
import CountCard from "../components/CountCard";
import JobCard from "../components/JobCard";
import { useJobs } from "../context/JobContext";

export default function Dashboard() {
  const { jobs, setJobs } = useJobs();
  const fileInputRef = React.useRef(null);

  const [importMessage, setImportMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  useEffect(() => {
    setFilteredJobs(jobs);
  }, [jobs]);

  const handleImport = (e) => {
    const file = e.target.files[0];
    if (!file || file.type !== "application/json") return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedJobs = JSON.parse(event.target.result);
        if (!Array.isArray(importedJobs)) {
          setImportMessage(
            "❌ Invalid JSON format. Please upload a valid JSON array."
          );
          setMessageType("error");
          return;
        }

        setJobs((prevJobs) => {
          const existingIds = new Set(prevJobs.map((job) => job.id));
          const newJobs = [];
          const skippedJobs = [];

          for (const job of importedJobs) {
            if (!job.id) {
              skippedJobs.push({ id: "Unknown", reason: "Missing job ID" });
            } else if (existingIds.has(job.id)) {
              skippedJobs.push({ id: job.id, reason: "ID already exists" });
            } else {
              newJobs.push(job);
            }
          }

          let message = "";

          if (newJobs.length > 0) {
            message += `✅ ${newJobs.length} job(s) imported successfully.\n`;
          }

          if (skippedJobs.length > 0) {
            message += `⚠️ ${skippedJobs.length} job(s) skipped:\n`;
            message += skippedJobs
              .map((j) => `- ID "${j.id}": ${j.reason}`)
              .join("\n");
          }

          setImportMessage(message);
          setMessageType("success");

          return [...prevJobs, ...newJobs];
        });
      } catch (err) {
        setImportMessage("❌ Error reading JSON: " + err.message);
        setMessageType("error");
      }
    };
    reader.readAsText(file);
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(jobs, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "jobs.json";
    document.body.appendChild(a);

    a.click();
    URL.revokeObjectURL(url);

    document.body.removeChild(a);
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query)
    );

    setFilteredJobs(filtered);
  };

  const jobStats = {
    all: jobs.length,
    applied: jobs.filter((job) => job.status === "applied").length,
    interview: jobs.filter((job) => job.status === "interview").length,
    offer: jobs.filter((job) => job.status === "offer").length,
    rejected: jobs.filter((job) => job.status === "rejected").length,
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-center mt-10">Job Applications</h1>
      <p className="text-center mt-4 text-gray-600">
        Track and manage your job applications
      </p>
      <div className="flex flex-wrap justify-center gap-9 mt-8">
        {Object.entries(jobStats).map(([key, value]) => (
          <CountCard
            key={key}
            title={key.charAt(0).toUpperCase() + key.slice(1)}
            count={value}
          />
        ))}
      </div>
      <div
        className="m-3 mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4
             bg-cyan-700 p-4 bg-opacity-10 rounded-lg shadow-md shadow-cyan-700"
      >
        <div className="relative w-full md:w-2/3">
          <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          <input
            type="search"
            placeholder="Search companies or job titles..."
            className="w-full pl-12 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent shadow-sm"
            aria-label="Search"
            value={searchQuery}
            onChange={(e) => {
              e.preventDefault();
              handleSearch(e);
            }}
          />
        </div>

        <div className="relative lg:w-1/3 md:w-1/2">
          <i className="fa-solid fa-filter absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
          <select
            className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent shadow-sm"
            aria-label="Filter by status"
            onChange={(e) => {
              const status = e.target.value;
              if (status === "all") {
                setFilteredJobs(jobs);
              } else {
                setFilteredJobs(jobs.filter((job) => job.status === status));
              }
            }}
          >
            <option value="all">All Status</option>
            <option value="applied">Applied</option>
            <option value="interview">Interview</option>
            <option value="offer">Offer</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      <div className="btns buttons flex justify-center gap-4 mt-6">
        <input
          type="file"
          accept=".json"
          ref={fileInputRef}
          onChange={handleImport}
          style={{ display: "none" }}
        />

        <button
          onClick={() => fileInputRef.current.click()}
          className="mt-4 px-6 py-3 bg-cyan-700 text-white rounded-lg hover:bg-cyan-800 transition-colors duration-200 space-x-2 flex items-center"
        >
          <i className="fa-solid fa-upload"></i>
          <span>Import Jobs</span>
        </button>

        <button
          onClick={handleExport}
          className="mt-4 px-6 py-3 bg-cyan-700 text-white rounded-lg hover:bg-cyan-800 transition-colors duration-200 space-x-2 flex items-center"
        >
          <i className="fa-solid fa-download"></i>
          <span>Export Jobs</span>
        </button>
      </div>
      {importMessage && (
        <div
          style={{
            whiteSpace: "pre-wrap",
            color: messageType === "error" ? "red" : "green",
            marginTop: "10px",
            textAlign: "center",
          }}
        >
          {importMessage}
        </div>
      )}

      {jobs.length === 0 && (
        <div className="text-center mt-10 text-gray-500 items-center">
          <span>No jobs found. Start adding your job applications</span>{" "}
          <i className="fa-solid fa-exclamation"></i>
        </div>
      )}

      <div className="jobs grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-7 gap-y-12 mt-8 m-4 mb-10">
        {filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            title={job.title}
            company={job.company}
            location={job.location}
            notes={job.notes}
            status={job.status}
            dateApplied={job.dateApplied}
            id={job.id}
          />
        ))}
      </div>
    </div>
  );
}
