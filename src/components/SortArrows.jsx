import styles from "./SortArrows.module.scss";

function SortArrows({ direction }) {
  return (
    <span className={styles.arrows}>
      <svg
        className={`${styles.arrow} ${
          direction === "asc" ? styles.active : ""
        }`}
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 8l6 6H6l6-6z" />
      </svg>

      <svg
        className={`${styles.arrow} ${
          direction === "desc" ? styles.active : ""
        }`}
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 16l-6-6h12l-6 6z" />
      </svg>
    </span>
  );
}

export default SortArrows;
