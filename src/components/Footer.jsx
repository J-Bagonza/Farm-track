import logo from "../assets/images/logo.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-8 px-6 md:px-16">
      {/* Main Footer Content */}
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Left - Logo & Site Name */}
        <div className="flex items-center mb-6 md:mb-0">
          <img src={logo} alt="Farm-Track" className="w-12 h-12 mr-3" />
          <h2 className="text-xl font-bold">Farm-Track</h2>
        </div>

        {/* Center - Quick Links */}
        <div className="flex space-x-6 mb-6 md:mb-0">
          <a href="#home" className="hover:text-green-500 transition duration-300">Home</a>
          <a href="#about" className="hover:text-green-500 transition duration-300">About Us</a>
          <a href="#contact" className="hover:text-green-500 transition duration-300">Contact</a>
        </div>

        {/* Right - Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-green-500 transition duration-300">
            <FaFacebookF />
          </a>
          <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-green-500 transition duration-300">
            <FaTwitter />
          </a>
          <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-green-500 transition duration-300">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-full h-px bg-gray-700 my-6"></div>

      {/* Copyright Notice */}
      <p className="text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Farm-Track. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;