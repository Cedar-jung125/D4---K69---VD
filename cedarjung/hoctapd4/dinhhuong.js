document.addEventListener("DOMContentLoaded", function () {
  // ========== CẤU HÌNH DỮ LIỆU ==========
  const comboTitleData = {
    A00: {
      mainTitle: "Kỹ thuật - Tự nhiên - Kinh tế",
      subTitle: "Các tổ hợp Khối A",
    },
    B00: {
      mainTitle: "Y dược - Sinh học - Nông lâm",
      subTitle: "Các tổ hợp Khối B",
    },
    C00: { mainTitle: "Xã hội - Nhân văn", subTitle: "Các tổ hợp Khối C" },
    D01: {
      mainTitle: "Ngoại ngữ - Thương mại - Truyền thông",
      subTitle: "Các tổ hợp Khối D",
    },
    default: {
      mainTitle: "Các khối truyền thống và tổ hợp xét tuyển",
      subTitle: "Chọn khối để xem chi tiết",
    },
  };

  const comboGroups = {
    "Khối A": [
      "A00",
      "A01",
      "A02",
      "A03",
      "A04",
      "A05",
      "A06",
      "A07",
      "A08",
      "A09",
      "A10",
      "A11",
    ],
    "Khối B": ["B00", "B01", "B02", "B03", "B04", "B08"],
    "Khối C": [
      "C00",
      "C01",
      "C02",
      "C03",
      "C04",
      "C05",
      "C06",
      "C08",
      "C09",
      "C10",
      "C12",
      "C13",
      "C14",
      "C16",
      "C17",
      "C18",
      "C19",
      "C20",
    ],
    "Khối D": ["D00", "D01", "D07", "D08", "D09", "D10"],
  };

  // ========== LẤY PHẦN TỬ DOM ==========
  const searchInput = document.getElementById("d4ComboSearch");
  const searchBtn = document.getElementById("d4SearchBtn");
  const allCards = document.querySelectorAll(".combo-vertical-card");
  const bubbles = document.querySelectorAll(".bubble");

  // ========== BIẾN TRẠNG THÁI ==========
  let currentState = {
    mode: "all", // 'all', 'group', 'search'
    group: null,
    searchTerm: "",
  };

  // ========== HÀM CHỨC NĂNG CHÍNH ==========
  function updateDisplay() {
    allCards.forEach((card) => {
      const cardGroup = card.getAttribute("data-group");
      const cardCombo = card.getAttribute("data-combo");
      const cardText = card.textContent.toLowerCase();

      // Logic hiển thị
      let shouldShow = false;

      if (currentState.mode === "search") {
        shouldShow = cardText.includes(currentState.searchTerm);
      } else if (currentState.mode === "group") {
        shouldShow = cardGroup === currentState.group;
      } else {
        // mode 'all'
        shouldShow = true;
      }

      card.style.display = shouldShow ? "flex" : "none";
      if (shouldShow) card.style.animation = "fadeIn 0.3s";
    });

    updateTitles();
  }

  function updateTitles() {
    const mainTitle = document.getElementById("mainDynamicTitle");
    const subTitle = document.getElementById("subDynamicTitle");

    if (currentState.mode === "search") {
      const visibleCards = Array.from(
        document.querySelectorAll('.combo-vertical-card[style*="flex"]')
      );

      if (visibleCards.length > 0) {
        const firstCombo = visibleCards[0].getAttribute("data-combo");

        const data = comboTitleData[firstCombo] || comboTitleData.default;

        mainTitle.textContent = data.mainTitle;
        subTitle.textContent = `Tìm thấy ${visibleCards.length} kết quả`;
      } else {
        mainTitle.textContent = "Kết quả tìm kiếm";
        subTitle.textContent = "Không tìm thấy kết quả phù hợp";
      }
    } else if (currentState.mode === "group") {
      const firstCard = document.querySelector(
        `.combo-vertical-card[data-group="${currentState.group}"]`
      );
      if (firstCard) {
        const comboCode = firstCard.getAttribute("data-combo");
        const data = comboTitleData[comboCode] || comboTitleData.default;
        mainTitle.textContent = data.mainTitle;
        subTitle.textContent = data.subTitle;
      }
    } else {
      mainTitle.textContent = comboTitleData.default.mainTitle;
      subTitle.textContent = comboTitleData.default.subTitle;
    }
  }

  // ========== XỬ LÝ SỰ KIỆN ==========
  // Click bubble
  bubbles.forEach((bubble) => {
    bubble.addEventListener("click", function () {
      const group = this.getAttribute("data-group");

      if (group === "all") {
        currentState.mode = "all";
        currentState.group = null;
      } else {
        currentState.mode = "group";
        currentState.group = group;
      }

      searchInput.value = "";
      currentState.searchTerm = "";
      updateDisplay();
    });
  });

  // Tìm kiếm
  function handleSearch() {
    currentState.searchTerm = searchInput.value.trim().toLowerCase();

    if (currentState.searchTerm) {
      currentState.mode = "search";
    } else {
      // Nếu không có gì trong ô search, thì reset về all
      currentState.mode = "all";
      currentState.group = null;
    }

    updateDisplay();
  }

  searchBtn.addEventListener("click", handleSearch);
  searchInput.addEventListener("input", handleSearch);
  searchInput.addEventListener(
    "keypress",
    (e) => e.key === "Enter" && handleSearch()
  );

  // ========== KHỞI TẠO ==========
  updateDisplay();
});

// Dữ liệu tổ hợp môn học
const comboData = {
  A00: {
    subjects: "Toán - Vật lý - Hóa học",
    popularity: 78,
    majors: [
      "Công nghệ Thông tin",
      "Kỹ thuật Điện - Điện tử",
      "Cơ khí - Chế tạo máy",
      "Xây dựng",
      "Khoa học Máy tính",
    ],
    schools: [
      "ĐH Bách Khoa Hà Nội",
      "ĐH Bách Khoa TP.HCM",
      "ĐH Khoa học Tự nhiên",
      "ĐH Công nghệ - ĐHQG Hà Nội",
      "ĐH Giao thông Vận tải",
    ],
    advice:
      "Tổ hợp A00 phù hợp với các bạn có tư duy logic tốt, yêu thích các môn khoa học tự nhiên. Đây là tổ hợp truyền thống với nhiều lựa chọn ngành nghề đa dạng, đặc biệt trong lĩnh vực kỹ thuật, công nghệ. Cần chú ý cân bằng giữa 3 môn vì đều là môn tính điểm quan trọng.",
  },
  B00: {
    subjects: "Toán - Hóa học - Sinh học",
    popularity: 65,
    majors: [
      "Y đa khoa",
      "Dược học",
      "Công nghệ Sinh học",
      "Kỹ thuật Y sinh",
      "Thú y",
    ],
    schools: [
      "ĐH Y Hà Nội",
      "ĐH Y Dược TP.HCM",
      "ĐH Khoa học Tự nhiên",
      "ĐH Nông Lâm TP.HCM",
      "Học viện Quân y",
    ],
    advice:
      "Tổ hợp B00 là lựa chọn lý tưởng cho các bạn đam mê lĩnh vực y sinh, dược phẩm. Cần có khả năng ghi nhớ tốt bên cạnh tư duy logic. Đây là tổ hợp có tính cạnh tranh cao, đặc biệt ở các ngành Y - Dược, nên cần chuẩn bị kỹ lưỡng.",
  },
  C00: {
    subjects: "Ngữ văn - Lịch sử - Địa lý",
    popularity: 42,
    majors: [
      "Báo chí - Truyền thông",
      "Luật",
      "Văn hóa - Du lịch",
      "Quan hệ Quốc tế",
      "Sư phạm Ngữ văn/Sử/Địa",
    ],
    schools: [
      "ĐH Khoa học Xã hội & Nhân văn",
      "Học viện Báo chí Tuyên truyền",
      "ĐH Luật Hà Nội",
      "ĐH Văn hóa Hà Nội",
      "ĐH Sư phạm Hà Nội",
    ],
    advice:
      "Tổ hợp C00 phù hợp với các bạn có thế mạnh về ngôn ngữ, khả năng diễn đạt và tư duy xã hội. Cần rèn luyện kỹ năng viết và phân tích vấn đề. Đây là tổ hợp mở ra nhiều cơ hội trong lĩnh vực truyền thông, giáo dục và dịch vụ.",
  },
  D01: {
    subjects: "Toán - Ngữ văn - Tiếng Anh",
    popularity: 85,
    majors: [
      "Ngôn ngữ Anh",
      "Kinh tế - Quản trị Kinh doanh",
      "Tài chính - Ngân hàng",
      "Quan hệ Quốc tế",
      "Marketing",
    ],
    schools: [
      "ĐH Ngoại thương",
      "ĐH Kinh tế Quốc dân",
      "ĐH Hà Nội",
      "Học viện Ngoại giao",
      "ĐH Kinh tế - Luật",
    ],
    advice:
      "Tổ hợp D01 là lựa chọn lý tưởng cho các bạn có thế mạnh ngoại ngữ và mong muốn làm việc trong môi trường quốc tế. Cần chú trọng phát triển đồng đều cả 3 môn. Đây là tổ hợp có tính ứng dụng cao trong bối cảnh hội nhập toàn cầu.",
  },
};

// Khởi tạo ứng dụng khi DOM đã sẵn sàng
document.addEventListener("DOMContentLoaded", function () {
  // Các phần tử giao diện
  const comboListMode = document.getElementById("combo-list-mode");
  const comboDetailMode = document.getElementById("combo-detail-mode");
  const backToListBtn = document.getElementById("backToListBtn");
  const comboCards = document.querySelectorAll(".combo-vertical-card");
  const searchBtn = document.getElementById("d4SearchBtn");
  const searchInput = document.getElementById("d4ComboSearch");

  // Xử lý sự kiện click vào card tổ hợp
  comboCards.forEach((card) => {
    card.addEventListener("click", function () {
      const comboCode = this.getAttribute("data-combo");
      showComboDetail(comboCode);
    });
  });

  // Xử lý nút quay lại
  backToListBtn.addEventListener("click", function () {
    comboListMode.style.display = "block";
    comboDetailMode.style.display = "none";
    // Reset tìm kiếm khi quay lại
    searchInput.value = "";
    comboCards.forEach((card) => {
      card.style.display = "flex";
    });
  });

  // Xử lý tìm kiếm
  searchBtn.addEventListener("click", searchCombos);
  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") searchCombos();
  });

  // Hàm hiển thị chi tiết tổ hợp
  function showComboDetail(comboCode) {
    const combo = comboData[comboCode];
    if (!combo) return;

    // Cập nhật thông tin cơ bản
    document.getElementById("detailComboCode").textContent = comboCode;
    document.getElementById("detailComboSubjects").textContent = combo.subjects;

    // Cập nhật thanh tiến trình
    const popularityBar = document.getElementById("comboPopularity");
    popularityBar.style.width = "0";
    setTimeout(() => {
      popularityBar.style.width = combo.popularity + "%";
    }, 100);
    document.getElementById(
      "comboPopularityText"
    ).textContent = `Được ${combo.popularity}% thí sinh lựa chọn`;

    // Cập nhật ngành học phù hợp
    const majorsList = document.getElementById("suitableMajors");
    majorsList.innerHTML = combo.majors
      .map((major) => `<li>${major}</li>`)
      .join("");

    // Cập nhật trường đào tạo
    const schoolsContainer = document.getElementById("goodSchools");
    schoolsContainer.innerHTML = combo.schools
      .map((school) => `<div class="school-tag">${school}</div>`)
      .join("");

    // Cập nhật lời khuyên
    document.getElementById("comboAdvice").textContent = combo.advice;

    // Chuyển chế độ xem
    comboListMode.style.display = "none";
    comboDetailMode.style.display = "block";
  }

  // Hàm tìm kiếm tổ hợp
  // Trong phần JavaScript, sửa hàm searchCombos và thêm sự kiện input
  function searchCombos() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    comboCards.forEach((card) => {
      const comboName = card.getAttribute("data-combo").toLowerCase();
      const comboText = card.textContent.toLowerCase();

      if (
        searchTerm === "" ||
        comboName.includes(searchTerm) ||
        comboText.includes(searchTerm)
      ) {
        card.style.display = "flex";
        card.style.animation = "fadeIn 0.3s";
      } else {
        card.style.display = "none";
      }
    });
  }

  // Thêm sự kiện input để detect khi người dùng xóa nội dung
  searchInput.addEventListener("input", function () {
    if (this.value.trim() === "") {
      searchCombos(); // Gọi hàm search khi ô trống
    }
  });

  // Thêm nút clear cho ô tìm kiếm (tuỳ chọn)
  searchInput.insertAdjacentHTML(
    "afterend",
    `
  <button class="clear-search-btn" id="clearSearchBtn" style="display:none;">×</button>
`
  );
});

document.addEventListener("DOMContentLoaded", function () {
  // Lưu trạng thái điều hướng
  let currentView = "bd-main-options";
  const viewHistory = ["bd-main-options"];

  // Các phần tử chính
  const heroBg = document.getElementById("bd-hero-bg");
  const mainOptions = document.getElementById("bd-main-options");

  // Ẩn tất cả sections nội dung
  function hideContentSections() {
    document
      .querySelectorAll(
        ".bd-country-container, .bd-university-container, .bd-standards-container"
      )
      .forEach((section) => {
        section.style.display = "none";
      });
  }

  // Hiển thị section theo ID
  function showView(viewId) {
    hideContentSections();

    // Xử lý hiển thị view chính
    if (viewId === "bd-main-options") {
      heroBg.style.display = "flex";
      mainOptions.style.display = "flex";
      return;
    }

    // Ẩn view chính khi xem nội dung
    heroBg.style.display = "none";
    mainOptions.style.display = "none";

    // Hiển thị view được chọn
    const view = document.getElementById(viewId);
    if (!view) return;

    if (view.classList.contains("bd-country-container")) {
      view.style.display = "flex";
    } else if (view.classList.contains("bd-university-container")) {
      view.style.display = "flex";
    } else if (view.classList.contains("bd-standards-container")) {
      view.style.display = "block";
    }

    window.scrollTo(0, 0);
  }

  // Điều hướng tới view mới
  function navigateTo(viewId) {
    if (currentView === viewId) return;

    viewHistory.push(viewId);
    currentView = viewId;
    showView(viewId);
  }

  // Quay lại view trước đó
  function goBack() {
    if (viewHistory.length <= 1) return;

    viewHistory.pop();
    const previousView = viewHistory[viewHistory.length - 1];
    console.log("Going back to:", previousView);
    currentView = previousView;
    showView(previousView);
  }

  // Gắn sự kiện click cho các card
  document.querySelectorAll("[data-target]").forEach((card) => {
    card.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      if (targetId) navigateTo(targetId);
    });
  });

  // Gắn sự kiện click cho nút back (PHẦN QUAN TRỌNG ĐÃ SỬA)
  document.addEventListener("click", function (e) {
    if (e.target.closest(".bd-back-btn")) {
      e.preventDefault();
      goBack();
    }
  });

  // Khởi tạo
  showView("bd-main-options");

  // Đảm bảo content-section chiếm full width
  const contentSection = document.querySelector("#scores .content-section");
  if (contentSection) {
    contentSection.style.display = "block";
    contentSection.style.width = "100%";
    contentSection.style.maxWidth = "none";
    contentSection.style.padding = "0";
    contentSection.style.background = "transparent";
    contentSection.style.boxShadow = "none";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // ============ XỬ LÝ CLICK THẺ VÀ HIỂN THỊ NỘI DUNG ============
  const cards = document.querySelectorAll(".d4-card__super-rare");
  const contents = {
    school: document.getElementById("schoolContent"),
    subjects: document.getElementById("subjectsContent"),
    requirements: document.getElementById("requirementsContent"),
  };

  // Ẩn tất cả nội dung chi tiết ban đầu
  Object.values(contents).forEach((content) => {
    if (content) {
      content.style.display = "none";
    }
  });

  // Xử lý click thẻ
  cards.forEach((card) => {
    card.addEventListener("click", function (e) {
      e.preventDefault();
      const cardType = this.getAttribute("data-card");

      // Ẩn tất cả nội dung
      Object.values(contents).forEach((content) => {
        if (content) content.style.display = "none";
      });

      // Hiển thị nội dung tương ứng
      if (contents[cardType]) {
        contents[cardType].style.display = "block";

        // Cuộn đến nội dung mượt mà
        contents[cardType].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Xử lý nút quay lại
  document.querySelectorAll(".d4-back-btn__cosmic-flare").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      // Ẩn tất cả nội dung chi tiết
      Object.values(contents).forEach((content) => {
        if (content) content.style.display = "none";
      });

      // Cuộn lên đầu trang
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });

  // ============ ĐẾM NGƯỢC THỜI GIAN ============
  function updateCountdown() {
    const countdownElement = document.querySelector(
      ".d4-countdown__crazy-unique"
    );
    if (!countdownElement) return;

    const startDate = new Date(
      countdownElement.getAttribute("data-start-date")
    );
    const endDate = new Date(countdownElement.getAttribute("data-end-date"));
    const now = new Date();

    // Kiểm tra thời gian hợp lệ
    if (now >= endDate) {
      document.getElementById("days").textContent = "000";
      document.getElementById("hours").textContent = "00";
      document.getElementById("minutes").textContent = "00";
      return;
    }

    if (now < startDate) {
      document.getElementById("days").textContent = "000";
      document.getElementById("hours").textContent = "00";
      document.getElementById("minutes").textContent = "00";
      return;
    }

    // Tính thời gian còn lại
    const remaining = endDate - now;
    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));

    // Cập nhật hiển thị
    document.getElementById("days").textContent = days
      .toString()
      .padStart(3, "0");
    document.getElementById("hours").textContent = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("minutes").textContent = minutes
      .toString()
      .padStart(2, "0");
  }

  // Khởi chạy đếm ngược và cập nhật mỗi phút
  updateCountdown();
  setInterval(updateCountdown, 60000);

  // ============ HIỆU ỨNG KHI LOAD TRANG ============
  setTimeout(() => {
    const banner = document.querySelector(".d4-banner__ultra-mega-super");
    const cards = document.querySelector(".d4-cards__wild-grid");

    if (banner) banner.style.opacity = "1";
    if (cards) cards.style.opacity = "1";
  }, 100);
});

