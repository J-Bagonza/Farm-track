import { useState } from "react";
import { MdOutlineArrowDropDownCircle, MdOutlineArrowDropUpCircle } from "react-icons/md";
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

  const updateQuantity = (id, amount) => {
    setCart((prevCart) => {
      const newQuantity = (prevCart[id] || 0) + amount;
      if (newQuantity < 0) return prevCart;
      return { ...prevCart, [id]: newQuantity };
    });
  };

  return (
    <>
      <Navbar />
      <div className="w-[90%] mx-auto py-24">
        <h2 className="text-3xl font-bold mb-6 text-orange-500 border-l-4 border-red-500 pl-4">Shop Products</h2>
        <div className="grid grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="p-4 shadow-md rounded-lg bg-white hover:shadow-lg transition">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
              <h3 className="mt-3 text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.category}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-lg font-bold text-green-600">Ksh {product.price}</span>
                <div className="flex items-center gap-1">
                  <MdOutlineArrowDropDownCircle
                    className="text-red-500 text-2xl cursor-pointer"
                    onClick={() => updateQuantity(product.id, -1)}
                  />
                  <span className="text-lg font-semibold">{cart[product.id] || 0}</span>
                  <MdOutlineArrowDropUpCircle
                    className="text-green-500 text-2xl cursor-pointer"
                    onClick={() => updateQuantity(product.id, 1)}
                  />
                </div>
              </div>
              <button className="mt-3 w-full bg-blue-600 text-white py-2 text-center font-semibold uppercase hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShoppingPage;