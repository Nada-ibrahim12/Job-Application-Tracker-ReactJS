import React, { Component } from "react";

export class NotFound extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center text-2xl mt-10">Page Not Found</h2>
        <p className="text-center text-gray-500 mt-2">
          The page you are looking for does not exist.
        </p>
      </div>
    );
  }
}

export default NotFound;
