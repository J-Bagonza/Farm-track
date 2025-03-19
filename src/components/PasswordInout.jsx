import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const PasswordInput = ({ value, onChange, placeholder = "Password" }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-lg pr-10"
        value={value}
        onChange={onChange}
        required
      />
      <button
        type="button"
        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <MdVisibilityOff size={20} /> : <MdVisibility size={20} />}
      </button>
    </div>
  );
};

export default PasswordInput;