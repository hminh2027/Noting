/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "daisy-bush": {
          50: "#f5f4fe",
          100: "#eeeafd",
          200: "#ded8fc",
          300: "#c6b8fa",
          400: "#a990f5",
          500: "#8f63ef",
          600: "#7f42e5",
          700: "#7030d1",
          800: "#5d28af",
          900: "#4f2392",
        },
        "aqua-haze": {
          50: "#f6f9fa",
          100: "#ebf1f3",
          200: "#d2e2e5",
          300: "#aac9cf",
          400: "#7dabb3",
          500: "#5c909b",
          600: "#487681",
          700: "#3b6069",
          800: "#345058",
          900: "#2f454b",
        },
      },
    },
  },
  plugins: [],
};
