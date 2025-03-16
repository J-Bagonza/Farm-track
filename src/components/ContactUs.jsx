import contactUsLogo from "../assets/images/contactus.png";
import cowImage from "../assets/images/cow.jpg";
import { FaUser, FaPhone, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { useEffect, useState } from "react";

const funFacts = [
  { fact: "Cows have best friends and get stressed when separated.", color: "border-green-500" },
  { fact: "Goats have rectangular pupils, allowing them to see 340 degrees.", color: "border-orange-500" },
  { fact: "Chickens can remember over 100 different faces of people or animals.", color: "border-blue-500" },
  { fact: "Ducks sleep with one eye open to stay alert for predators.", color: "border-red-500" },
];

const ContactUs = () => {
  const [animateFacts, setAnimateFacts] = useState(false);

  useEffect(() => {
    // Start animation after a small delay when component mounts
    setTimeout(() => setAnimateFacts(true), 500);
  }, []);

  return (
    <section id="contact" className="w-[90%] mx-auto mt-16 py-16 bg-white rounded-3xl flex flex-col lg:flex-row items-center px-6 md:px-16 shadow-lg">
      {/* Left: Contact Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:pr-16">
        {/* Logo and Title */}
        <div className="flex items-center mb-6">
          <img src={contactUsLogo} alt="Contact Us" className="w-16 h-16 md:w-20 md:h-20 mr-4" />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Got more questions?</h2>
            <p className="text-green-600 text-lg">Reach out!</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="w-full max-w-lg">
          <div className="flex  border rounded-lg overflow-hidden mb-4 h-12">
            <span className="bg-orange-300 w-12 h-full flex items-center justify-center">
              <FaUser className="text-gray-600" />
            </span>
            <input type="text" placeholder="Full Name" className="w-full p-3 focus:outline-none" />
          </div>

          <div className="flex  border rounded-lg overflow-hidden mb-4 h-12">
            <span className="bg-red-300 w-12 h-full flex items-center justify-center">
              <FaPhone className="text-gray-600" />
            </span>
            <input type="tel" placeholder="Phone Number" className="w-full p-3 focus:outline-none" />
          </div>

          <div className="flex border rounded-lg overflow-hidden mb-4 h-12">
             <span className="bg-green-300 w-12 h-full flex items-center justify-center">
                <FaEnvelope className="text-white text-lg" />
            </span>
            <input type="email" placeholder="Email Address" className="w-full p-3 focus:outline-none" />
         </div>

          <div className="flex items-start border rounded-lg overflow-hidden mb-4">
            
            <textarea placeholder="Your Message" className="w-full p-3 focus:outline-none resize-none h-32"></textarea>
          </div>

          <button className="flex items-center justify-center w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300">
            <FaPaperPlane className="mr-2" />
            Send Message
          </button>
        </form>
      </div>

      {/* Right: Fun Facts Section */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex flex-col items-center">
        {/* Image and Title on the same line */}
        <div className="flex items-center gap-4">
          <img src={cowImage} alt="Cow Fun Fact" className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover shadow-lg" />
          <h2 className="text-2xl md:text-3xl font-extrabold text-orange-600 relative">
            Fun Fact!
            <span className="block w-24 h-1 bg-green-500 mx-auto mt-2 animate-pulse"></span>
          </h2>
        </div>

        {/* Fun Facts List with Constant Animation */}
        <div className="mt-6 w-full flex flex-col gap-4">
          {funFacts.map((fact, index) => (
            <div
              key={index}
              className={`flex items-center p-4 bg-gray-100 rounded-xl shadow-md border-l-4 ${fact.color} opacity-0 transform translate-y-6 transition-all duration-700 ease-out ${
                animateFacts ? `opacity-100 translate-y-0 delay-${index * 200}` : ""
              }`}
              style={{ animation: `dropAnimation 0.6s ease-out ${index * 0.5}s forwards` }}
            >
              <p className="text-gray-800 text-lg">{fact.fact}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Drop Animation (CSS) */}
      <style>
        {`
          @keyframes dropAnimation {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default ContactUs;