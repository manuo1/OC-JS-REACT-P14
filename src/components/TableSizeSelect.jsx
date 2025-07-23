import styles from "./TableSizeSelect.module.scss";

function TableSizeSelect({ pageSize, pageSizes, onChange }) {
  return (
    <label className={styles.selectWrapper}>
      Show{" "}
      <select
        value={pageSize}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        {pageSizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>{" "}
      entries
    </label>
  );
}

export default TableSizeSelect;
