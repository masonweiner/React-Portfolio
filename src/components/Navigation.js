import React, { useState } from "react";

const aqua = { color: "#56E39F" };
const darkGreen = { color: "#5B6C5D" };
const ocean = { color: "#59C9A5" };
const coffee = { color: "#3B2C35" };

const navStyle = {
  display: "flex",
  color: aqua,
  padding: "20px",
  margin: "20px",
  flexDirection: "reverse-row",
  flexWrap: "wrap",
  listStyleType: "none",
};

const btnStyle = {
  backgroundColor: "#56E39F",
  padding: "15px",
  fontSize: "30px",
  color: "#3B2C35",
  borderRadius: "25px",
  border: "5px solid #0390fc",
  width: "200px",
};

function Navigation(props) {
  const tabs = ["About Me", "Portfolio", "Contact", "Resume"];
  return (
    <>
      <ul style={navStyle}>
        {tabs.map((tab) => (
          <li key={tab}>
            <a
              href={"#" + tab.toLowerCase()}
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? "nav-link active" : "nav-link"
              }
            >
              <button style={btnStyle}>{tab}</button>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Navigation;
