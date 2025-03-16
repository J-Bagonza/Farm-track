import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const LandingPage = () => {
  return (
    <div>
      {/* Navbar - Stays at the top */}
      <Navbar />

      {/* Sections */}
      <main>
        <Home />
        <AboutUs />
        <ContactUs />
      </main>

      {/* Footer - Stays at the bottom */}
      <Footer />
    </div>
  );
};

export default LandingPage;