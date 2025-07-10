const cosmicTasks = document.querySelectorAll(".task-card");

cosmicTasks.forEach((card) => {
  const deadlineStr = card.getAttribute("data-deadline");
  const linkUrl = card.getAttribute("data-link");
  const deadlineTime = new Date(deadlineStr).getTime();
  const timerElem = card.querySelector(".task-timer");
  const doneBtn = card.querySelector(".task-done-btn");
  let warned = false;
  let expiredAt = null;
  let intervalId = null;
  let isDone = false;

  // Đặt nút trạng thái ban đầu
  doneBtn.classList.add("initial");
  doneBtn.textContent = "Đánh dấu đã xong";

  // Click card mở link
  card.addEventListener("click", (e) => {
    if (e.target !== doneBtn) {
      window.open(linkUrl, "_blank");
    }
  });

  // Đếm ngược
  function updateCountdown() {
    const now = new Date().getTime();
    const diff = deadlineTime - now;

    if (diff <= 0) {
      timerElem.textContent = "Đã hết hạn!";
      timerElem.style.color = "#9e9e9e";

      if (!expiredAt) expiredAt = now;

      if (now - expiredAt > 3 * 24 * 60 * 60 * 1000) {
        card.style.display = "none";
        clearInterval(intervalId);
      }
    } else {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      timerElem.textContent = `Còn: ${days} ngày ${hours
        .toString()
        .padStart(2, "0")} giờ ${minutes
        .toString()
        .padStart(2, "0")} phút ${seconds.toString().padStart(2, "0")} giây`;

      if (diff > 60 * 60 * 1000) {
        timerElem.style.color = "#2e7d32";
      } else if (diff > 10 * 60 * 1000) {
        timerElem.style.color = "#f57c00";
      } else {
        timerElem.style.color = "#c62828";
        if (!warned) {
          alert(
            `⚠️ Bài "${
              card.querySelector(".task-name").textContent
            }" sắp hết hạn!`
          );
          warned = true;
        }
      }
    }
  }

  // Xử lý nút "Đánh dấu đã xong"
  doneBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (isDone) return;
    clearInterval(intervalId);
    const now = new Date().getTime();

    doneBtn.classList.remove("initial");
    if (now <= deadlineTime) {
      doneBtn.textContent = "Đã xong";
      doneBtn.classList.add("done-on-time");
    } else {
      doneBtn.textContent = "Hoàn thành muộn";
      doneBtn.classList.add("done-late");
    }

    card.classList.add("done");
    isDone = true;
  });

  updateCountdown();
  intervalId = setInterval(updateCountdown, 1000);
});
