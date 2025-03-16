import aboutUsLogo from "../assets/images/aboutus.png";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 bg-gray-100 flex flex-col items-center text-center px-6 md:px-16">
      {/* Logo */}
      <img src={aboutUsLogo} alt="About Us" className="w-16 h-16 md:w-20 md:h-20 mb-4" />

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-brown-600 relative">
        Why Us?
        <span className="block w-16 h-1 bg-green-500 mx-auto mt-2"></span>
      </h2>

      {/* Description */}
      <p className="mt-4 text-gray-700 max-w-3xl">
        At Farm-Track, we empower farmers by providing accurate tracking and analysis of their
        agricultural produce. Our platform helps farmers monitor production trends, identify
        potential issues early, and take action to optimize their resources for better yields.
      </p>
    </section>
  );
};

export default AboutUs;