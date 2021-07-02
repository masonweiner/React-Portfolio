import React from "react";
import resume from "./assets/resume.pdf";

const btnStyle = {
  backgroundColor: "#0390fc",
  padding: "15px",
  fontSize: "30px",
  color: "#3B2C35",
  borderRadius: "25px",
  border: "5px solid #56E39F",
};

function Resume() {
  return (
    <div>
      <a href={resume} download="mason-weiner-resume">
        <button style={btnStyle}>Download my resume</button>
      </a>
    </div>
  );
}

export default Resume;
