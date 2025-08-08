document.addEventListener("DOMContentLoaded", function () {
  const memoriesData = {
    year10: [
      {
        id: "memory1",
        name: "Ngày đầu tiên gặp mặt",
        image: "/img/Anhdaunam.jpg",
        quote:
          "Ngày 29/08/2024, nơi chúng ta có cơ hội lần đầu được gặp nhau sau kì thi vào 10 đầy cam go và khốc liệt.",
        details: {
          title: "Ngày đầu tiên đi học - Lớp 10",
          images: [
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
          ],
          text: "Ngày 29/08/2024, chúng ta khoác lên mình chiếc áo  chính thức trở thành học sinh . Những gương mặt còn ngơ ngác, những cái bắt tay e dè, những nụ cười ngượng ngùng. Ai cũng mang trong mình sự háo hức và chút lo lắng về một môi trường mới. Cô giáo chủ nhiệm đã đón chúng ta bằng nụ cười ấm áp, làm tan biến mọi bỡ ngỡ ban đầu.",
        },
      },
      {
        id: "memory2",
        name: "Chuyến đi ngoại khóa tới Sầm Sơn - Thanh Hóa",
        image: "/img/TAH00237.jpg",
        quote:
          "Chuyến đi đã giúp chúng ta hiểu nhau hơn và trở nên gắn bó như một gia đình.",
        details: {
          title: "Chuyến dã ngoại đầu tiên của lớp D4",
          images: [
            "/img/TAH00209.jpg",
            "/img/TAH00344.jpg",
            "/img/TAH00913.jpg",
          ],
          text: "1 tuần trước khi kết thúc tháng 11 của năm 2024, nhà trường đã tổ chức cho toàn bộ khối 10 tham gia chuyến đi ngoại khóa đến mảnh đất Thanh Hóa, và cụ thể là bãi biển Sầm Sơn. Đây cũng là lần đầu tiên lớp chúng ta có chuyến đi 2 ngày 1 đêm cùng nhau sau thời gian đầu gặp nhau. Trước hôm đi, ai cũng háo hức sửa soạn đồ đạc, quần áo, chuẩn bị chu đáo nhất cho chuyến đi chơi với lớp. Nhiều bạn thổn thức tới tận 03 giờ sáng hôm sau, thậm chí có người còn không ngủ vì quá mong chờ chuyến đi. Và lúc 05h30, chiếc xe chở toàn bộ cô chủ nhiệm và học sinh trong lớp chính thức lăn bánh từ cổng trường THPT Việt Đức tới điểm đến. Tại đây, cúng ta đã cùng nhau hát vang những bài hát tuổi học trò. Những trò chơi team-building đã giúp xóa tan mọi khoảng cách. Ai cũng vui vẻ, hồn nhiên và tràn đầy năng lượng. Đây là lần đầu tiên chúng ta cảm nhận được tinh thần đoàn kết của tập thể lớp.",
        },
      },
      {
        id: "memory3",
        name: "Hội thi văn nghệ",
        image:
          "https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        quote:
          'Tiết mục "Những ngôi sao xa xôi" của chúng ta đã giành giải Nhất. Niềm vui không thể nào quên!',
        details: {
          title: "Hội thi văn nghệ - Lớp 11",
          images: [
            "https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          ],
          text: 'Hội thi văn nghệ chào mừng ngày Nhà giáo Việt Nam 20/11 là một kỷ niệm khó quên. Cả lớp đã dành hơn một tháng tập luyện vất vả cho tiết mục múa "Những ngôi sao xa xôi". Những buổi tập sau giờ học, những giọt mồ hôi và cả những tiếng cười. Khi nghe tên lớp được xướng lên với giải Nhất, tất cả chúng ta đã ôm chầm lấy nhau trong hạnh phúc.',
        },
      },
    ],
    year11: [
      {
        id: "memory5",
        name: "Kỉ niệm 70 năm thành lập trường",
        image:
          "https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        quote: "",
        details: {
          title: "",
          images: [
            "https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          ],
          text: "",
        },
      },
      {
        id: "memory6",
        name: "Kỳ thi học kỳ I",
        image:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        quote:
          "Những đêm ôn bài cùng nhau, chia sẻ từng trang vở, từng công thức khó.",
        details: {
          title: "Kỳ thi học kỳ I - Lớp 11",
          images: [
            "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          ],
          text: "Kỳ thi học kỳ I năm lớp 11 là một thử thách lớn với chúng ta. Những môn học khó, lượng kiến thức nhiều. Nhưng chính trong giai đoạn này, chúng ta đã biết cách giúp đỡ nhau học tập. Nhóm bạn đã cùng nhau ôn bài ở thư viện, chia sẻ những ghi chép, giải đáp thắc mắc cho nhau. Kết quả cuối cùng khiến cả lớp tự hào khi có nhiều bạn đạt điểm cao.",
        },
      },
    ],
    year12: [
      {
        id: "memory7",
        name: "Lễ tri ân và trưởng thành",
        image:
          "https://images.unsplash.com/photo-1523057530100-383d7fbc77a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        quote:
          "Những giọt nước mắt lăn dài trên má khi nhận ra thời học sinh sắp kết thúc.",
        details: {
          title: "Chào 09 - Lớp 12",
          images: [
            "https://images.unsplash.com/photo-1523057530100-383d7fbc77a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          ],
          text: "Buổi lễ tri ân diễn ra vào một ngày cuối tháng 5. Cả lớp trong bộ đồng phục chỉnh tề, những bó hoa tươi thắm dành tặng thầy cô. Khi bài phát biểu của lớp trưởng vang lên, nhiều bạn đã không kìm được nước mắt. Những cái ôm thật chặt, những lời chúc tốt đẹp, những lời hứa sẽ luôn giữ liên lạc. Khoảnh khắc ấy khiến chúng ta nhận ra giá trị của tình bạn dưới mái trường Việt Đức.",
        },
      },
      {
        id: "memory8",
        name: "Chụp ảnh kỷ yếu",
        image:
          "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        quote:
          "Những bức ảnh đẹp nhất, những khoảnh khắc đáng nhớ nhất của tuổi học trò.",
        details: {
          title: "Ảnh kỷ yếu - Lớp 12",
          images: [
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          ],
          text: "Bộ ảnh kỷ yếu là một trong những hoạt động được mong chờ nhất năm cuối cấp. Chúng ta đã cùng nhau chọn những địa điểm đẹp nhất trong trường: gốc phượng già sân sau, cầu thang gỗ thư viện, hành lang lớp học. Những bộ vest, áo dài trắng tinh khôi. Những kiểu ảnh sáng tạo, những nụ cười rạng rỡ. Đặc biệt là bức ảnh toàn lớp dưới gốc phượng - nơi lưu giữ biết bao kỷ niệm.",
        },
      },
    ],
  };

  // Render memory cards
  function renderMemories() {
    for (const year in memoriesData) {
      const container = document.querySelector(
        `#${year} .bmd4-memories-container`
      );
      memoriesData[year].forEach((memory) => {
        const card = document.createElement("div");
        card.className = "bmd4-memory-card";
        card.innerHTML = `
                            <img src="${memory.image}" alt="${memory.name}" class="bmd4-memory-image">
                            <div class="bmd4-memory-content">
                                <h3 class="bmd4-memory-name">${memory.name}</h3>
                                <p class="bmd4-memory-quote">"${memory.quote}"</p>
                            </div>
                        `;
        card.addEventListener("click", () => showMemoryDetail(memory));
        container.appendChild(card);
      });
    }
  }

  // Show memory detail
  function showMemoryDetail(memory) {
    document.querySelectorAll(".bmd4-year-section").forEach((section) => {
      section.style.display = "none";
    });

    const detailView = document.getElementById("detailView");
    const detailTitle = document.getElementById("detailTitle");
    const detailContent = document.getElementById("detailContent");

    detailTitle.textContent = memory.details.title;

    let galleryHTML = "";
    memory.details.images.forEach((image) => {
      galleryHTML += `
                        <div class="bmd4-gallery-item">
                            <img src="${image}" alt="${memory.name}" class="bmd4-gallery-image">
                        </div>
                    `;
    });

    detailContent.innerHTML = `
                    <img src="${memory.image}" alt="${memory.name}" class="bmd4-detail-image">
                    <p class="bmd4-detail-text">${memory.details.text}</p>
                    <div class="bmd4-gallery">${galleryHTML}</div>
                `;

    detailView.style.display = "block";

    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // Back button functionality
  document.getElementById("backButton").addEventListener("click", function () {
    document.getElementById("detailView").style.display = "none";
    document.querySelectorAll(".bmd4-year-section").forEach((section) => {
      section.style.display = "block";
    });
  });
  function updateCountdown() {
    const startDate = new Date(2024, 7, 29);
    const endDate = new Date(2027, 4, 31);
    const now = new Date();
    const diff = endDate - now;

    if (diff <= 0) {
      document.getElementById("countdownTimer").innerHTML = `
            <div style="font-size: 1.5rem; color: #8b4513;">
                Chúng ta đã cùng nhau trải qua những ngày tháng tuyệt vời nhất!
            </div>
        `;
      return;
    }

    // Tính toán các giá trị
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Hiển thị
    document.getElementById("days").textContent = days
      .toString()
      .padStart(2, "0");
    document.getElementById("hours").textContent = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("minutes").textContent = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds").textContent = seconds
      .toString()
      .padStart(2, "0");
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();
  renderMemories();
});

// BMD4 JavaScript - Splash screen (bóng bay oval/tròn)
document.addEventListener("DOMContentLoaded", function () {
  const splashScreen = document.getElementById("splashScreen");
  const balloonContainer = document.getElementById("balloonContainer");

  // Tạo bóng bay với hình dạng oval/tròn
  function createBalloons() {
    const balloonColors = [
      "#ff6b6b",
      "#ffa502",
      "#ffda79",
      "#7bed9f",
      "#70a1ff",
      "#5352ed",
      "#ff4757",
      "#eccc68",
      "#ff7f50",
    ];

    for (let i = 0; i < 15; i++) {
      const balloon = document.createElement("div");
      balloon.className = "bmd4-balloon";

      // Random hình dạng (50% oval, 50% tròn)
      const isRound = Math.random() > 0.5;
      const width = 80 + Math.random() * 70; // 80-150px
      const height = isRound ? width : width * (0.7 + Math.random() * 0.3); // Oval thì chiều cao khác

      balloon.style.width = `${width}px`;
      balloon.style.height = `${height}px`;
      balloon.style.background =
        balloonColors[Math.floor(Math.random() * balloonColors.length)];
      balloon.style.borderRadius = isRound
        ? "50%"
        : "50% 50% 50% 50% / 60% 60% 40% 40%";

      // Hiệu ứng bóng bay
      balloon.style.left = `${Math.random() * 100}%`;
      balloon.style.boxShadow = "inset -5px -5px 10px rgba(0,0,0,0.1)";

      // Dây bóng bay
      balloon.innerHTML += `<div style="
                position: absolute;
                bottom: -15px;
                left: 50%;
                width: 2px;
                height: 15px;
                background: #ccc;
                transform: translateX(-50%);
            "></div>`;

      // Animation
      balloon.style.animationDelay = `${Math.random() * 5}s`;
      balloon.style.animationDuration = `${5 + Math.random() * 5}s`;

      balloonContainer.appendChild(balloon);
    }
  }

  // Ẩn splash screen sau 8 giây
  setTimeout(function () {
    splashScreen.style.opacity = "0";
    setTimeout(function () {
      splashScreen.style.display = "none";
    }, 1000);
  }, 8000);

  createBalloons();
});
