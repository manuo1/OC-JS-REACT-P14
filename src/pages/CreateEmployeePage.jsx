import { useState, useEffect } from "react";
import useEmployeeStore from "../store/useEmployeeStore";
import EmployeeForm from "../components/EmployeeForm";
import Modal from "../components/Modal";

function CreateEmployeePage() {
  const { addEmployee } = useEmployeeStore();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.title = "HRnet - Create Employees";
  }, []);

  return (
    <div>
      <h2>Create Employee</h2>
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
