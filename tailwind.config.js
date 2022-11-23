/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryDark: "#01B489",
        primaryLight: "#1BE59D",
        textSecondary: "#444F55",
        accent:"rgba(68, 79, 85, 1)",
        accentLight: "#444F55",
        bgAccent:"#F1F1F1"
        muted: "#7D7C7C",
      },
      fontFamily: {
        body: ["Poppins"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
