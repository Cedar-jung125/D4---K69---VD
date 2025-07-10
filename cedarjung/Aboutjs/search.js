document.querySelector(".search-button").addEventListener("click", function () {
  const keyword = document.querySelector(".search-input").value;
  alert(`Bạn đang tìm: "${keyword}"`); // Thay bằng hàm tìm kiếm thực tế
});

// Hoặc tìm kiếm khi nhấn Enter
document
  .querySelector(".search-input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const keyword = this.value;
      alert(`Tìm kiếm: "${keyword}"`);
    }
  });
