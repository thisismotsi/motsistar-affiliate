import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B1714",
        fg: "#E6F4EE",
        brand: {
          pink: "#F6A7C1",
          neon: "#39FF14",
          accent: "#1FBF84",
        },
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(57, 255, 20, 0.5)", // neon glow
      },
    },
  },
  plugins: [],
};

export default config;
