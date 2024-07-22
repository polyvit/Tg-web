/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        fill: "repeat(auto-fill, 170px)",
      },
    },
  },
  plugins: [],
};
