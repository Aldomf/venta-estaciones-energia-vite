import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

export default function App() {
  return (
    <Router basename="/venta-estaciones-energia-vite">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}
