import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md"; // Close icon
import logo from "../assets/images/logo.png";
import userIcon from "../assets/images/user.png";
import cartIcon from "../assets/images/shoppingbasket.png";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center bg-white shadow-md w-3/4 mx-auto mt-4 p-4 rounded-full fixed top-0 left-1/2 transform -translate-x-1/2 z-50">
      {/* Left - Logo */}
      <div className="flex items-center gap-2 relative z-10">
        <img src={logo} alt="Farm-Track Logo" className="w-10 h-10" />
        <h1 className="text-xl font-bold text-gray-700">Farm-Track</h1>
      </div>

      {/* Center - Navigation Links */}
      <div className="flex gap-10 relative z-10">
        <Link to="/home" className="cursor-pointer hover:text-green-600 relative">
          Home
          <span className="absolute bottom-0 left-0 w-full h-1 bg-green-500 scale-x-0 transition-transform hover:scale-x-100"></span>
        </Link>
        <Link to="/about" className="cursor-pointer hover:text-green-600 relative">
          About Us
          <span className="absolute bottom-0 left-0 w-full h-1 bg-green-500 scale-x-0 transition-transform hover:scale-x-100"></span>
        </Link>
        <Link to="/contact" className="cursor-pointer hover:text-green-600 relative">
          Contact
          <span className="absolute bottom-0 left-0 w-full h-1 bg-green-500 scale-x-0 transition-transform hover:scale-x-100"></span>
        </Link>
      </div>

      {/* Right - Cart & User */}
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

        {/* User Icon with Dropdown */}
        <div className="relative">
          {/* User Icon with Animated Border */}
          <div
            className="relative w-10 h-10 flex items-center justify-center cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div className="absolute inset-0 border-2 border-transparent rounded-full animate-rotate-border"></div>
            <img src={userIcon} alt="User" className="w-8 h-8 z-10" />
          </div>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-3 w-44 bg-white shadow-lg rounded-lg p-2 z-50 transition-all duration-200 ease-in-out animate-fadeIn">
              {/* Close Button */}
              <div className="flex justify-between items-center px-3 py-2">
                <span className="text-gray-700 font-semibold">Account</span>
                <MdClose
                  className="text-gray-500 cursor-pointer hover:text-red-500"
                  size={20}
                  onClick={() => setDropdownOpen(false)}
                />
              </div>
              <button className="block w-full text-left px-3 py-2 hover:bg-gray-100">Login</button>
              <button className="block w-full text-left px-3 py-2 hover:bg-gray-100">Signup</button>
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

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.2s ease-in-out;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;