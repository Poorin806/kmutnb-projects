// Root component

// Libs
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import Page1 from "./pages/page1";
import ProductPage from "./pages/product";
import Navbar from "./components/navbar";
import ProductDetailPage from "./pages/product-detail";

function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/page1" element={<Page1 />} />

            {/* Multiple page inside */}
            <Route path="/product" element={<ProductPage />}>
              <Route path="*" element={<ProductDetailPage />} />
            </Route>

            {/* Handle 404 - Page not found */}
            <Route path="/*" element={<h1>Page not found</h1>} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
