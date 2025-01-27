//Navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const navMenu = document.querySelector("#nav-menu");
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Inisialisasi AOS
AOS.init({
  duration: 800, // Durasi animasi 0.8 detik
  delay: 200, // Delay sebelum animasi dimulai
  once: false, // Animasi hanya akan dijalankan sekali
  offset: 300,
});

// npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
