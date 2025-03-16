import aboutUsLogo from "../assets/images/aboutus.png";

const AboutUs = () => {
  return (
    <section id="about" className="w-[90%] mx-auto mt-16 py-16 bg-gray-100 rounded-3xl px-6 md:px-16">
      {/* Logo & Title - On the Same Line */}
      <div className="flex items-center gap-4 mb-6">
        <img src={aboutUsLogo} alt="About Us" className="w-16 h-16 md:w-20 md:h-20" />
        <h2 className="text-2xl md:text-3xl font-bold text-brown-600 relative">
          Why Us?
          <span className="block w-16 h-1 bg-green-500 mt-2"></span>
        </h2>
      </div>

      {/* Description */}
      <p className="text-gray-700 max-w-3xl">
        At Farm-Track, we empower farmers by providing accurate tracking and analysis of their
        agricultural produce. Our platform helps farmers monitor production trends, identify
        potential issues early, and take action to optimize their resources for better yields.
      </p>

      {/* Three Feature Sections */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Benefits Section */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold text-green-700">Benefits</h3>
          <ul className="mt-2 text-gray-700 list-disc list-inside">
            <li>Real-time tracking of produce</li>
            <li>Increased productivity</li>
            <li>Early issue detection</li>
            <li>Better resource management</li>
          </ul>
        </div>

        {/* Brain Power Section */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold text-orange-600">Brain Power</h3>
          <p className="mt-2 text-gray-700">
            Learn data-driven farming techniques, improve efficiency, and gain insights from experts.
          </p>
        </div>

        {/* Cost Section */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold text-red-600">Cost</h3>
          <p className="mt-2 text-gray-700">
            Reduce losses, maximize profits, and save money with smart farm management tools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;