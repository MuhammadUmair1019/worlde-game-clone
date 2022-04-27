import React, { useEffect } from "react";
import "./index.css";

const keyboardKeys = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Del",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "Enter"
];

function KeyBoardLayout({ handleSelect, handleKeyup, guesses }) {
  
  useEffect(() => {
    window.addEventListener("keydown", handleKeyup);

    return () => window.removeEventListener("keydown", handleKeyup);
  }, [handleKeyup]);

  return (
    <div className="keyboard-container">
      <div className="keyboard-wrapper">
        {keyboardKeys.map((key) => (
          <button
            className="keyboard-button"
            id={
              guesses.almost.includes(key.toLowerCase())
                ? "almost"
                : guesses.wrong.includes(key.toLowerCase())
                ? "error"
                : ""
            }
            key={key}
            onClick={() => handleSelect(key)}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
}

export default KeyBoardLayout;
