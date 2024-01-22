// document.querySelector(".menu-btn").addEventListener("click", () => {
//   document.querySelector(".nav-menu").classList.toggle("show");
// });

let menuBtn = document.querySelector(".menu-btn");
let navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", toggleMenu);

// event listener for the window
window.addEventListener("click", closeMenu);

// function to close the menu
function toggleMenu(event) {
  event.stopPropagation();
  navMenu.classList.toggle("show");
}

function closeMenu(e) {
  navMenu.classList.remove("show");
}



