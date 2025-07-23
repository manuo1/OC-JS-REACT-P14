import styles from "./TextInput.module.scss";

function TextInput({ label, name, value, onChange, error, type = "text" }) {
  return (
    <div className={styles.field}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`${styles.input} ${error ? styles.invalid : ""}`}
        aria-invalid={!!error}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}

export default TextInput;
