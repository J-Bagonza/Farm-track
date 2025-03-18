import { useState } from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const LandingPage = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div>
      {/* Navbar - Stays at the top */}
      <Navbar cartCount={cartCount} />

      {/* Sections */}
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section id="contact">
          <ContactUs />
        </section>
      </main>

      {/* Footer - Stays at the bottom */}
    <Footer />
    </div>
  );
};

export default LandingPage;