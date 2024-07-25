/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        fill: "repeat(auto-fill, 170px)",
      },
      colors: {
        "bg-gray": "#1e1e1ea6",
        "custom-red": "#ff033e",
        "custom-black": "#37383e",
        "custom-light-gray": "#c8c8c8",
        "card-border": "rgba(51, 51, 51, 0.2)",
      },
    },
  },
  plugins: [],
};
