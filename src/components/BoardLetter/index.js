import React, { useEffect } from "react";
import useWordle from "../../hooks/useWordle";

function BoardLetter({ letterPosition, currentAttemptValue }) {
  const { board, currentGuessWord, currentAttempt, setGuesses } = useWordle();
  const { attemptValue } = currentAttempt;
  
  let currentPosition = 0;
  switch (currentAttemptValue) {
    case 0:
      currentPosition = letterPosition;
      break;
    case 1:
      currentPosition = letterPosition - 1;
      break;
    case 2:
      currentPosition = letterPosition - 2;
      break;
    case 3:
      currentPosition = letterPosition - 3;
      break;
    case 4:
      currentPosition = letterPosition - 4;
      break;
    case 5:
      currentPosition = letterPosition - 5;
      break;
    default:
      currentPosition = letterPosition;
  }

  const letter = board[currentAttemptValue][currentPosition];
  const correct = currentGuessWord[currentPosition] === letter;
  const almost = !correct && letter !== "" && currentGuessWord.includes(letter);
  const letterState =
    attemptValue > currentAttemptValue &&
    (correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    if (correct) {
      setGuesses((prev) => ({
        ...prev,
        correct: [...prev.correct, ...letter]
      }));
    }

    if (almost) {
      setGuesses((prev) => ({
        ...prev,
        almost: [...prev.almost, ...letter]
      }));
    }

    if (letter !== "" && !correct && !almost) {
      setGuesses((prev) => ({
        ...prev,
        wrong: [...prev.wrong, ...letter]
      }));
    }
  }, [attemptValue]);

  return (
    <div
      className={`letter ${letter && "letter-border"}`}
      id={letterState ? letterState : ""}
    >
      {letter}
    </div>
  );
}

export default BoardLetter;
