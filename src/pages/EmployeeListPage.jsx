import { useState, useEffect, useMemo } from "react";
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

  // Sort state
  const [sortKey, setSortKey] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc"); // "asc" or "desc"

  // Pre-compute search text for each employee to avoid expensive join operations on every filter
  const employeesWithSearchText = useMemo(() => {
    return employees.map((employee) => ({
      ...employee,
      searchText: Object.values(employee).join(" ").toLowerCase(),
    }));
  }, [employees]);

  // Filter employees by search term (case insensitive)
  const filteredEmployees = employeesWithSearchText.filter((employee) => {
    return employee.searchText.includes(searchTerm.toLowerCase());
  });

  // Sort filtered employees
  const sortedEmployees = [...filteredEmployees];
  if (sortKey) {
    sortedEmployees.sort((a, b) => {
      let aVal = a[sortKey];
      let bVal = b[sortKey];

      // Handle undefined or null values
      if (aVal === undefined || aVal === null) aVal = "";
      if (bVal === undefined || bVal === null) bVal = "";

      // For dates, compare them as Date objects
      if (sortKey === "dateOfBirth" || sortKey === "startDate") {
        aVal = new Date(aVal);
        bVal = new Date(bVal);
      }

      if (aVal < bVal) return sortDirection === "asc" ? -1 : 1;
      if (aVal > bVal) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }

  const totalEntries = sortedEmployees.length;
  const totalPages = Math.ceil(totalEntries / tableSize);

  useEffect(() => {
    document.title = "HRnet - Current Employees";
  }, []);

  // Reset to first page on page size, search term, or sort change
  useEffect(() => {
    setCurrentPage(1);
  }, [tableSize, searchTerm, sortKey, sortDirection]);

  const startIndex = (currentPage - 1) * tableSize;
  const endIndex = Math.min(startIndex + tableSize, totalEntries);

  const currentEmployees = sortedEmployees.slice(startIndex, endIndex);

  // Handle sorting when clicking on column headers
  const handleSortChange = (key) => {
    if (sortKey === key) {
      // Toggle sort direction
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      // New column sort, default to ascending
      setSortKey(key);
      setSortDirection("asc");
    }
  };

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

      <EmployeeTable
        employees={currentEmployees}
        sortKey={sortKey}
        sortDirection={sortDirection}
        onSortChange={handleSortChange}
      />

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
