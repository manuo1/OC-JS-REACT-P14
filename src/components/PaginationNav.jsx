import styles from "./PaginationNav.module.scss";

function PaginationNav({ currentPage, totalPages, onPageChange }) {
  if (totalPages === 0) return null;

  const getPageNumbers = () => {
    const delta = 2; // visible pages before and after the current page
    const range = [];
    const rangeWithDots = [];

    let l;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        range.push(i);
      }
    }

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  const pages = getPageNumbers();

  return (
    <nav className={styles.pagination}>
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={styles.navBtn}
        aria-label="Previous Page"
      >
        Previous
      </button>

      {pages.map((page, idx) =>
        page === "..." ? (
          <span key={`dots-${idx}`} className={styles.dots}>
            &hellip;
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`${styles.pageBtn} ${
              page === currentPage ? styles.active : ""
            }`}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={styles.navBtn}
        aria-label="Next Page"
      >
        Next
      </button>
    </nav>
  );
}

export default PaginationNav;
