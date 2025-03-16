import mainBackground from "../assets/mainbackground.png";

const Home = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${mainBackground}) `}}
    >
      {/* Overlay to improve text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Text Content */}
      <div className="relative z-10 text-left px-10 md:px-20 lg:px-32">
        <h2 className="text-orange-600 text-xl md:text-2xl font-bold">
          Empowering Farmers
        </h2>
        <h1 className="text-3xl md:text-5xl font-extrabold text-black">
          All over <span className="text-green-600">Kenya</span>
        </h1>
        <h3 className="text-xl md:text-2xl font-medium text-orange-600">
          To get the best out of
        </h3>
        <h3 className="text-2xl md:text-3xl font-bold text-green-600">
          their resources
        </h3>

        {/* Tracking Button */}
        <button className="mt-6 bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300">
          Tap to track your Resources i.e. Animals...
        </button>
      </div>
    </section>
  );
};

export default Home;