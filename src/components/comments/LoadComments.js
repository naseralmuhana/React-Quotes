import React from "react";
import { Link } from "react-router-dom";

const LoadComments = () => {
  return (
    <div className="centered">
      <Link to="comments" className="btn--flat">
        Load Comments
      </Link>
    </div>
  );
};

export default LoadComments;
