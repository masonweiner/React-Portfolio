import React from "react";
import resume from "./assets/resume.pdf";

function Resume() {
  return (
    <div>
      <a href={resume} download="mason-weiner-resume">
        Download my resume
      </a>
    </div>
  );
}

export default Resume;
