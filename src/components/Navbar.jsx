import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="container max-w-none flex justify-between items-center p-4 shadow-lg bg-white">
        <h1 className="text-4xl font-bold mb-4 text-cyan-700">Job Tracker</h1>

        <ul className="flex items-center space-x-5 font-bold  text-cyan-700 text-xl">
          <li>
            <Link to="/" className="hover:underline isactive:underline">
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/add"
              className="bg-cyan-700 text-white flex items-center space-x-2 justify-center px-4 py-2 rounded hover:bg-cyan-900 transition-colors duration-200"
            >
              <i className="fas fa-plus"></i>
              <p>Add Job</p>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
