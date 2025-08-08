document.addEventListener("DOMContentLoaded", function () {
  // ===== Phần chung =====
  // Chuyển đổi giữa các sự kiện
  const eventCards = document.querySelectorAll(".dtb-event-card");
  const contentSections = document.querySelectorAll(".dtb-content-section");
  const eventContainer = document.querySelector(".dtb-event-container");
  const eventContent = document.querySelector(".dtb-event-content");
  const backButton = document.querySelector(".dtb-back-button");

  eventCards.forEach((card) => {
    card.addEventListener("click", function () {
      const eventType = this.getAttribute("data-event");

      // Ẩn danh sách sự kiện, hiển thị nội dung
      eventContainer.style.display = "none";
      eventContent.style.display = "block";

      // Hiển thị nội dung tương ứng
      contentSections.forEach((section) => {
        section.classList.remove("active");
        if (section.id === `dtb-${eventType}-content`) {
          section.classList.add("active");
        }
      });

      // Cuộn lên đầu trang
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // Nút quay lại
  backButton.addEventListener("click", function () {
    eventContainer.style.display = "block";
    eventContent.style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ===== Phần Xổ số =====
  // Countdown timer
  function updateLotteryCountdown() {
    const now = new Date();
    const nextFriday = new Date();

    // Set to next Friday at 20:00
    nextFriday.setDate(now.getDate() + ((5 - now.getDay() + 7) % 7));
    nextFriday.setHours(20, 0, 0, 0);

    // If it's already past this Friday 20:00, set to next Friday
    if (now > nextFriday) {
      nextFriday.setDate(nextFriday.getDate() + 7);
    }

    const diff = nextFriday - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("dtb-days").textContent = days
      .toString()
      .padStart(2, "0");
    document.getElementById("dtb-hours").textContent = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("dtb-minutes").textContent = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("dtb-seconds").textContent = seconds
      .toString()
      .padStart(2, "0");
  }

  updateLotteryCountdown();
  setInterval(updateLotteryCountdown, 1000);

  // Bảng kim tự tháp
  const drawButton = document.getElementById("dtb-start-draw");
  const pyramidNumbers = {
    special: document.getElementById("dtb-pyramid-special"),
    first: document.getElementById("dtb-pyramid-first"),
    second: document.getElementById("dtb-pyramid-second"),
    third: document.getElementById("dtb-pyramid-third"),
  };

  // Kết quả định sẵn
  const predefinedResults = {
    special: ["63091"],
    first: ["8513"],
    second: ["134", "698"],
    third: ["72", "67", "07"],
  };

  // Dữ liệu người thắng
  const winnersData = [
    {
      rank: "special",
      number: "63091",
      name: "Nguyễn Quang Tuấn",
      prize: "Combo 1 chiếc máy tính Casio FX580VN X-BU và 1 tài liệu bí mật",
    },
    {
      rank: "first",
      number: "8513",
      name: "Đỗ Minh Tùng",
      prize:
        "Combo vở ghi 120 trang - 5 bút bi xanh - 1 cục tẩy chì màu đen - 1 cây thước kẻ 30cm",
    },
    {
      rank: "second",
      number: "134",
      name: "Trịnh Phúc Hưng",
      prize: "Combo 1 bút bi đỏ - 1 bút chì - 10.000VND",
    },
    {
      rank: "second",
      number: "698",
      name: "Hoàng Minh Hiếu",
      prize: "Combo 1 bút bi đỏ - 1 bút chì - 10.000VND",
    },
    {
      rank: "third",
      number: "72",
      name: "Đỗ Ngọc Khánh Nam",
      prize: "2 cây bút bi bấm Thiên Long TL-027 0.05mm mực xanh",
    },
    {
      rank: "third",
      number: "67",
      name: "Nguyễn Phúc Anh",
      prize: "2 cây bút bi bấm Thiên Long TL-027 0.05mm mực xanh",
    },
    {
      rank: "third",
      number: "07",
      name: "Đào Minh Phúc",
      prize: "2 cây bút bi bấm Thiên Long TL-027 0.05mm mực xanh",
    },
  ];

  drawButton.addEventListener("click", function () {
    if (this.classList.contains("drawing")) return;

    this.classList.add("drawing");
    this.disabled = true;
    this.textContent = "Đang quay số...";

    // Reset bảng kết quả
    for (const prize in pyramidNumbers) {
      pyramidNumbers[prize].innerHTML = "";
    }

    // Quay giải ba (3 số cùng lúc)
    animatePyramidNumbers("third", predefinedResults.third, () => {
      // Sau 3 giây, quay giải nhì (2 số cùng lúc)
      setTimeout(() => {
        animatePyramidNumbers("second", predefinedResults.second, () => {
          // Sau 3 giây, quay giải nhất
          setTimeout(() => {
            animatePyramidNumbers("first", predefinedResults.first, () => {
              // Sau 3 giây, quay giải đặc biệt
              setTimeout(() => {
                animatePyramidNumbers(
                  "special",
                  predefinedResults.special,
                  () => {
                    // Hiển thị người thắng
                    displayWinners();

                    // Hoàn thành
                    drawButton.classList.remove("drawing");
                    drawButton.disabled = false;
                    drawButton.textContent = "Xem kết quả tuần này";
                  }
                );
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  });

  // Hiệu ứng quay số cho bảng kim tự tháp
  function animatePyramidNumbers(prizeType, numbers, callback) {
    const container = pyramidNumbers[prizeType];
    container.innerHTML = "";

    // Tạo các phần tử số
    const numberElements = numbers.map((num) => {
      const numEl = document.createElement("div");
      numEl.className = "dtb-pyramid-number";
      container.appendChild(numEl);
      return numEl;
    });

    // Thời gian quay (15 giây)
    const duration = 15000;
    const startTime = Date.now();

    function update() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Hiển thị số ngẫu nhiên
      numberElements.forEach((el, index) => {
        if (progress < 0.9) {
          // Hiển thị số ngẫu nhiên
          let randomNum = "";
          for (let i = 0; i < numbers[index].length; i++) {
            randomNum += Math.floor(Math.random() * 10);
          }
          el.textContent = randomNum;
        } else {
          // Hiển thị số thật
          el.textContent = numbers[index];
        }
      });

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        callback();
      }
    }

    update();
  }

  // Hiển thị người thắng
  function displayWinners() {
    const winnersBody = document.getElementById("dtb-winners-body");
    winnersBody.innerHTML = "";

    winnersData.forEach((winner) => {
      const row = document.createElement("div");
      row.className = "dtb-winner-row";

      row.innerHTML = `
                <div>Giải ${
                  winner.rank === "special"
                    ? "đặc biệt"
                    : winner.rank === "first"
                    ? "nhất"
                    : winner.rank === "second"
                    ? "nhì"
                    : "ba"
                }</div>
                <div>${winner.number}</div>
                <div>${winner.name}</div>
                <div>${winner.prize}</div>
            `;

      winnersBody.appendChild(row);
    });
  }

  // ===== Phần Cờ vua =====
  // Countdown timer
  function updateChessCountdown() {
    const now = new Date();
    const chessDate = new Date("2025-09-15T09:00:00"); // Example date

    const diff = chessDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("dtb-chess-days").textContent = days
      .toString()
      .padStart(2, "0");
    document.getElementById("dtb-chess-hours").textContent = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("dtb-chess-minutes").textContent = minutes
      .toString()
      .padStart(2, "0");
  }

  updateChessCountdown();
  setInterval(updateChessCountdown, 60000);

  // Accordion
  const accordionButtons = document.querySelectorAll(".dtb-accordion-button");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      content.classList.toggle("active");
    });
  });
});
