/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        "primary-500": "hsl(209, 23%, 22%)",
        "primary-600": "hsl(207, 26%, 17%)",
        "primary-700": "hsl(200, 15%, 8%)",
        "secondary-500": "hsl(0, 0%, 52%)",
        "secondary-100": "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      },
      screens: {
        sm: "475px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
