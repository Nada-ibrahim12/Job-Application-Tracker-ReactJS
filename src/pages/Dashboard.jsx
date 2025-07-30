import React, { Component, useEffect, useState } from "react";
import CountCard from "../components/CountCard";
import JobCard from "../components/JobCard";
import { useJobs } from "../context/JobContext";

export default function Dashboard() {
  const { jobs, setJobs } = useJobs();
  const fileInputRef = React.useRef(null);

  const [importMessage, setImportMessage] = useState("");
  const [messageType, setMessageType] = useState("");

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
      <div className="m-3 mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1">
          <input
            type="search"
            placeholder="Search companies or job titles..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent shadow-sm"
            aria-label="Search"
          />
        </div>
        <div className="w-full md:w-1/3">
          <select
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent shadow-sm"
            aria-label="Filter by status"
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
          className="mt-4 px-6 py-3 bg-cyan-700 text-white rounded-lg hover:bg-cyan-800 transition-colors duration-200"
        >
          Import Jobs
        </button>

        <button
          onClick={handleExport}
          className="mt-4 px-6 py-3 bg-cyan-700 text-white rounded-lg hover:bg-cyan-800 transition-colors duration-200"
        >
          Export Jobs
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
        <div className="text-center mt-10 text-gray-500">
          No jobs found. Start adding your job applications!
        </div>
      )}

      <div className="jobs grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-7 gap-y-12 mt-8 m-4 mb-10">
        {jobs.map((job) => (
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
