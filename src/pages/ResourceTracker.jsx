import { useState } from "react";
import { FaCaretDown, FaChartBar } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import cowImage from "../assets/images/cow.jpg";
import chickenImage from "../assets/images/chicken.jpg";
import goatImage from "../assets/images/goat.jpg";
import cropImage from "/src/assets/images/crop2.jpg";
import "../styles/ResourceTracker.css"; // Add styles for animations

const resourceOptions = [
  { name: "Cows", image: cowImage },
  { name: "Chickens", image: chickenImage },
  { name: "Goats", image: goatImage },
  { name: "Crops", image: cropImage },
];

const ResourceTracker = () => {
  const [selectedResource, setSelectedResource] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [quantity, setQuantity] = useState("");
  const [duration, setDuration] = useState("");

  return (
    <section className="w-[90%] mx-auto py-16">
      {/* Header and Graph Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        {/* Text Content */}
        <div>
          <h1 className="text-3xl font-extrabold text-gray-800">
            Welcome to the Resource Tracker!
          </h1>
          <h2 className="text-2xl font-bold text-red-500">Here to maximize</h2>
          <h2 className="text-2xl font-bold text-green-500">your produce</h2>
        </div>

        {/* Animated Chart Bar */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          <FaChartBar className="text-blue-500 text-6xl chart-animation" />
        </div>
      </div>

      {/* Tracking Form */}
      <form className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
        {/* Resource Selection Dropdown */}
        <div className="relative mb-4">
          <div
            className="flex items-center justify-between border rounded-lg p-3 cursor-pointer bg-gray-100"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {selectedResource ? (
              <div className="flex items-center">
                <img
                  src={selectedResource.image}
                  alt={selectedResource.name}
                  className="w-8 h-8 object-cover rounded-full mr-3"
                />
                <span className="text-gray-800 font-bold">{selectedResource.name}</span>
              </div>
            ) : (
              <span className="text-gray-500">Select Resource</span>
            )}
            <FaCaretDown className="text-gray-600" />
          </div>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute left-0 mt-2 w-full bg-white border shadow-md rounded-lg z-10">
              {resourceOptions.map((resource, index) => (
                <div
                  key={index}
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
          <input
            type="number"
            placeholder="Enter Quantity"
            className="w-full border p-3 rounded-lg focus:outline-none"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        {/* Tracking Duration Input */}
        <div className="mb-4">
          <input
            type="number"
            placeholder="Tracking Duration (days)"
            className="w-full border p-3 rounded-lg focus:outline-none"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <button className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center hover:bg-green-700 transition duration-300">
          Begin Tracking
          <GoGraph className="ml-2 text-xl" />
        </button>
      </form>
    </section>
  );
};

export default ResourceTracker;