import { useState } from "react";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import PasswordInput from "./PasswordInput";

const LoginModal = ({ isOpen, onClose, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        exit={{ opacity: 0, y: -50 }} 
        className="bg-white p-6 rounded-lg shadow-lg w-96 relative"
      >
        <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>
          <MdClose size={24} />
        </button>
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
            Login
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginModal;