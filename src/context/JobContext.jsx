import { createContext, useContext, useEffect, useState } from "react";

const JobContext = createContext();

export function JobProvider({ children }) {
  const [jobs, setJobs] = useState(() => {
    const saved = localStorage.getItem("jobs");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (job) => setJobs([...jobs, job]);
  const deleteJob = (id) => setJobs(jobs.filter((job) => job.id !== id));
  const updateJob = (updatedJob) =>
    setJobs(jobs.map((job) => (job.id === updatedJob.id ? updatedJob : job)));

  return (
    <JobContext.Provider value={{ jobs, addJob, deleteJob, updateJob }}>
      {children}
    </JobContext.Provider>
  );
}

export const useJobs = () => useContext(JobContext);
