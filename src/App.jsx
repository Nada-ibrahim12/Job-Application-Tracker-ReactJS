// App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddJob from "./pages/AddJob";
import Navbar from "./components/Navbar";
import JobDetailsWrapper from "./pages/JobDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="container max-w-none">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddJob />} />
          <Route path="/edit/:jobId" element={<AddJob />} />
          <Route path="/job/:jobId" element={<JobDetailsWrapper />} />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;