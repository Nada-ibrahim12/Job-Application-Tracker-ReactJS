// App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddJob from "./pages/AddJob";
// import JobDetails from "./pages/JobDetails";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="container max-w-none">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddJob />} />
          {/* <Route path="/job/:id" element={<JobDetails />} /> */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;