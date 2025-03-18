import { motion } from "framer-motion";
import { FaHandPointer } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import mainBackground from "/src/assets/images/mainbackground.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative w-[95%] mx-auto h-[82vh] md:h-[86vh] flex items-center bg-cover bg-center rounded-b-[2rem] md:rounded-b-[3.8rem]"
      style={{ backgroundImage: `url(${mainBackground})` }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-40 rounded-b-[2rem] md:rounded-b-[3.8rem]"></div>

      {/* Content Section */}
      <div className="relative z-10 px-6 md:px-16 lg:px-28 text-left">
        <h2 className="text-white text-2xl md:text-3xl font-bold">
          Empowering Farmers
        </h2>
        <h1 className="text-3xl md:text-5xl font-extrabold text-black">
          All over <span className="text-red-500">Kenya</span>
        </h1>
        <h3 className="text-xl md:text-2xl font-medium text-orange-300">
          To get the best out of
        </h3>
        <h3 className="text-2xl md:text-3xl font-bold text-orange-600">
          their resources
        </h3>

        {/* Animated Tracking Button */}
        <motion.button
          className="mt-6 flex items-center gap-2 bg-red-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300"
          onClick={() => navigate("/resource-tracker")}
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        >
          <FaHandPointer className="text-2xl animate-bounce" />
          Tap to track your Resources (Animals & Crops)
        </motion.button>
      </div>
    </section>
  );
};

export default Home;
