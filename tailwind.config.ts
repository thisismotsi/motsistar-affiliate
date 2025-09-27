/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette
        ivory: "#fffefc",
        beige: "#f5f0e8",
        charcoal: "#333333",
        gold: "#FFD700",
        navy: "#1a1f3b",
        // Optional dark variants
        darkIvory: "#f5f5f5",
        darkCharcoal: "#e0e0e0",
        darkBeige: "#2a2f4a",
      },
      fontFamily: {
        heading: ["var(--font-inter)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 4px 20px rgba(0, 0, 0, 0.08)",
        darkGlow: "0 4px 20px rgba(255, 215, 0, 0.15)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
