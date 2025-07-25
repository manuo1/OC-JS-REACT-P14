import styles from "./Modal.module.scss";

function Modal({ message, onClose }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <p>{message}</p>
        <button onClick={onClose} className={styles.closeBtn}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
