import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { MdClose, MdInfoOutline } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiHome3Line, RiContactsLine } from "react-icons/ri";
import logo from "../assets/images/logo.png";
import userIcon from "../assets/images/user.png";
import cartIcon from "../assets/images/shoppingbasket.png";

const Navbar = ({ cartCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Close user dropdown when clicking outside
  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(".user-menu")) setUserDropdownOpen(false);
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  // Disable scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    if (location.pathname === "/") {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  const navLinks = [
    { id: "home", label: "Home", icon: <RiHome3Line className="text-2xl text-green-400" /> },
    { id: "about", label: "About Us", icon: <MdInfoOutline className="text-2xl text-blue-400" /> },
    { id: "contact", label: "Contact", icon: <RiContactsLine className="text-2xl text-orange-400" /> },
  ];

  return (
    <nav className="flex justify-between items-center bg-gray-100 bg-opacity-85 shadow-md w-[90%] md:w-[75%] mx-auto mt-4 py-2 px-6 rounded-full fixed top-0 left-1/2 transform -translate-x-1/2 z-50">
      {/* Left - Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Farm-Track ogo" className="w-7 h-6" />
        <h1 className="text-base md:text-xl font-bold text-gray-700">Farm-Track</h1>
      </div>

      {/* Center - Desktop Navigation */}
      <div className="hidden md:flex gap-10">
        {navLinks.map(({ id, label }) => (
          <button key={id} onClick={() => handleNavClick(id)} className="hover:text-green-600 relative">
            {label}
            <span className="absolute bottom-0 left-0 w-full h-1 bg-green-500 scale-x-0 transition-transform hover:scale-x-100"></span>
          </button>
        ))}
      </div>

      {/* Right - Cart & User */}
      <div className="flex items-center gap-6">
        {/* Cart Icon */}
        <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
          <img src={cartIcon} alt="Cart" className="w-10 h-10" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2">
              {cartCount}
            </span>
          )}
        </div>

        {/* User Dropdown (Desktop) */}
        <div className="relative hidden md:block user-menu">
          <img
            src={userIcon}
            alt="User"
            className="w-10 h-10 cursor-pointer"
            onClick={() => setUserDropdownOpen(!userDropdownOpen)}
          />
          {userDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-2 z-50">
              <div className="flex justify-between items-center">
                <h3 className="text-gray-700 font-semibold">Account</h3>
                <MdClose className="text-xl cursor-pointer" onClick={() => setUserDropdownOpen(false)} />
              </div>
              <hr className="my-2 border-gray-300" />
              <Link to="/signup" className="block text-center py-2 text-gray-700 hover:bg-gray-100 rounded">
                Signup
              </Link>
              <hr className="my-2 border-gray-300" />
              <Link to="/login" className="block text-center py-2 text-gray-700 hover:bg-gray-100 rounded">
                Login
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <HiMenuAlt3 className="text-3xl cursor-pointer" onClick={() => setMobileMenuOpen(true)} />
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-0 right-0 h-screen w-5/6 md:w-2/5 bg-gray-900 bg-opacity-90 z-50 flex flex-col overflow-y-auto">
          {/* Close Button */}
          <div className="flex justify-between items-center p-6">
            <h2 className="text-lg font-bold text-white">Menu</h2>
            <MdClose className="text-2xl text-white cursor-pointer" onClick={() => setMobileMenuOpen(false)} />
          </div>

          {/* User Section */}
          <div className="px-6 pb-4 flex flex-col items-center">
            <img src={userIcon} alt="User" className="w-14 h-14 rounded-full border-2 border-white mb-4" />
            <Link to="/signup" className="w-full">
              <button className="w-full py-2 border border-white text-white bg-transparent font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition">
                Signup
              </button>
            </Link>
            <Link to="/login" className="w-full mt-3">
              <button className="w-full py-2 border border-white text-white bg-transparent font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition">
                Login
              </button>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="mt-4 space-y-4 px-6">
            {navLinks.map(({ id, label, icon }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className="flex items-center gap-3 w-full text-left text-white text-lg py-3 border-b border-gray-500"
              >
                {icon} {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;