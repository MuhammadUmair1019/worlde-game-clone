import React from "react";
import BoardLetter from "../BoardLetter";
import "./index.css";

function BoardLayout() {
  return (
    <div className="board-wrapper">
      {[0, 1, 2, 3, 4, 5].map((value, index) => (
        <div className="board-content" key={value}>
          <BoardLetter letterPosition={index} currentAttemptValue={index} />
          <BoardLetter letterPosition={index + 1} currentAttemptValue={index} />
          <BoardLetter letterPosition={index + 2} currentAttemptValue={index} />
          <BoardLetter letterPosition={index + 3} currentAttemptValue={index} />
          <BoardLetter letterPosition={index + 4} currentAttemptValue={index} />
        </div>
      ))}
    </div>
  );
}

export default BoardLayout;
