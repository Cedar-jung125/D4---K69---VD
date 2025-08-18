document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("menu-toggle");
  const menu = document.getElementById("navbar-menu");
  const specialPanel = document.getElementById("special-panel");
  const dropdowns = document.querySelectorAll(".dropdown");

  // Xử lý nút menu (3 sọc)
  toggleBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    specialPanel.classList.toggle("active");

    // Đóng menu chính nếu đang mở
    menu.classList.remove("active");
  });

  // Xử lý dropdown
  dropdowns.forEach((drop) => {
    const mainLink = drop.querySelector("a");

    mainLink.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        drop.classList.toggle("open");
      }
    });
  });

  // Đóng special panel khi click bên ngoài
  document.addEventListener("click", function () {
    specialPanel.classList.remove("active");
  });

  // Ngăn special panel đóng khi click bên trong nó
  specialPanel.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  // Hover effect cho desktop
  if (window.innerWidth > 768) {
    dropdowns.forEach((drop) => {
      drop.addEventListener("mouseenter", () => {
        drop.classList.add("open");
      });
      drop.addEventListener("mouseleave", () => {
        drop.classList.remove("open");
      });
    });
  }
});
