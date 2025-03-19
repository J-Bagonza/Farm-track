/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "gradient-border": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "border-spin": {
          "100%": { transform: "rotate(-360deg)" },
        },
      },
      animation: {
        gradientBorder: "gradient-border 4s infinite",
        borderSpin: "border-spin 7s linear infinite",
      },
    },
  },
  plugins: [],
};
