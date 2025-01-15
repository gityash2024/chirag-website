export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50",
        secondary: "#2E7D32",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
}
