/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#090909",
        card: "#111111",
        cardSecondary: "#171717",
        primaryText: "#FFFFFF",
        secondaryText: "#A1A1AA",
        mutedText: "#71717A",
        accent: "#7C3AED",
        accentHover: "#8B5CF6",
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      maxWidth: {
        '7xl': '1240px',
      },
    },
  },
  plugins: [],
}
