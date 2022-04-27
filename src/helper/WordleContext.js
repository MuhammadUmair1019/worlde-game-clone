import { useState, createContext, useEffect } from "react";
import wordBank from "../data/wordle-bank.txt";

export const WordleContext = createContext();

const initalState = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""]
];

export default function WordleProvider({ children }) {
  const [board, setBoard] = useState(initalState);
  const [currentGuessWord, setCurrentGuessWord] = useState("");
  const [currentGuess, setCurrentGuess] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [guesses, setGuesses] = useState({
    correct: [],
    almost: [],
    wrong: []
  });
  const [currentAttempt, setCurrentAttempt] = useState({
    letterPosition: 0,
    attemptValue: 0
  });
  const {attemptValue, letterPosition} = currentAttempt;

  useEffect(() => {
    fetch(wordBank)
      .then((response) => response.text())
      .then((data) => {
        const result = data.split("\n");
        const text = result[Math.floor(Math.random() * result.length)];
        setCurrentGuessWord(text.toLowerCase());
      });
  }, []);

  const onSelectLetter = (key) => {
    if (letterPosition > 4) return;
    const newBoard = [...board];
    newBoard[attemptValue][letterPosition] = key;
    setBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: letterPosition + 1
    });
  };

  const onEnter = () => {
    if (letterPosition !== 5 || attemptValue > 5)
      return;
    const guessString = board[attemptValue].join("");
    setCurrentGuess(guessString);

    if (currentGuessWord.includes(guessString)) {
      setOpenModal(true);
      return;
    }

    setCurrentAttempt({
      letterPosition: 0,
      attemptValue: attemptValue + 1
    });
  };

  const onDelete = () => {
    if (letterPosition === 0) return;
    const newBoard = [...board];
    newBoard[attemptValue][letterPosition - 1] =
      "";
    setBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: letterPosition - 1
    });
  };

  const clickHandler = (key) => {
    if (key === "Enter") {
      onEnter();
    } else if (key === "Del") {
      onDelete();
    } else {
      if (attemptValue <= 5) {
        onSelectLetter(key);
      }
    }
  };

  const handleKeyup = ({ key }) => {
    if (key === "Enter") {
      onEnter();
    } else if (key === "Backspace") {
      onDelete();
    } else {
      if (attemptValue <= 5) {
        if (/^[A-Za-z]$/.test(key)) {
          onSelectLetter(key);
        }
      }
    }
  };

  return (
    <WordleContext.Provider
      value={{
        board,
        setBoard,
        initalState,
        clickHandler,
        currentAttempt,
        handleKeyup,
        currentGuessWord,
        currentGuess,
        setCurrentGuess,
        guesses,
        setGuesses,
        setOpenModal,
        openModal
      }}
    >
      {children}
    </WordleContext.Provider>
  );
}
