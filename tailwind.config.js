/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Body copy
        sans: ['"LTC Goudy Oldstyle Pro"', 'sans-serif'],
        // Headings
        serif: ['"Goudy Old Style Regular"', 'serif'],
      },
    },
  },
  plugins: [],
};
