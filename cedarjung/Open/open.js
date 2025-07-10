document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startTest");
  if (startBtn) {
    startBtn.onclick = () => {
      const params = new URLSearchParams(window.location.search);
      const testName = params.get("test");
      if (testName) {
        window.location.href = testName + ".html";
      } else {
        alert("Không tìm thấy đề thi.");
      }
    };
  }
});
