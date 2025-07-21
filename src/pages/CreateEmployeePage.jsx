import useEmployeeStore from "../store/useEmployeeStore";
import EmployeeForm from "../components/EmployeeForm";

function CreateEmployeePage() {
  const { addEmployee, employees } = useEmployeeStore();

  return (
    <div>
      <h2>Create Employee</h2>
      <EmployeeForm onSubmit={addEmployee} />

      <hr />
      <h3>Employees (debug)</h3>
      <ul>
        {employees.map((emp, index) => (
          <li key={index}>
            {emp.firstName} {emp.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CreateEmployeePage;
