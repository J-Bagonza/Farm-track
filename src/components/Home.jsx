import mainBackground from "/src/assets/images/mainbackground.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="relative w-[98%] mx-auto h-[86vh] flex items-center bg-cover bg-center rounded-b-[3.8rem]"
      style={{ backgroundImage: `url(${mainBackground}) `}}
    >
      {/* Overlay to improve text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-30 rounded-b-[3.8rem]"></div>

      {/* Text Content */}
      <div className="relative z-10 text-left px-10 md:px-20 lg:px-32">
        <h2 className="text-white text-xl md:text-4xl font-bold">
          Empowering Farmers
        </h2>
        <h1 className="text-3xl md:text-6xl font-extrabold text-black">
          All over <span className="text-red-500">Kenya</span>
        </h1>
        <h3 className="text-xl md:text-3xl font-medium text-orange-300">
          To get the best out of
        </h3>
        <h3 className="text-2xl md:text-3xl font-bold text-green-900">
          their resources
        </h3>

        {/* Tracking Button */}
        <button className="mt-6 bg-red-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300">
          Tap to track your Resources i.e. Animals...
        </button>
      </div>
    </section>
  );
};

export default Home;