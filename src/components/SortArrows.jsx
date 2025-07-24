import styles from "./SortArrows.module.scss";

function SortArrows({ direction }) {
  return (
    <span className={styles.arrows}>
      <svg
        className={`${styles.arrow} ${
          direction === "asc" ? styles.active : ""
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 8 4"
        width="12"
        height="6"
        aria-hidden="true"
      >
        <path d="M4 0L0 4h8L4 0z" />
      </svg>
      <svg
        className={`${styles.arrow} ${
          direction === "desc" ? styles.active : ""
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 8 4"
        width="12"
        height="6"
        aria-hidden="true"
      >
        <path d="M4 4L0 0h8L4 4z" />
      </svg>
    </span>
  );
}

export default SortArrows;
