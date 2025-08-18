document.querySelectorAll(".locked-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    alert(
      "Hệ thống này sẽ ra mắt vào ngày 01/01/2025. Xin vui lòng quay lại sau!"
    );
  });
});
