import React from "react";
import "./index.css";

function Navbar() {
  const title = "WORDLEGAME".split("");

  return (
    <div className="navbar">
      <div className="navbar-content">
        {title.map((word, index) => (
          <span key={index}> {word} </span>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
