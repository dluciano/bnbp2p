const { addIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "linaria-theme_palette-rausch": "var(--linaria-theme_palette-rausch)",
        "linaria-theme_palette-rausch-contrast": "var(--linaria-theme_palette-rausch-contrast)",
        "linaria-theme_palette-bebe": "var(--linaria-theme_palette-bebe)",
        "header_brand-color": "var(--linaria-theme_palette-rausch)",
      },
    },
  },
  plugins: [addIconSelectors(["carbon"])],
};
