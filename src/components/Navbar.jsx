import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import logo from "../assets/images/logo.png";
import userIcon from "../assets/images/user.png";
import cartIcon from "../assets/images/shoppingbasket.png";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="flex justify-between items-center bg-white shadow-md w-3/4 mx-auto mt-4 p-4 rounded-full fixed top-0 left-1/2 transform -translate-x-1/2 z-50 overflow-hidden">
      {/* Wave Animation */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="wave absolute top-0 left-0 w-full h-full bg-gray-300 opacity-50 animate-wave"></div>
      </div>

      {/* Left - Logo */}
      <div className="flex items-center gap-2 relative z-10">
        <img src={logo} alt="Farm-Track Logo" className="w-10 h-10" />
        <h1 className="text-xl font-bold text-gray-700">Farm-Track</h1>
      </div>

      {/* Center - Navigation Links */}
      <div className="flex gap-10 relative z-10">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer relative hover:text-green-600"
        >
          Home
          <span className="absolute bottom-0 left-0 w-full h-1 bg-green-500 scale-x-0 transition-transform transform hover:scale-x-100"></span>
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer relative hover:text-green-600"
        >
          About Us
          <span className="absolute bottom-0 left-0 w-full h-1 bg-green-500 scale-x-0 transition-transform transform hover:scale-x-100"></span>
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer relative hover:text-green-600"
        >
          Contact
          <span className="absolute bottom-0 left-0 w-full h-1 bg-green-500 scale-x-0 transition-transform transform hover:scale-x-100"></span>
        </Link>
      </div>

      {/* Right - Cart & User */}
      <div className="flex items-center gap-6 relative z-10 pr-8">
        {/* Shopping Cart with Badge - Now Clickable */}
        <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
          <img src={cartIcon} alt="Cart" className="w-10 h-10" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2">
              {cartCount}
            </span>
          )}
        </div>

        {/* User Icon with Rotating Border */}
        <div className="relative dropdown">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-transparent rounded-full animate-rotate-border"></div>
            <img
              src={userIcon}
              alt="User"
              className="w-8 h-8 cursor-pointer z-10"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
          </div>

          {/* Dropdown - Now Above Navbar */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-2 z-50 top-12">
              <button className="block w-full text-left px-3 py-2 hover:bg-gray-100">
                Login
              </button>
              <button className="block w-full text-left px-3 py-2 hover:bg-gray-100">
                Signup
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes rotate-border {
            0% { border-color: red; transform: rotate(0deg); }
            50% { border-color: green; transform: rotate(180deg); }
            100% { border-color: red; transform: rotate(360deg); }
          }
          .animate-rotate-border {
            animation: rotate-border 2s linear infinite;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;