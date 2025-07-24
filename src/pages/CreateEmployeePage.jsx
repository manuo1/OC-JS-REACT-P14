import { useState, useEffect } from "react";
import useEmployeeStore from "../store/useEmployeeStore";
import EmployeeForm from "../components/EmployeeForm";
import Modal from "../components/Modal";
import styles from "./CreateEmployeePage.module.scss";

function CreateEmployeePage() {
  const { addEmployee } = useEmployeeStore();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.title = "HRnet - Create Employees";
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Create Employee</h1>
      </header>

      <EmployeeForm
        onSubmitSuccess={() => setShowModal(true)}
        onSubmit={addEmployee}
      />

      {showModal && (
        <Modal
          message="Employee successfully created!"
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default CreateEmployeePage;
