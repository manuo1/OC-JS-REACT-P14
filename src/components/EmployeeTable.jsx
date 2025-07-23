import { useState } from "react";
import styles from "./EmployeeTable.module.scss";
import SearchBar from "./SearchBar";

function EmployeeTable({ employees }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees = employees.filter((employee) => {
    const employeeText = Object.values(employee).join(" ").toLowerCase();
    return employeeText.includes(searchTerm.toLowerCase());
  });

  return (
    <div className={styles.wrapper}>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      <table className={styles.table}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Start Date</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.dateOfBirth}</td>
                <td>{employee.startDate}</td>
                <td>{employee.street}</td>
                <td>{employee.city}</td>
                <td>{employee.state}</td>
                <td>{employee.zipCode}</td>
                <td>{employee.department}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">No employees found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
