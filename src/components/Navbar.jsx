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
  const [activeNav, setActiveNav] = useState("home"); // Tracks the active link for animation
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(".user-menu")) setUserDropdownOpen(false);
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  // Resize observer to update effect position dynamically
  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      const activeEl = document.querySelector("li.active");
      if (activeEl) {
        updateEffectPosition(activeEl);
      }
    });
    resizeObserver.observe(document.body);

    return () => resizeObserver.disconnect();
  }, []);

  const handleNavClick = (id, path) => {
    setMobileMenuOpen(false);
    setActiveNav(id); // Update active link for animation

    const activeEl = document.querySelector(`li[data-id="${id}"]`);
    if (activeEl) {
      updateEffectPosition(activeEl);
      makeParticles(activeEl); // Trigger particle animation
    }

    if (path && path.startsWith("/#")) {
      const targetId = path.split("#")[1];
      if (location.pathname === "/") {
        const section = document.getElementById(targetId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate("/", { state: { scrollTo: targetId } });
      }
    } else if (path) {
      navigate(path);
    }
  };

  // Particle Effect Logic
  const makeParticles = (element) => {
    const particleCount = 15;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("span");
      particle.className = "particle";
      particle.style = `
        --x: ${Math.random() * 100 - 50}px;
        --y: ${Math.random() * 100 - 50}px;
        --size: ${Math.random() * 8 + 4}px;
        --duration: ${Math.random() * 500 + 500}ms;
      `;
      element.appendChild(particle);

      // Remove particles after animation ends
      setTimeout(() => {
        particle.remove();
      }, 1000);
    }
  };

  const updateEffectPosition = (element) => {
    const pos = element.getBoundingClientRect();
    const effectElement = document.querySelector(".effect");
    if (effectElement) {
      effectElement.style.left = `${pos.x}px`;
      effectElement.style.top = `${pos.y}px`;
      effectElement.style.width = `${pos.width}px`;
      effectElement.style.height = `${pos.height}px`;
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
      <nav className="flex justify-between items-center bg-gray-100 bg-opacity-86 shadow-md w-[90%] md:w-[75%] mx-auto mt-4 py-2 px-6 rounded-full fixed top-0 left-1/2 transform -translate-x-1/2 z-50">
        {/* Left - Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <img src={logo} alt="Farm-Track logo" className="w-7 h-6" />
          <h1 className="text-base md:text-xl font-bold text-gray-700">Farm-Track</h1>
        </div>

        {/* Center - Desktop Navigation */}
        <ul className="hidden md:flex gap-10">
          {navLinks.map(({ id, label, path }) => (
            <li
              key={id}
              data-id={id}
              className={`relative nav-link ${activeNav === id ? "active" : ""}}
              onClick={() => handleNavClick(id, path)}
            >
              {label}
            </li>
          ))}
        </ul>

        {/* Right - Cart & User */}
        <div className="flex items-center gap-6">
          <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
            <img src={cartIcon} alt="Cart" className="w-10 h-10" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2">
                {cartCount}
              </span>
            )}
          </div>

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

          <div className="md:hidden">
            <HiMenuAlt3 className="text-3xl cursor-pointer" onClick={() => setMobileMenuOpen(true)} />
          </div>
        </div>
      </nav>

      <div className="effect"></div>

      {mobileMenuOpen && (
        <div className="fixed top-0 right-0 h-screen w-3/4 bg-gray-900 bg-opacity-90 z-50 flex flex-col text-white">
          {/* Mobile menu content */}
        </div>
      )}

      {loginModalOpen && <LoginModal isOpen={loginModalOpen} onClose={() => setLoginModalOpen(false)} />}
      {signupModalOpen && <SignupModal isOpen={signupModalOpen} onClose={() => setSignupModalOpen(false)} />}
    </>
  );
};

export default Navbar;