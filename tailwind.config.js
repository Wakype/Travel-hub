/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#00A9FF",
        primaryHover: "#0089DF",
        secondary: "#89CFF3",
        third: "#A0E9FF",
        fourth: "#CDF5FD",
        hitam: "#4A4A4A",
        abu: "#CECECE",
      },
      backgroundColor: {
        primary: "#00A9FF",
        primaryHover: "#0089DF",
        secondary: "#89CFF3",
        third: "#A0E9FF",
        fourth: "#CDF5FD",
        hitam: "#4A4A4A",
        abu: "#CECECE",
      },
    },
  },
  plugins: [],
};
