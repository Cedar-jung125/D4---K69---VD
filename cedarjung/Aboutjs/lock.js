document.addEventListener("DOMContentLoaded", function () {
  // Tạo popup HTML
  const popupHTML = `
    <div id="comingSoonPopup" class="coming-soon-popup">
        <div class="popup-content">
            <div class="popup-header">
                THÔNG BÁO
            </div>
            <div class="popup-body">
                <div class="popup-image">
                    <img src="img/commingsoon.webp" alt="Coming Soon" id="popupImage">
                </div>
                <div class="popup-message">
                    Tính năng đang được phát triển và sẽ ra mắt vào ngày
                </div>
                <div class="popup-date" id="releaseDate">02/01/2026</div>
                <button class="popup-close">ĐÓNG</button>
            </div>
        </div>
    </div>`;

  // Thêm popup vào body
  document.body.insertAdjacentHTML("beforeend", popupHTML);

  // Xử lý sự kiện click
  document.querySelectorAll(".locked-feature a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Cập nhật ngày ra mắt
      const releaseDate = new Date("2026-01-01");
      const options = { day: "2-digit", month: "2-digit", year: "numeric" };
      document.getElementById("releaseDate").textContent =
        releaseDate.toLocaleDateString("vi-VN", options);

      // Hiển thị popup
      document.getElementById("comingSoonPopup").style.display = "flex";
    });
  });

  // Đóng popup khi click nút đóng hoặc bên ngoài
  document
    .getElementById("comingSoonPopup")
    .addEventListener("click", function (e) {
      if (
        e.target.classList.contains("popup-close") ||
        e.target.classList.contains("coming-soon-popup")
      ) {
        this.style.display = "none";
      }
    });

  // Thay đổi ảnh tùy chỉnh (bạn có thể xóa phần này nếu không cần)
  function setPopupImage(imageUrl) {
    const img = document.getElementById("popupImage");
    if (img) img.src = imageUrl;
  }
});



