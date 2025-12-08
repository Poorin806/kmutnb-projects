import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Menu from "./components/menu";

// Pages
import NotFoundPage from "./pages/not-found";
import { hookRoutes } from "./components/hook";

export default function App() {
  return (
    <Router>
      <Menu />
      <Suspense>
        <main className="p-3">
          <Routes>
            {hookRoutes}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </Suspense>
    </Router>
  );
}
