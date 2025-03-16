import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ResourceTracker from "./pages/ResourceTracker";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/resource-tracker" element={<ResourceTracker/>} />
      </Routes>
    </Router>
  );
}

export default App;