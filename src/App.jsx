import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import Navbar from "./components/Navbar";
import LoginModal from "./components/LoginModal";
import SignupModal from "./components/SignupModal";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const ResourceTracker = lazy(() => import("./pages/ResourceTracker"));
const TrackingPage = lazy(() => import("./pages/TrackingPage"));
const ShoppingPage = lazy(() => import("./pages/ShoppingPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const VetConnect = lazy(() => import("./pages/VetConnect"));

function App() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <Router>
      <Navbar 
        cartCount={3} 
        openLogin={() => setLoginOpen(true)} 
        openSignup={() => setSignupOpen(true)} 
      />

      <Suspense fallback={<div className="flex items-center justify-center h-screen text-gray-700">Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/resource-tracker" element={<ResourceTracker />} />
          <Route path="/tracking" element={<TrackingPage />} />
          <Route path="/shop" element={<ShoppingPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/vetconnect" element={<VetConnect />} />
        </Routes>
      </Suspense>

      {/* Modals */}
      {loginOpen && <LoginModal closeModal={() => setLoginOpen(false)} />}
      {signupOpen && <SignupModal closeModal={() => setSignupOpen(false)} />}
    </Router>
  );
}

export default App;