import React from "react";

export default function Modal({ title, onConfirm, closeModal }) {
  return (
    <div
      style={styles.overlay}
      onClick={(e) => e.target === e.currentTarget && closeModal()}
    >
      <div style={styles.modal}>
        <div className="modal-title">{title}</div>
        <div className="modal-buttons">
          <button className="button" onClick={onConfirm}>
            Ок
          </button>
          <button className="button" onClick={() => closeModal()}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
    maxWidth: 500,
    width: "100%",
    textAlign: "center",
  },
};
