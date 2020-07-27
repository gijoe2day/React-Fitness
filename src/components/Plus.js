import React from "react";
import { Link } from "react-router-dom";

const Plus = (props) => {
  return (
    <div className="container">
      <div className="Fitness-User-Info">
        <Link to="./exercise/new">
          <h1>Click here to go to other page</h1>
        </Link>
      </div>
    </div>
  );
};

export default Plus;
