import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { MdClose, MdInfoOutline } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiHome3Line, RiContactsLine } from "react-icons/ri";
import { SiHappycow } from "react-icons/si"; // VetConnect Icon
import logo from "../assets/images/logo.png";
import userIcon from "../assets/images/user.png";
import cartIcon from "../assets/images/shoppingbasket.png";
import LoginModal from "/src/components/LoginModal.jsx";
import SignupModal from "/src/components/SignupModal.jsx";

const Navbar = ({ cartCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(".user-menu")) setUserDropdownOpen(false);
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  // Handle navigation and smooth scrolling
  const handleNavClick = (id, path) => {
    setMobileMenuOpen(false);
    if (path && path.startsWith("/#")) {
      // Scroll to the section on the current page
      const targetId = path.split("#")[1];
      if (location.pathname === "/") {
        const section = document.getElementById(targetId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to the home page and scroll to the section
        navigate("/", { state: { scrollTo: targetId } });
      }
    } else if (path) {
      navigate(path);
    }
  };

  const navLinks = [
    { id: "home", label: "Home", icon: <RiHome3Line className="text-2xl text-green-400" />, path: "/" },
    { id: "about", label: "About Us", icon: <MdInfoOutline className="text-2xl text-blue-400" />, path: "/#about" },
    { id: "contact", label: "Contact", icon: <RiContactsLine className="text-2xl text-orange-400" />, path: "/#contact" },
    { id: "vetconnect", label: "VetConnect", icon: <SiHappycow className="text-2xl text-purple-400" />, path: "/vetconnect" },
  ];

  return (
    <>
      <nav className="flex justify-between items-center bg-gray-100 bg-opacity-85 shadow-md w-[90%] md:w-[75%] mx-auto mt-4 py-2 px-6 rounded-full fixed top-0 left-1/2 transform -translate-x-1/2 z-50">
        {/* Left - Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <img src={logo} alt="Farm-Track logo" className="w-7 h-6" />
          <h1 className="text-base md:text-xl font-bold text-gray-700">Farm-Track</h1>
        </div>

        {/* Center - Desktop Navigation */}
        <div className="hidden md:flex gap-10">
          {navLinks.map(({ id, label, path }) => (
            <button key={id} onClick={() => handleNavClick(id, path)} className="hover:text-green-600 relative">
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
                <button
                  className="block text-center py-2 text-gray-700 hover:bg-gray-100 rounded w-full"
                  onClick={() => setSignupModalOpen(true)}
                >
                  Signup
                </button>
                <hr className="my-2 border-gray-300" />
                <button
                  className="block text-center py-2 text-gray-700 hover:bg-gray-100 rounded w-full"
                  onClick={() => setLoginModalOpen(true)}
                >
                  Login
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <HiMenuAlt3 className="text-3xl cursor-pointer" onClick={() => setMobileMenuOpen(true)} />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-0 right-0 h-screen w-3/4 bg-gray-900 bg-opacity-90 z-50 flex flex-col text-white">
          <div className="flex justify-between items-center p-6">
            <h2 className="text-lg font-bold">Menu</h2>
            <MdClose className="text-2xl cursor-pointer" onClick={() => setMobileMenuOpen(false)} />
          </div>
          <div className="flex items-center flex-col mb-4">
            <img src={userIcon} alt="User" className="w-14 h-14 rounded-full border-2 border-white mb-3" />
            <button
              className="w-36 py-2 border border-white text-white rounded-full mb-2 hover:bg-white hover:text-black"
              onClick={() => {
                setSignupModalOpen(true);
                setMobileMenuOpen(false);
              }}
            >
              Signup
            </button>
            <button
              className="w-36 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black"
              onClick={() => {
                setLoginModalOpen(true);
                setMobileMenuOpen(false);
              }}
            >
              Login
            </button>
          </div>
          <div className="px-6">
            {navLinks.map(({ id, label, icon, path }) => (
              <div key={id}>
                <button
                  onClick={() => handleNavClick(id, path)}
                  className="flex items-center gap-3 text-lg py-3 text-white hover:text-green-400"
                >
                  {icon} {label}
                </button>
                <hr className="border-gray-600" /> {/* Divider under each link */}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modals */}
      {loginModalOpen && <LoginModal isOpen={loginModalOpen} onClose={() => setLoginModalOpen(false)} />}
      {signupModalOpen && <SignupModal isOpen={signupModalOpen} onClose={() => setSignupModalOpen(false)} />}
    </>
  );
};

export default Navbar;