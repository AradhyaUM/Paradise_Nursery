import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProductList from "./pages/ProductList";
import CartPage from "./pages/CartPage";
import AboutUs from "./pages/AboutUs";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}