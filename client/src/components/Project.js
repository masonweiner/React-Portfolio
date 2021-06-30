import React from "react";
import ford from "./assets/ford.jpg";
const path = require("path");

function Project() {
  return (
    <div>
      <div className="card">
        <div className="card-header">Ford Finder</div>
        <img src={ford} className="card-img-top" alt="Ford Finder App"></img>
      </div>
    </div>
  );
}

export default Project;
