import styles from "./EmployeeTable.module.scss";
import SortArrows from "./SortArrows";

const columns = [
  { key: "firstName", label: "First Name" },
  { key: "lastName", label: "Last Name" },
  { key: "dateOfBirth", label: "Date of Birth" },
  { key: "startDate", label: "Start Date" },
  { key: "street", label: "Street" },
  { key: "city", label: "City" },
  { key: "state", label: "State" },
  { key: "zipCode", label: "Zip Code" },
  { key: "department", label: "Department" },
];

function EmployeeTable({ employees, sortKey, sortDirection, onSortChange }) {
  if (employees.length === 0) {
    return <p className={styles.empty}>No employees found.</p>;
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map(({ key, label }) => (
            <th key={key}>
              <button
                type="button"
                onClick={() => onSortChange(key)}
                className={styles.sortButton}
                aria-sort={
                  sortKey === key
                    ? sortDirection === "asc"
                      ? "ascending"
                      : "descending"
                    : "none"
                }
              >
                {label}
                <SortArrows
                  direction={sortKey === key ? sortDirection : null}
                />
              </button>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id}>
            <td>{emp.firstName}</td>
            <td>{emp.lastName}</td>
            <td>{emp.dateOfBirth}</td>
            <td>{emp.startDate}</td>
            <td>{emp.street}</td>
            <td>{emp.city}</td>
            <td>{emp.state}</td>
            <td>{emp.zipCode}</td>
            <td>{emp.department}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
