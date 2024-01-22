// document.querySelector(".menu-btn").addEventListener("click", () => {
//   document.querySelector(".nav-menu").classList.toggle("show");
// });

let menuBtn = document.querySelector(".menu-btn");
let navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  navMenu.classList.toggle("show");
}



