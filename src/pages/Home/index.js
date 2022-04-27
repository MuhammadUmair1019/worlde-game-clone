import Navbar from "../../components/Navbar";
import BoardLayout from "../../components/BoardLayout";
import KeyBoardLayout from "../../components/KeyboardLayout";
import Modal from "../../components/Modal";
import useWordle from "../../hooks/useWordle";

export default function Home() {
  const { board, clickHandler, handleKeyup, currentAttempt, guesses } =
    useWordle();

  return (
    <div className="main">
      <Navbar />
      <BoardLayout board={board} />
      <KeyBoardLayout
        handleSelect={clickHandler}
        handleKeyup={handleKeyup}
        currentAttempt={currentAttempt}
        guesses={guesses}
      />
      <Modal />
    </div>
  );
}
