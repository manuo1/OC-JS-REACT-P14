import { useState, useEffect } from "react";
import useEmployeeStore from "../store/useEmployeeStore";
import EmployeeTable from "../components/EmployeeTable";
import PaginationNav from "../components/PaginationNav";
import TableSizeSelect from "../components/TableSizeSelect";
import SearchBar from "../components/SearchBar";
import EntriesInfo from "../components/EntriesInfo";
import styles from "./EmployeeListPage.module.scss";

const TABLE_SIZES = [10, 25, 50, 100];

function EmployeeListPage() {
  const { employees } = useEmployeeStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [tableSize, setTableSize] = useState(TABLE_SIZES[0]); // Default 10

  // Filter employees by search term (case insensitive)
  const filteredEmployees = employees.filter((employee) => {
    const employeeText = Object.values(employee).join(" ").toLowerCase();
    return employeeText.includes(searchTerm.toLowerCase());
  });

  const totalEntries = filteredEmployees.length;
  const totalPages = Math.ceil(totalEntries / tableSize);

  useEffect(() => {
    document.title = "Current Employees";
  }, []);

  // Reset to first page on page size or search term change
  useEffect(() => {
    setCurrentPage(1);
  }, [tableSize, searchTerm]);

  const startIndex = (currentPage - 1) * tableSize;
  const endIndex = Math.min(startIndex + tableSize, totalEntries);

  const currentEmployees = filteredEmployees.slice(startIndex, endIndex);

  return (
    <main className={styles.page}>
      <h1>Current Employees</h1>

      <div className={styles.controls}>
        <TableSizeSelect
          pageSize={tableSize}
          pageSizes={TABLE_SIZES}
          onChange={setTableSize}
        />

        <SearchBar value={searchTerm} onChange={setSearchTerm} />
      </div>

      <EmployeeTable employees={currentEmployees} />

      <EntriesInfo
        startIndex={startIndex}
        endIndex={endIndex}
        totalEntries={totalEntries}
      />

      <PaginationNav
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </main>
  );
}

export default EmployeeListPage;
