import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CreateEmployeePage from "./pages/CreateEmployeePage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<CreateEmployeePage />} />
      </Route>
    </Routes>
  );
}

export default App;
