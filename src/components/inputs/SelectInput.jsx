import styles from "./SelectInput.module.scss";

function SelectInput({ label, name, value, onChange, options, error }) {
  return (
    <div className={styles.field}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`${styles.select} ${error ? styles.invalid : ""}`}
        aria-invalid={!!error}
      >
        <option value="" disabled hidden>
          -- Select an option --
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}

export default SelectInput;
