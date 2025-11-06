const menu = document.querySelector(".hamburger");

const offScreenMenu = document.querySelector(".off-screen-menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});