import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi"; // Hamburger menu icon
import logo from "../assets/images/logo.png";
import userIcon from "../assets/images/user.png";
import cartIcon from "../assets/images/shoppingbasket.png";

const Navbar = ({ cartCount }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (id) => {
    setMobileMenuOpen(false); // Close mobile menu when navigating
    if (location.pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <nav className="flex justify-between items-center bg-white shadow-md w-[85%] mx-auto mt-4 py-2 px-6 rounded-full fixed top-0 left-1/2 transform -translate-x-1/2 z-50">
      {/* Left - Logo */}
      <div className="flex items-center gap-2 relative z-10">
        <img src={logo} alt="Farm-Track Logo" className="w-10 h-10" />
        <h1 className="text-xl font-bold text-gray-700">Farm-Track</h1>
      </div>

      {/* Center - Navigation Links (Hidden on Mobile) */}
      <div className="hidden md:flex gap-10 relative z-10">
        <button onClick={() => handleNavClick("home")} className="cursor-pointer hover:text-green-600 relative">
          Home
          <span className="absolute bottom-0 left-0 w-full h-1 bg-green-500 scale-x-0 transition-transform hover:scale-x-100"></span>
        </button>
        <button onClick={() => handleNavClick("about")} className="cursor-pointer hover:text-green-600 relative">
          About Us
          <span className="absolute bottom-0 left-0 w-full h-1 bg-green-500 scale-x-0 transition-transform hover:scale-x-100"></span>
        </button>
        <button onClick={() => handleNavClick("contact")} className="cursor-pointer hover:text-green-600 relative">
          Contact
          <span className="absolute bottom-0 left-0 w-full h-1 bg-green-500 scale-x-0 transition-transform hover:scale-x-100"></span>
        </button>
      </div>

      {/* Right - Shopping Cart & Mobile Menu Icon */}
      <div className="flex items-center gap-6 relative z-10 pr-8">
        {/* Shopping Cart */}
        <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
          <img src={cartIcon} alt="Cart" className="w-10 h-10" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2">
              {cartCount}
            </span>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <HiMenuAlt3
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setMobileMenuOpen(true)}
        />
      </div>

      {/* Mobile Menu (Slides in from Right to Left) */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] bg-white shadow-lg transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 p-6 flex flex-col justify-between`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-700">Menu</h2>
          <MdClose className="text-2xl cursor-pointer" onClick={() => setMobileMenuOpen(false)} />
        </div>

        {/* Navigation Links */}
        <div className="mt-8">
          <button
            onClick={() => handleNavClick("home")}
            className="block w-full text-left text-gray-700 text-lg py-3 border-b hover:text-green-600"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick("about")}
            className="block w-full text-left text-gray-700 text-lg py-3 border-b hover:text-green-600"
          >
            About Us
          </button>
          <button
            onClick={() => handleNavClick("contact")}
            className="block w-full text-left text-gray-700 text-lg py-3 border-b hover:text-green-600"
          >
            Contact
          </button>
        </div>

        {/* User Icon & Authentication Buttons (Near Bottom) */}
        <div className="mb-10 flex flex-col items-center">
          <img src={userIcon} alt="User" className="w-12 h-12 rounded-full border-2 border-gray-400 mb-4" />
          <Link to="/signup" className="w-full">
            <button className="w-full py-2 border border-black text-black bg-white font-semibold rounded-lg hover:bg-gray-100">
              Signup
            </button>
          </Link>
          <Link to="/login" className="w-full mt-3">
            <button className="w-full py-2 border border-black text-black bg-white font-semibold rounded-lg hover:bg-gray-100">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;