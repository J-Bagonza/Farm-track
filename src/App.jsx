import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ResourceTracker from "./pages/ResourceTracker";
import TrackingPage from "./pages/TrackingPage";
import ShoppingPage from "./pages/ShoppingPage"; // ✅ Ensure ShoppingPage is imported
import CartPage from "./pages/CartPage"; // ✅ Ensure CartPage is imported

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/resource-tracker" element={<ResourceTracker />} />
        <Route path="/tracking" element={<TrackingPage />} />
        <Route path="/shop" element={<ShoppingPage />} /> {/* ✅ Ensure this route exists */}
        <Route path="/cart" element={<CartPage />} /> {/* ✅ Ensure this route exists */}
      </Routes>
    </Router>
  );
}

export default App;