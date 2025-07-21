import styles from "./EmployeeTable.module.scss";

function EmployeeTable({ employees }) {
  if (employees.length === 0) {
    return <p className={styles.empty}>No employees found.</p>;
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
          <th>Start Date</th>
          <th>Department</th>
          <th>Street</th>
          <th>City</th>
          <th>State</th>
          <th>Zip Code</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp, i) => (
          <tr key={i}>
            <td>{emp.firstName}</td>
            <td>{emp.lastName}</td>
            <td>{emp.dateOfBirth}</td>
            <td>{emp.startDate}</td>
            <td>{emp.department}</td>
            <td>{emp.street}</td>
            <td>{emp.city}</td>
            <td>{emp.state}</td>
            <td>{emp.zipCode}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
