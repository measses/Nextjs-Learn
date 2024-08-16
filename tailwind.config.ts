import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      colors: {
        mysage: {
          DEFAULT: "#CCD5AE",
          dark: "#A0A88B", // Dark mode için daha koyu ton
        },
        mybeige: {
          DEFAULT: "#E0E5B6",
          dark: "#B4B98F", // Dark mode için daha koyu ton
        },
        mypastel: {
          DEFAULT: "#FAEDCE",
          dark: "#C8BEA6", // Dark mode için daha koyu ton
        },
        mylight: {
          DEFAULT: "#FEFAE0",
          dark: "#CCCAB4", // Dark mode için daha koyu ton
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
