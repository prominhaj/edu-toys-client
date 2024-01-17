/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",   'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {
      backgroundImage: {
        "footer-img": "url('../../../assets/Footer Img/Footer-Bg.png')",
      },
    },
  },
  plugins: [require('flowbite/plugin'),],
};
