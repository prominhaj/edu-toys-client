/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "footer-img": "url('../../../assets/Footer Img/Footer-Bg.png')",
      },
    },
  },
  plugins: [],
};
