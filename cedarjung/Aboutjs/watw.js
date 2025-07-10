document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("menu-toggle");
  const menu = document.getElementById("navbar-menu");
  const dropdowns = document.querySelectorAll(".dropdown");

  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  dropdowns.forEach((drop) => {
    const mainLink = drop.querySelector("a");
    mainLink.addEventListener("click", function (e) {
      e.preventDefault();
      drop.classList.toggle("open");
    });
  });
});
