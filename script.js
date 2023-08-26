const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const sideMenu = document.querySelector("aside");
const themeToggler = document.querySelector(".theme-toggler");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

window.onload = () => {
  sun.style.display = "none";
};

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  if (moon.style.display === "none") {
    moon.style.display = "inline-block";
    sun.style.display = "none";
  } else {
    moon.style.display = "none";
    sun.style.display = "inline-block";
  }
});
