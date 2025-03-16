import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ResourceTracker from "./pages/ResourceTracker";
import TrackingPage from "./pages/TrackingPage"; // ✅ Import TrackingPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/resource-tracker" element={<ResourceTracker />} />
        <Route path="/tracking" element={<TrackingPage />} /> {/* ✅ Add TrackingPage route */}
      </Routes>
    </Router>
  );
}

export default App;