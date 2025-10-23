import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import AnalyticsTracker from "./AnalyticsTracker";

export default function App() {
  return (
    <Router>
      <AnalyticsTracker /> {/* Esto registrará cada cambio de "hash" */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}
