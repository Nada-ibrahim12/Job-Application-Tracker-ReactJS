import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  render() {
    const { isMenuOpen } = this.state;

    return (
      <nav className="bg-white shadow-lg">
        <div className="container max-w-none mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-cyan-700">Job Tracker</h1>

          <button
            className="md:hidden text-cyan-700 text-2xl focus:outline-none"
            onClick={this.toggleMenu}
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <ul className="hidden md:flex items-center space-x-6 text-cyan-700 font-bold text-lg">
            <li>
              <Link to="/" className="hover:underline">
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/add"
                className="bg-cyan-700 text-white flex items-center space-x-2 px-4 py-2 rounded hover:bg-cyan-900 transition-colors duration-200"
              >
                <i className="fas fa-plus"></i>
                <span>Add Job</span>
              </Link>
            </li>
          </ul>
        </div>

        {isMenuOpen && (
          <div className="md:hidden px-4 pb-4">
            <ul className="flex flex-col space-y-4 text-cyan-700 font-bold text-lg">
              <li>
                <Link
                  to="/"
                  onClick={this.toggleMenu}
                  className="hover:underline"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/add"
                  onClick={this.toggleMenu}
                  className="bg-cyan-700 text-white flex items-center space-x-2 px-4 py-2 rounded hover:bg-cyan-900 transition-colors duration-200"
                >
                  <i className="fas fa-plus"></i>
                  <span>Add Job</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    );
  }
}
