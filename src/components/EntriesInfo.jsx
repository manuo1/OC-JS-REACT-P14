import styles from "./EntriesInfo.module.scss";

function EntriesInfo({ startIndex, endIndex, totalEntries }) {
  if (totalEntries === 0) {
    return <div className={styles.entriesInfo}>Showing 0 entries</div>;
  }

  return (
    <div className={styles.entriesInfo}>
      Showing {startIndex + 1} to {endIndex} of {totalEntries} entries
    </div>
  );
}

export default EntriesInfo;
