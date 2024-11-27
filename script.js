const humburgerMenu = document.querySelector(".humburger");
const xMark = document.querySelector(".x-mark");
const bars = document.querySelector(".bars");
const listItems = document.querySelector("#navbar nav ul");

humburgerMenu.addEventListener("click", function () {
  xMark.classList.toggle("active");
  bars.classList.toggle("active");
  listItems.classList.toggle("active");
});
