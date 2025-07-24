import { useState } from "react";
import useEmployeeStore from "../store/useEmployeeStore";
import TextInput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";
import styles from "./EmployeeForm.module.scss";
import states from "../data/states";
import departments from "../data/departments";

function EmployeeForm({ onSubmitSuccess }) {
  const { addEmployee } = useEmployeeStore();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for the changed field
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    addEmployee(formData);
    if (onSubmitSuccess) {
      onSubmitSuccess();
    }
    setFormData({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      startDate: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      department: "",
    });
    setErrors({});
  }

  function validate(data) {
    const newErrors = {};
    if (!data.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!data.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!data.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required.";
    if (!data.startDate) newErrors.startDate = "Start date is required.";
    if (!data.street.trim()) newErrors.street = "Street is required.";
    if (!data.city.trim()) newErrors.city = "City is required.";
    if (!data.state) newErrors.state = "State is required.";
    if (!data.zipCode.trim()) newErrors.zipCode = "Zip code is required.";
    if (!/^\d{5}$/.test(data.zipCode)) newErrors.zipCode = "Invalid zip code.";
    if (!data.department) newErrors.department = "Department is required.";
    return newErrors;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <TextInput
        name="firstName"
        label="First Name"
        value={formData.firstName}
        onChange={handleChange}
        error={errors.firstName}
      />

      <TextInput
        name="lastName"
        label="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        error={errors.lastName}
      />

      <TextInput
        name="dateOfBirth"
        label="Date of Birth"
        type="date"
        value={formData.dateOfBirth}
        onChange={handleChange}
        error={errors.dateOfBirth}
      />

      <TextInput
        name="startDate"
        label="Start Date"
        type="date"
        value={formData.startDate}
        onChange={handleChange}
        error={errors.startDate}
      />

      <div className={styles.addressSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionBar}></div>
          <h3 className={styles.sectionTitle}>Address</h3>
        </div>

        <TextInput
          name="street"
          label="Street"
          value={formData.street}
          onChange={handleChange}
          error={errors.street}
        />

        <TextInput
          name="city"
          label="City"
          value={formData.city}
          onChange={handleChange}
          error={errors.city}
        />

        <SelectInput
          name="state"
          label="State"
          options={states}
          value={formData.state}
          onChange={handleChange}
          error={errors.state}
        />

        <TextInput
          name="zipCode"
          label="Zip Code"
          value={formData.zipCode}
          onChange={handleChange}
          error={errors.zipCode}
        />
      </div>

      <SelectInput
        name="department"
        label="Department"
        options={departments}
        value={formData.department}
        onChange={handleChange}
        error={errors.department}
      />

      <button type="submit">Save</button>
    </form>
  );
}

export default EmployeeForm;
