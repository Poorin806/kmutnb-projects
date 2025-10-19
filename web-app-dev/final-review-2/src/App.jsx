import Navbar from "./components/navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import UserPage from "./pages/user";
import UserDetailPage from "./pages/user-detail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/user/*" element={<UserDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
