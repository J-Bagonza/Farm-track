import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import contactUsLogo from "../assets/images/contactus.png";
import cowImage from "../assets/images/cow.jpg";
import { FaUser, FaPhone, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const funFacts = [
  { fact: "Cows have best friends and get stressed when separated.", color: "border-green-500" },
  { fact: "Goats have rectangular pupils, allowing them to see 340 degrees.", color: "border-orange-500" },
  { fact: "Chickens can remember over 100 different faces of people or animals.", color: "border-blue-500" },
  { fact: "Ducks sleep with one eye open to stay alert for predators.", color: "border-red-500" },
];

const shakeAnimation = {
  initial: { x: 0 },
  animate: { x: [-3, 3, -3], transition: { repeat: Infinity, duration: 0.3 } },
  stop: { x: 0, transition: { duration: 0.1 } },
};

const ContactUs = () => {
  const [animateFacts, setAnimateFacts] = useState(false);
  const [inputValues, setInputValues] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setTimeout(() => setAnimateFacts(true), 500);
  }, []);

  const handleChange = (field, value) => {
    setInputValues((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section
      id="contact"
      className="w-[90%] mx-auto mt-16 pb-32 py-16 bg-white rounded-3xl flex flex-col lg:flex-row items-center px-6 md:px-16 shadow-lg"
    >
      {/* Left: Contact Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:pr-16">
        <div className="flex items-center mb-6">
          <img src={contactUsLogo} alt="Contact Us" className="w-16 h-16 md:w-20 md:h-20 mr-4" />
          <div>
            <h2 className="text-xl md:text-3xl font-bold text-gray-800">Got more questions?</h2>
            <p className="text-green-600 text-sm md:text-lg">Reach out!</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="w-full max-w-lg space-y-4">
          {[
            { type: "text", placeholder: "Full Name", icon: <FaUser className="text-gray-600" />, field: "name", bg: "bg-orange-300" },
            { type: "tel", placeholder: "Phone Number", icon: <FaPhone className="text-gray-600" />, field: "phone", bg: "bg-red-300" },
            { type: "email", placeholder: "Email Address", icon: <FaEnvelope className="text-white text-lg" />, field: "email", bg: "bg-green-300" },
          ].map(({ type, placeholder, icon, field, bg }, index) => (
            <div key={index} className="flex border rounded-lg overflow-hidden h-12">
              <motion.span
                className={`${bg} w-12 h-full flex items-center justify-center`}
                animate={inputValues[field] ? "stop" : "animate"}
                variants={shakeAnimation}
              >
                {icon}
              </motion.span>
              <input
                type={type}
                placeholder={placeholder}
                className="w-full p-3 focus:outline-none text-sm"
                value={inputValues[field]}
                onChange={(e) => handleChange(field, e.target.value)}
              />
            </div>
          ))}

          <div className="flex items-start border rounded-lg overflow-hidden">
            <textarea
              placeholder="Your Message"
              className="w-full p-3 focus:outline-none resize-none h-32 text-sm"
              value={inputValues.message}
              onChange={(e) => handleChange("message", e.target.value)}
            ></textarea>
          </div>

          <button className="flex items-center justify-center w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300">
            <FaPaperPlane className="mr-2" />
            Send Message
          </button>
        </form>
      </div>

      {/* Right: Fun Facts Section */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex flex-col items-center">
        <div className="flex items-center gap-4">
          <img
            src={cowImage}
            alt="Cow Fun Fact"
            className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shadow-lg"
          />
          <h2 className="text-xl md:text-3xl font-extrabold text-orange-600 relative">
            Fun Fact!
            <span className="block w-20 md:w-24 h-1 bg-green-500 mx-auto mt-2 animate-pulse"></span>
          </h2>
        </div>

        {/* Fun Facts List */}
        <div className="mt-6 w-full grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-1">
          {funFacts.map((fact, index) => (
            <motion.div
              key={index}
              className={`flex items-center justify-center text-center p-2 md:p-3 bg-gray-100 rounded-lg shadow-md border-l-4 ${fact.color} h-24`}
              initial={{ opacity: 0, y: 20 }}
              animate={animateFacts ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <p className="text-gray-800 text-xs md:text-sm">{fact.fact}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
