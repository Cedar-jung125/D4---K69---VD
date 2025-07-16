document.addEventListener("DOMContentLoaded", function () {
  // 1. Tương tác menu điều hướng
  setupNavigation();

  // 2. Tương tác nút AP Classroom
  setupClassroomButtons();

  // 3. Đếm ngược ngày thi
  updateExamCountdowns();

  // 4. Thêm tính năng tìm kiếm (nâng cao)
  addSearchFunctionality();

  // 5. Load động dữ liệu khóa học (nâng cao, bỏ comment nếu cần)
  // loadCourseData();
});

// ========== CÁC HÀM CHỨC NĂNG ========== //

// 1. Thiết lập menu điều hướng
function setupNavigation() {
  const navItems = document.querySelectorAll(".nav-menu li");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Xóa active class từ tất cả các mục
      navItems.forEach((nav) => nav.classList.remove("active"));
      // Thêm active class cho mục được chọn
      this.classList.add("active");

      // Có thể thêm logic tải nội dung tại đây
      console.log(`Đã chọn: ${this.textContent}`);
    });
  });
}

// 2. Thiết lập nút AP Classroom
function setupClassroomButtons() {
  const apButtons = document.querySelectorAll(".ap-button");
  apButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const courseName =
        this.closest(".course-card").querySelector("h2").textContent;
      alert(`Chuyển đến AP Classroom cho ${courseName}`);
      // Thực tế: window.location.href = '/ap-classroom';
    });
  });
}

function addSearchFunctionality() {
  const searchBtn = document.getElementById("ap-search-btn");
  const searchInput = document.querySelector(".ap-search-input");

  if (!searchBtn || !searchInput) return;

  searchBtn.addEventListener("click", performSearch);
  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") performSearch();
  });
}

function performSearch() {
  // Kiểm tra xem tab hiện tại có phải là "courses-exams" không
  const activeTab = document.querySelector(".content-section#courses-exams");
  if (!activeTab || activeTab.style.display === "none") {
    alert("Bạn cần mở tab 📚 Khoá học trước khi tìm kiếm.");
    return;
  }

  const searchTerm = document
    .querySelector(".ap-search-input")
    .value.toLowerCase();

  const courseCards = activeTab.querySelectorAll(".course-card");
  let foundAny = false;

  courseCards.forEach((card) => {
    const courseName = card.querySelector("h2").textContent.toLowerCase();
    if (courseName.includes(searchTerm)) {
      card.style.display = "block";
      foundAny = true;
    } else {
      card.style.display = "none";
    }
  });

  const noResultsMsg = document.getElementById("no-results-message");
  if (!foundAny) {
    if (!noResultsMsg) {
      activeTab.insertAdjacentHTML(
        "beforeend",
        `<div id="no-results-message" class="no-results">Không tìm thấy khóa học phù hợp</div>`
      );
    }
  } else if (noResultsMsg) {
    noResultsMsg.remove();
  }
}

  // Hiển thị thông báo nếu không tìm thấy
  const noResultsMsg = document.getElementById("no-results-message");
  if (!foundAny) {
    if (!noResultsMsg) {
      const mainContent = document.querySelector(".main-content");
      mainContent.insertAdjacentHTML(
        "beforeend",
        `<div id="no-results-message" class="no-results">Không tìm thấy khóa học phù hợp</div>`
      );
    }
  } else if (noResultsMsg) {
    noResultsMsg.remove();
  }
}

// 5. Load động dữ liệu khóa học (nâng cao)
async function loadCourseData() {
  try {
    // Giả lập API call - trong thực tế sẽ là fetch đến real API
    const response = await mockApiCall();
    const courses = response.data;

    const mainContent = document.querySelector(".main-content");
    mainContent.innerHTML = ""; // Xóa nội dung cũ

    courses.forEach((course) => {
      const courseCard = document.createElement("div");
      courseCard.className = "course-card";
      courseCard.innerHTML = generateCourseCardHTML(course);
      mainContent.appendChild(courseCard);
    });

    // Sau khi load xong, thiết lập lại các sự kiện
    setupClassroomButtons();
    updateExamCountdowns();
  } catch (error) {
    console.error("Lỗi khi tải dữ liệu khóa học:", error);
    alert("Không thể tải dữ liệu khóa học. Vui lòng thử lại sau.");
  }
}

// Hàm giả lập API call (dùng cho demo)
function mockApiCall() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            name: "Toán học",
            status: "Ngày kiểm tra",
            examDate: "Aug 22, 1:00 PM",
            location: "Itō Vietnam Hanoi Head Office",
          },
          {
            name: "AP Physics 1",
            status: "Exam Only",
            examDate: "May 23, 8:00 AM",
            location: "Itō Vietnam Hanoi Head Office",
          },
          {
            name: "AP Computer Science",
            status: "Full Course",
            examDate: "May 25, 10:00 AM",
            location: "Itō Vietnam Hanoi Head Office",
          },
        ],
      });
    }, 500);
  });
}

// Tạo HTML cho thẻ khóa học
function generateCourseCardHTML(course) {
  return `
        <h2>${course.name}</h2>
        <div class="exam-status">${course.status}</div>
        <button class="ap-button">Go to AP Classroom</button>
        <div class="links">
            <a href="#">Course Guide →</a>
            <a href="#">Assignments →</a>
        </div>
        <div class="exam-info">
            <div class="exam-day">
                <strong>Exam Day</strong>
                <span>${course.examDate}</span>
            </div>
            <div class="exam-location">
                Registered for Exam given by ${course.location}
            </div>
        </div>
        <a href="#" class="exam-link">Go to Course & Exam pages →</a>
    `;
}

// Đảm bảo đoạn code này được thêm vào
document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".nav-menu li");

  // Ẩn tất cả nội dung trừ cái đầu tiên
  document.querySelectorAll(".content-section").forEach((section, index) => {
    section.style.display = index === 0 ? "block" : "none";
  });

  menuItems.forEach((item, index) => {
    item.addEventListener("click", function () {
      // Ẩn tất cả nội dung
      document.querySelectorAll(".content-section").forEach((section) => {
        section.style.display = "none";
      });

      // Hiển thị nội dung tương ứng
      const tabId = this.getAttribute("data-tab");
      if (tabId) {
        document.getElementById(tabId).style.display = "block";
      }

      // Cập nhật menu active
      menuItems.forEach((i) => i.classList.remove("active"));
      this.classList.add("active");
    });
  });
});

async function loadTabContent(tabId) {
  const contentArea = document.getElementById("main-content-area"); // Thay bằng ID thực tế

  try {
    contentArea.innerHTML = '<div class="loading">⏳ Đang tải...</div>';

    const response = await fetch(`/get-content?tab=${tabId}`);
    if (!response.ok) throw new Error("Lỗi tải dữ liệu");

    const data = await response.text();
    contentArea.innerHTML = data;
  } catch (error) {
    contentArea.innerHTML = `
            <div class="error">
                ❌ Lỗi tải nội dung<br>
                <button onclick="retryLoad('${tabId}')">Thử lại</button>
            </div>
        `;
  }
}

// Hàm thử lại
window.retryLoad = function (tabId) {
  loadTabContent(tabId);
};
