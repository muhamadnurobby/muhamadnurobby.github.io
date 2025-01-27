/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"], // Pastikan path ini sesuai dengan file Anda
  theme: {
    extend: {
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },
      container: {
        center: true,
        padding: "13px",
      },
      colors: {
        primary: "#f51616",
        secondary: "#2C3031",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [], // Tidak ada plugin tambahan
};
