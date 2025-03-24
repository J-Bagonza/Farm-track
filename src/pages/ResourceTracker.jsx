import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FaChartBar } from "react-icons/fa";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import cowImage from "../assets/images/cow.jpg";
import chickenImage from "../assets/images/chicken.jpg";
import goatImage from "../assets/images/goat.jpg";
import cropImage from "../assets/images/crop2.jpg"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/ResourceTracker.css";

const resourceOptions = [
  { name: "Cows", image: cowImage },
  { name: "Chickens", image: chickenImage },
  { name: "Goats", image: goatImage },
  { name: "Crops", image: cropImage },
];

const ResourceTracker = () => {
  const [selectedResource, setSelectedResource] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [duration, setDuration] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedResource || !quantity || !duration) {
      alert("Please fill in all fields.");
      return;
    }

    const quantityNum = parseInt(quantity, 10);
    const durationNum = parseInt(duration, 10);

    if (isNaN(quantityNum) || isNaN(durationNum) || quantityNum <= 0 || durationNum <= 0) {
      alert("Please enter valid numbers for quantity and duration.");
      return;
    }

    navigate("/tracking", {
      state: { resource: selectedResource.name, quantity: quantityNum, duration: durationNum },
    });
  };

  return (
    <>
      <Navbar />

      <section className="w-[90%] mx-auto mt-16 py-10">
        <div className="bg-gray-200 rounded-xl p-6 sm:p-8 shadow-md">
          {/* Title Section */}
          <div className="flex items-center justify-between mb-6 sm:mb-8 px-4 sm:px-10">
            {/* Red Line and Text */}
            <div className="flex items-center space-x-3 flex-1">
              <div className="border-l-4 border-red-500 pl-4">
                <h1 className="text-xl sm:text-3xl font-extrabold text-gray-800">
                  Welcome to the Resource Tracker!
                </h1>
                <h2 className="text-lg sm:text-2xl font-bold text-red-500">
                  Here to maximize
                </h2>
                <h2 className="text-lg sm:text-2xl font-bold text-green-500">
                  your produce
                </h2>
              </div>
            </div>

            {/* Chart Icon */}
            <div className="w-16 sm:w-28 h-16 sm:h-28 flex items-center justify-center">
              <FaChartBar className="text-blue-500 text-5xl sm:text-7xl animate-pulse" />
            </div>
          </div>

          {/* Tracking Form */}
          <form className="w-full sm:w-[90%] md:w-[80%] lg:w-[65%] mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
            {/* Resourc Dropdown */}
            <div className="relative mb-4" ref={dropdownRef}>
              <label className="block text-gray-700 font-semibold mb-2">
                Select Resource:
              </label>
              <div
                className="flex items-center justify-between border rounded-lg p-3 cursor-pointer bg-gray-100"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                {selectedResource ? (
                  <div className="flex items-center">
                    <img src={selectedResource.image} alt={selectedResource.name} className="w-8 h-8 object-cover rounded-full mr-3" />
                    <span className="text-gray-800 font-bold">{selectedResource.name}</span>
                  </div>
                ) : (
                  <span className="text-gray-500">Select Resource</span>
                )}
                <MdOutlineArrowDropDownCircle className="text-gray-600" />
              </div>

              {showDropdown && (
                <div className="absolute left-0 mt-2 w-full bg-white border shadow-md rounded-lg z-10">
                  {resourceOptions.map((resource) => (
                    <div
                      key={resource.name}
                      className="flex items-center p-3 hover:bg-gray-200 cursor-pointer border-b last:border-b-0"
                      onClick={() => {
                        setSelectedResource(resource);
                        setShowDropdown(false);
                      }}
                    >
                      <img src={resource.image} alt={resource.name} className="w-8 h-8 object-cover rounded-full mr-3" />
                      <span className="font-bold text-gray-800">{resource.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quantity Input */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Quantity:
              </label>
              <input
                type="number"
                placeholder="Enter Quantity"
                className="w-full border p-3 rounded-lg focus:outline-none"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            {/* Duration Input */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Tracking Duration (days):
              </label>
              <input
                type="number"
                placeholder="Tracking Duration (days)"
                className="w-full border p-3 rounded-lg focus:outline-none"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center hover:bg-green-700 transition duration-300"
            >
              Begin Tracking
              <GoGraph className="ml-2 text-xl" />
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ResourceTracker;