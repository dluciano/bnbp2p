/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "header_brand-color": "var(--header_brand-color)",
      },
    },
  },
  plugins: [],
};
