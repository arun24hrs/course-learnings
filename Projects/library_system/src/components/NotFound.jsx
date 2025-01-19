// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h2>Page Not Found</h2>
      <Link to="/">Go Back to Home</Link>
    </div>
  );
}

export default NotFound;