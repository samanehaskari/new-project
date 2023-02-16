/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      sans: ["Vazirmatn", "sans-serif"],
      serif: ["Bhoma", "serif"],
    },

    extend: {
      colors: {
        primary: "#C60000",
        white: "#fff",
        "gray-light": "#FAFAFA",
        "gray-medium": "#EFEFEF",
        "header-border": "#E2E2E2",
        "border-1": "#F1F1F1",
        "gray-text": "#757575",
        "gray-dark": "#838383",
        shadow: "rgba(0, 0, 0, 0.6)",
      },
      boxShadow: {
        category: "-2px 4px 28px rgba(163, 163, 163, 0.05)",
        "filter-button": "4px 8px 24px rgba(198, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
