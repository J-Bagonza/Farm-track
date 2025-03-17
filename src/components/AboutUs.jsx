import { motion } from "framer-motion";
import aboutUsLogo from "../assets/images/aboutus.png";

const AboutUs = () => {
  return (
    <section id="about" className="w-[90%] mx-auto mt-16 py-16 bg-gray-100 rounded-3xl px-6 md:px-16">
      {/* Logo & Title */}
      <div className="flex items-center gap-4 mb-6">
        <img src={aboutUsLogo} alt="About Us" className="w-14 h-14 md:w-20 md:h-20" />
        <h2 className="text-xl md:text-3xl font-bold text-brown-600 relative">
          Why Us?
          <span className="block w-16 h-1 bg-green-500 mt-2"></span>
        </h2>
      </div>

      {/* Description */}
      <p className="text-gray-700 max-w-3xl text-sm md:text-base">
        At Farm-Track, we empower farmers by providing accurate tracking and analysis of their
        agricultural produce. Our platform helps farmers monitor production trends, identify
        potential issues early, and take action to optimize their resources for better yields.
      </p>

      {/* Features Grid - 2 columns on small screens, 4 on larger */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { title: "Benefits", color: "text-green-700", items: ["Real-time tracking", "Increased productivity", "Early issue detection", "Better management"] },
          { title: "Brain Power", color: "text-orange-600", text: "Learn data-driven farming techniques, improve efficiency, and gain insights from experts." },
          { title: "Cost", color: "text-red-600", text: "Reduce losses, maximize profits, and save money with smart farm management tools." },
          { title: "Affordable Shopping", color: "text-blue-600", text: "Get quality farm products at the best prices, ensuring affordability and convenience." },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white p-4 md:p-6 rounded-2xl shadow-md text-center"
          >
            <h3 className={`text-sm md:text-xl font-semibold ${feature.color}`}>{feature.title}</h3>
            {feature.items ? (
              <ul className="mt-2 text-xs md:text-base text-gray-700 list-disc list-inside">
                {feature.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-xs md:text-base text-gray-700">{feature.text}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;