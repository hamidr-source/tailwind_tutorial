/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      transitionDuration: {
        2000: "2000ms",
      },
    },
  },
  plugins: [],
};
