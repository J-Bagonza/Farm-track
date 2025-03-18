import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ResourceTracker from "./pages/ResourceTracker";
import TrackingPage from "./pages/TrackingPage";
import ShoppingPage from "./pages/ShoppingPage";
import CartPage from "./pages/CartPage";
import VetConnect from "./pages/VetConnect"; // ✅ Import VetConnect

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/resource-tracker" element={<ResourceTracker />} />
        <Route path="/tracking" element={<TrackingPage />} />
        <Route path="/shop" element={<ShoppingPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/vetconnect" element={<VetConnect />} /> {/* ✅ Add VetConnect route */}
      </Routes>
    </Router>
  );
}

export default App;
