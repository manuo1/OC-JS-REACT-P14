import { useEffect } from "react";
import useEmployeeStore from "../store/useEmployeeStore";
import EmployeeTable from "../components/EmployeeTable";
import styles from "./EmployeeListPage.module.scss";

function EmployeeListPage() {
  const { employees } = useEmployeeStore();

  useEffect(() => {
    document.title = "Current Employees";
  }, []);

  return (
    <main className={styles.page}>
      <h1>Current Employees</h1>
      <EmployeeTable employees={employees} />
    </main>
  );
}

export default EmployeeListPage;
