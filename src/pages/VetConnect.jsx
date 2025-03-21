import { motion } from "framer-motion";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineAddLocationAlt, MdOutlineMoreTime } from "react-icons/md";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const doctors = [
  {
    name: "Dr. John Doe",
    specialization: "Large animal specialist - Cattle, Sheep, Goats",
    location: "Nairobi, Kenya",
    phone: "+254 712 345 678",
    experience: "xp 10 years",
  },
  {
    name: "Dr. Jane Smith",
    specialization: "Poultry diseases & management",
    location: "Kisumu, Kenya",
    phone: "+254 722 987 654",
    experience: "xp 8 years",
  },
  {
    name: "Dr. David Brown",
    specialization: "Dairy cow nutrition & fertility",
    location: "Mombasa, Kenya",
    phone: "+254 733 234 567",
    experience: "xp 12 years",
  },
  {
    name: "Dr. Emily White",
    specialization: "Equine medicine & surgery",
    location: "Nakuru, Kenya",
    phone: "+254 700 876 543",
    experience: "xp 9 years",
  },
  {
    name: "Dr. Michael Green",
    specialization: "Swine health & production",
    location: "Eldoret, Kenya",
    phone: "+254 711 345 890",
    experience: "xp 7 years",
  },
  {
    name: "Dr. Sarah Lee",
    specialization: "Small ruminant diseases & treatment",
    location: "Nyeri, Kenya",
    phone: "+254 799 123 456",
    experience: "xp 11 years",
  },
  {
    name: "Dr. Tom Williams",
    specialization: "Veterinary public health & zoonotic diseases",
    location: "Meru, Kenya",
    phone: "+254 788 654 321",
    experience: "xp 14 years",
  },
  {
    name: "Dr. Anna Kim",
    specialization: "Companion animal medicine & surgery",
    location: "Nairobi, Kenya",
    phone: "+254 701 789 012",
    experience: "xp 6 years",
  },
];

const VetConnect = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow max-w-7xl mx-auto p-6 mt-20 mb-10">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">VetConnect</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              className="relative bg-gradient-to-b from-purple-300 to-orange-200 shadow-lg rounded-lg p-5 flex flex-col gap-3 border-t-4 border-gray-900 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.3)" }}
            >
              <div className="flex items-center gap-3">
                <FaUserDoctor className="text-4xl text-gray-900" />
                <h2 className="text-xl font-semibold text-gray-800">{doctor.name}</h2>
              </div>
              <p className="text-gray-700">{doctor.specialization}</p>
              <div className="flex justify-between text-sm text-gray-800 mt-2">
                <div className="flex items-center gap-2">
                  <MdOutlineAddLocationAlt className="text-red-500 text-lg" />
                  <span>{doctor.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <LiaPhoneVolumeSolid className="text-green-500 text-lg" />
                  <span>{doctor.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineMoreTime className="text-orange-500 text-lg" />
                  <span>{doctor.experience}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VetConnect;
