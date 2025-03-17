import { useState } from "react";
import { motion } from "framer-motion"; 
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { IoIosArrowDropup } from "react-icons/io"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const products = [
  { id: 1, name: "Product 1", image: "/assets/images/product1.png", category: "For cows and sheep", price: 100 },
  { id: 2, name: "Product 2", image: "/assets/images/product2.png", category: "For chickens", price: 200 },
  { id: 3, name: "Product 3", image: "/assets/images/product3.png", category: "For goats", price: 150 },
  { id: 4, name: "Product 4", image: "/assets/images/product4.png", category: "For crops", price: 300 },
  { id: 5, name: "Product 5", image: "/assets/images/product5.png", category: "For cows and sheep", price: 120 },
  { id: 6, name: "Product 6", image: "/assets/images/product6.png", category: "For poultry", price: 180 },
  { id: 7, name: "Product 7", image: "/assets/images/product7.png", category: "For dairy farming", price: 250 },
  { id: 8, name: "Product 8", image: "/assets/images/product8.png", category: "For all livestock", price: 400 },
];

const ShoppingPage = () => {
  const [cart, setCart] = useState({});

  // Calculate total items in the cart
  const cartCount = Object.values(cart).reduce((acc, quantity) => acc + quantity, 0);

  const updateQuantity = (id, amount) => {
    setCart((prevCart) => {
      const newQuantity = (prevCart[id] || 0) + amount;
      if (newQuantity < 0) return prevCart;
      return { ...prevCart, [id]: newQuantity };
    });
  };

  return (
    <>
      <Navbar cartCount={cartCount} />
      <div className="w-[90%] mx-auto mt-24 md:mt-32 lg:mt-40 mb-32"> 
        {/* Increased bottom margin (mb-32) to create space above the footer */}
        
        {/* Title & Subtitle (Left-Aligned with Vertical Border) */}
        <div className="mb-10">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500 border-l-4 border-red-500 pl-4">
            Welcome to our shop
          </h1>
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-400 pl-4 mt-1">
            Contact Sales for Inquiries
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-3 rounded-lg" // No shadow or background color
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-[140px] md:h-[220px] object-cover rounded-md"
              />
              <h3 className="mt-2 text-sm md:text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-xs md:text-sm text-gray-500">{product.category}</p>

              <div className="flex items-center justify-between mt-2">
                <span className="text-sm md:text-lg font-bold text-green-600">Ksh {product.price}</span>
                <div className="flex items-center gap-1 md:gap-2">
                  <MdOutlineArrowDropDownCircle
                    className="text-red-500 text-lg md:text-2xl cursor-pointer hover:text-red-700"
                    onClick={() => updateQuantity(product.id, -1)}
                  />
                  <span className="text-sm md:text-lg font-semibold w-5 text-center">{cart[product.id] || 0}</span>
                  <IoIosArrowDropup
                    className="text-green-500 text-lg md:text-2xl cursor-pointer hover:text-green-700"
                    onClick={() => updateQuantity(product.id, 1)}
                  />
                </div>
              </div>

              <button className="mt-2 w-full border border-gray-700 text-gray-700 py-1 md:py-2 text-center text-xs md:text-base font-semibold uppercase hover:bg-gray-700 hover:text-white transition">
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShoppingPage;