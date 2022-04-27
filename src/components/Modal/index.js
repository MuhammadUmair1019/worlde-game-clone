import React from "react";
import useWordle from "../../hooks/useWordle";
import "./index.css";

function Modal() {
  const { openModal, setOpenModal, currentAttempt } = useWordle();
  const currentTurn = currentAttempt.attemptValue + 1;
  const isRightGuess = currentAttempt.attemptValue !== 6 && openModal;

  const handleOpen = () => {
    window.location.reload();
    setOpenModal(false);
  };

  return (
    (openModal || currentAttempt.attemptValue === 6) && (
      <div>
        <div className="modal-wrapper" onClick={handleOpen} />
        <div className="modal-card">
          <h3 className="modal-close" onClick={handleOpen}>
            x
          </h3>
          <div className="modal-content">
            <div className="modal-title">
              {isRightGuess ? <h2> You Win</h2> : <h2> Game Over</h2>}
            </div>
            <hr />
            <div className="modal-text">
              {isRightGuess ? (
                <p>You found the solution in {currentTurn} guesse</p>
              ) : (
                <p> Better Luck next time</p>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Modal;
