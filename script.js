// Functionalities
// Toggle Add/remove

const humburgerMenu = document.querySelector(".humburger");
const xMark = document.querySelector(".x-mark");
const bars = document.querySelector(".bars");
const navbar = document.querySelector("#navbar nav ul");
console.log(navbar);

humburgerMenu.addEventListener("click", () => {
  xMark.classList.toggle("active");
  bars.classList.toggle("active");
  navbar.classList.toggle("active");
});
