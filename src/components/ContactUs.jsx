import contactUsLogo from "../assets/images/contactus.png";
import { FaUser, FaPhone, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section id="contact" className="w-full py-16 bg-white flex flex-col items-center text-center px-6 md:px-16">
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
        {/* Name Input */}
        <div className="flex items-center border rounded-lg overflow-hidden mb-4">
          <span className="bg-gray-200 p-3">
            <FaUser className="text-gray-600" />
          </span>
          <input type="text" placeholder="Full Name" className="w-full p-3 focus:outline-none" />
        </div>

        {/* Phone Input */}
        <div className="flex items-center border rounded-lg overflow-hidden mb-4">
          <span className="bg-gray-200 p-3">
            <FaPhone className="text-gray-600" />
          </span>
          <input type="tel" placeholder="Phone Number" className="w-full p-3 focus:outline-none" />
        </div>

        {/* Email Input */}
        <div className="flex items-center border rounded-lg overflow-hidden mb-4">
          <span className="bg-gray-200 p-3">
            <FaEnvelope className="text-gray-600" />
          </span>
          <input type="email" placeholder="Email Address" className="w-full p-3 focus:outline-none" />
        </div>

        {/* Message Input */}
        <div className="flex items-start border rounded-lg overflow-hidden mb-4">
          <span className="bg-gray-200 p-3">
            <FaEnvelope className="text-gray-600" />
          </span>
          <textarea placeholder="Your Message" className="w-full p-3 focus:outline-none resize-none h-32"></textarea>
        </div>

        {/* Send Button */}
        <button className="flex items-center justify-center w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300">
          <FaPaperPlane className="mr-2" />
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactUs;