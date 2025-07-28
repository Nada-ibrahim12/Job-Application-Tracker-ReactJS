import { createContext, useState, useEffect } from "react";

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState(() => {
    const saved = localStorage.getItem("jobs");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  return (
    <JobContext.Provider value={{ jobs, setJobs }}>
      {children}
    </JobContext.Provider>
  );
};
