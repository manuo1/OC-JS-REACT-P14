import styles from "./SearchBar.module.scss";

function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search employees..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={styles.search}
    />
  );
}

export default SearchBar;
