import React from "react";
import profile from "./assets/profile.jpg";

const aqua = { color: "#56E39F" };
const darkGreen = { color: "#5B6C5D" };
const ocean = { color: "#59C9A5" };
const coffee = { color: "#3B2C35" };

const cardStyle = {
  margin: "40px",
  border: "10px solid #59C9A5",
  maxWidth: "300px",
  backgroundColor: "#3B2C35",
  color: "#59C9A5",
};

const aboutStyle = {
  backgroundColor: "#3B2C35",
  color: "#59C9A5",
};

const imgStyle = {
  maxWidth: "300px",
  maxHeight: "500px",
};

function AboutMe() {
  return (
    <div>
      <div className="card" style={cardStyle}>
        <h3 className="card-header" style={aboutStyle}>
          About Me
        </h3>
        <img
          src={profile}
          className="card-img-top"
          alt="Picture of me"
          style={imgStyle}
        ></img>
        <p className="card-body">
          This is an about me section. This is an about me section. This is an
          about me section.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
