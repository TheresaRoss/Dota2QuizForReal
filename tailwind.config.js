/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 0.1s ease-in-out infinite ",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-8deg)", transform: "scale(105%)" },
          "50%": { transform: "rotate(8deg)" },
        },
      },
    },
  },
  plugins: [],
};
