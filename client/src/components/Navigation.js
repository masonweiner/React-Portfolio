import React, { useState } from "react";

function Navigation(props) {
  const tabs = ["About Me", "Portfolio", "Contact", "Resume"];
  return (
    <>
      <ul>
        {tabs.map((tab) => (
          <li key={tab}>
            <a
              href={"#" + tab.toLowerCase()}
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? "nav-link active" : "nav-link"
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Navigation;
