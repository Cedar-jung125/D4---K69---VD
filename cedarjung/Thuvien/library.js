// Book filtering functionality
document.addEventListener("DOMContentLoaded", function () {
  // Initialize books data (you can expand this with real data)
  const books = [
   {
      id: 1,
      title: "Nhật ký tuổi 15",
      category: "văn học",
      image: "img/Ảnh chụp màn hình (5155).png",
      flip: "https://online.fliphtml5.com/fafzj/fgcj/",
    },
    {
      id: 2,
      title: "Doraemon học tập: Cộng - Trừ",
      category: "Tuổi thơ",
      image: "img/doraemoncongtru.jpg",
      flip: "pdf/Doraemonhoctapcongtru.pdf",
    },
    {
      id: 3,
      title: "SGK Toán 11 - Tập 1 - Kết nối tri thức",
      category: "Giáo dục",
      image: "img/sgktoan11tap1kntt.png",
      flip: "pdf/sach-giao-khoa-toan-11-tap-1-ket-noi-tri-thuc-voi-cuoc-song.pdf",
    },
    {
      id: 4,
      title:
        "Sách Chuyên đề học tập Tin học (Tin học ứng dụng) 10 - Kết nối tri thức",
      category: "Giáo dục",
      image: "img/chuyen-de-tin-hoc-ung-dung-10.png",
      flip: "pdf/SÁCH GIÁO KHOA TIN HỌC 10 CHUYÊN ĐỀ HỌC TẬP TIN HỌC ỨNG DỤNG KẾT NỐI TRI THỨC.pdf",
    },
    {
      id: 5,
      title: "Truyện ngắn hay",
      category: "Văn học",
      image: "images/story.jpg",
      flip: "https://example.com/book4",
    },
    {
      id: 6,
      title: "Lịch sử Việt Nam",
      category: "lịch sử",
      image: "images/history.jpg",
      flip: "https://example.com/book5",
    },
    {
      id: 7,
      title: "Khoa học vui",
      category: "khoa học",
      image: "images/science.jpg",
      flip: "https://example.com/book6",
    },
  ];

  const librarySection = document.createElement("div");
  librarySection.className = "library-section";
  librarySection.style.display = "none"; 
  librarySection.innerHTML = `
    <h1>📚 Thư viện sách lớp D4</h1>
    <div class="book-grid">
      <!-- Nội dung sách sẽ được thêm bằng JS -->
    </div>
  `;

  // Chèn phần thư viện sau promo banner
  const promoBanner = document.querySelector(".promo-banner");
  promoBanner.parentNode.insertBefore(librarySection, promoBanner.nextSibling);

  // Get unique categories
  const categories = [...new Set(books.map((book) => book.category))];

  // Create category buttons
  const filterContainer = document.createElement("div");
  filterContainer.className = "category-filter";

  // Add "All" button
  const allButton = document.createElement("button");
  allButton.className = "category-btn active";
  allButton.textContent = "Tất cả";
  allButton.dataset.category = "all";
  filterContainer.appendChild(allButton);

  // Add category buttons
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.className = "category-btn";
    button.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    button.dataset.category = category;
    filterContainer.appendChild(button);
  });

  // Insert filter buttons before book grid
  const bookGrid = document.querySelector(".book-grid");
  bookGrid.parentNode.insertBefore(filterContainer, bookGrid);

  // Hàm hiển thị sách theo danh mục
  function showBooks(category = "all") {
    // Update active button
    document.querySelectorAll(".category-btn").forEach((btn) => {
      btn.classList.remove("active");
    });
    document
      .querySelector(`.category-btn[data-category="${category}"]`)
      .classList.add("active");

    // Filter books
    const filteredBooks =
      category === "all"
        ? books
        : books.filter((book) => book.category === category);

    // Clear current books
    bookGrid.innerHTML = "";

    // Add filtered books
    filteredBooks.forEach((book) => {
      const bookCard = document.createElement("div");
      bookCard.className = "book-card";
      bookCard.dataset.flip = book.flip;

      bookCard.innerHTML = `
        <img src="${book.image}" alt="${book.title}" loading="lazy" />
        <p>${book.title}</p>
      `;

      bookGrid.appendChild(bookCard);
    });

    // Reattach click event to new book cards
    attachBookCardEvents();
  }

  // Xử lý sự kiện nút Khám phá ngay
  document.querySelector(".promo-btn").addEventListener("click", function () {
    // Hiển thị phần thư viện
    librarySection.style.display = "block";

    // Hiển thị tất cả sách ngay lập tức
    showBooks("all");

    // Cuộn trang xuống phần thư viện
    librarySection.scrollIntoView({ behavior: "smooth" });

    // Thêm hiệu ứng scroll down gợi ý
    const scrollDown = document.createElement("div");
    scrollDown.className = "scroll-down";
    scrollDown.innerHTML = '<i class="fas fa-chevron-down"></i>';
    scrollDown.addEventListener("click", () => {
      librarySection.scrollIntoView({ behavior: "smooth" });
    });

    promoBanner.appendChild(scrollDown);

    // Ẩn nút sau khi click
    this.style.display = "none";
  });

  // Filter books when category button is clicked
  filterContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("category-btn")) {
      showBooks(e.target.dataset.category);
    }
  });

  // Attach click events to book cards
  function attachBookCardEvents() {
    const bookCards = document.querySelectorAll(".book-card");
    const viewer = document.getElementById("flipbookViewer");
    const frame = document.getElementById("flipbookFrame");

    bookCards.forEach((card) => {
      card.addEventListener("click", () => {
        const flipURL = card.getAttribute("data-flip");
        frame.src = flipURL;
        viewer.style.display = "flex";
        document.body.style.overflow = "hidden"; // Prevent scrolling when viewer is open
      });
    });
  }

  // Initial attachment
  attachBookCardEvents();

  // Close flipbook when clicking outside content
  document
    .getElementById("flipbookViewer")
    .addEventListener("click", function (e) {
      if (e.target === this) {
        closeFlipbook();
      }
    });
});

function closeFlipbook() {
  document.getElementById("flipbookViewer").style.display = "none";
  document.getElementById("flipbookFrame").src = "";
  document.body.style.overflow = "auto"; // Re-enable scrolling
}

