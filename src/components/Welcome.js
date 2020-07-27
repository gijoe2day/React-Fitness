import React from "react";
import "../styles/Card.css";

const Welcome = ({ username }) => {
  return (
    <div className="container">
      <div className="Fitness-User-Info">
        <h1>hello {username}</h1>
        <p>Paragraph paragraph</p>
      </div>
    </div>
  );
};

export default Welcome;
