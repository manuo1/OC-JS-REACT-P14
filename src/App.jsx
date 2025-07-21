import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CreateEmployeePage from "./pages/CreateEmployeePage";
import EmployeeListPage from "./pages/EmployeeListPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<CreateEmployeePage />} />
        <Route path="/employees" element={<EmployeeListPage />} />
      </Route>
    </Routes>
  );
}

export default App;
