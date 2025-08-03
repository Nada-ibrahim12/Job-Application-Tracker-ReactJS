import React, { useState } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { useJobs } from "../context/JobContext";
import { motion, AnimatePresence } from "framer-motion";

const JobDetails = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const { jobs, deleteJob } = useJobs();

  const [showModal, setShowModal] = useState(false);

  const job = jobs.find((job) => job.id.toString() === jobId);

  const handleDelete = () => {
    setShowModal(true);
  };

  const confirmDelete = () => {
    if (job) {
      deleteJob(job.id);
      navigate("/", {
        state: {
          message: "Job deleted successfully!",
          type: "success",
        },
      });
    } else {
      navigate("/", {
        state: {
          message: "Job not found!",
          type: "error",
        },
      });
    }
    setShowModal(false);
  };

  const cancelDelete = () => {
    setShowModal(false);
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      borderRadius: "50%",
      transition: { duration: 0.3 },
    },
    visible: {
      opacity: 1,
      scale: 1,
      borderRadius: "16px",
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      borderRadius: "50%",
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="bg-white p-6 rounded-md shadow-md w-96"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h3 className="text-lg font-semibold mb-4">Confirm Deletion</h3>
              <p className="mb-6">Are you sure you want to delete this job?</p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={cancelDelete}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Confirm
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.7 }}
        className="py-12 px-4"
      >
        <h1 className="text-3xl font-bold text-center mb-10 text-cyan-800">
          Job Details
        </h1>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg shadow-cyan-700/70 p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 rounded-lg shadow-inner shadow-cyan-700/80">
            <h2 className="text-2xl font-semibold">{job?.title || "N/A"}</h2>
            <span
              className={`mt-2 sm:mt-0 px-4 py-1 rounded-full font-semibold bg-opacity-30 ${
                job
                  ? job.status === "applied"
                    ? "bg-cyan-700 text-cyan-700"
                    : job.status === "interview"
                    ? "bg-yellow-500 text-yellow-700"
                    : job.status === "offer"
                    ? "bg-green-600 text-green-100"
                    : "bg-red-500 text-red-100"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              {job
                ? job.status.charAt(0).toUpperCase() + job.status.slice(1)
                : "Status"}
            </span>
          </div>

          <div className="space-y-4 text-gray-800">
            <p>
              <strong>Company: </strong>
              {job?.company || "N/A"}
            </p>
            <p>
              <strong>Date Applied: </strong>
              {job?.dateApplied || "N/A"}
            </p>
            <p>
              <strong>Location: </strong>
              {job?.location || "N/A"}
            </p>
            {job?.notes && (
              <p>
                <strong>Notes: </strong>
                {job.notes}
              </p>
            )}
          </div>

          <div className="flex justify-center gap-4 pt-6">
            <button
              className="bg-cyan-700 hover:bg-cyan-800 text-white px-6 py-2 rounded-lg transition duration-200"
              onClick={() => navigate(`/edit/${job.id}`)}
            >
              Edit Job
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition duration-200"
              onClick={handleDelete}
            >
              Delete Job
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default JobDetails;
