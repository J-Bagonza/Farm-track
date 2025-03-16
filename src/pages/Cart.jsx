import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import sadCart from "../assets/images/sadcart.png";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]); // Replace this with actual cart logic later

  return (
    <>
      <Navbar />
      <section className="w-[90%] mx-auto mt-32 py-10">
        {cartItems.length === 0 ? (
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700 text-left">You have nothing in cart...</h2>
            <img src={sadCart} alt="Empty Cart" className="mx-auto w-40 h-40 mt-6" />
            <p className="mt-4 text-lg text-gray-600">
              Go to <Link to="/shop" className="text-orange-500 font-bold hover:underline">Shopping Page</Link>...
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-green-600 mb-6">Your Cart</h2>
            <div className="bg-white shadow-lg rounded-lg p-6">
              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b py-4">
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">{item.name}</h3>
                      <p className="text-gray-500">{item.price}</p>
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-800 font-bold">Qty: {item.quantity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default CartPage;