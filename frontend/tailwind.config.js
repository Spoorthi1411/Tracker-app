/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // adjust if you're using different folders or file types
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

