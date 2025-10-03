import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/home";
import DepartmentPage from "./pages/department";
import PositionPage from "./pages/position";
import EmployeePage from "./pages/employee";

function App() {
  return (
    <main>
      <BrowserRouter>
        <HomePage />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/department" element={<DepartmentPage />} />
          <Route path="/position" element={<PositionPage />} />
          <Route path="/employee" element={<EmployeePage />} />
          <Route path="/salary" element={<h2>Comming soon...</h2>} />
          <Route path="*" element={<h1>404 - Page not found.</h1>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
