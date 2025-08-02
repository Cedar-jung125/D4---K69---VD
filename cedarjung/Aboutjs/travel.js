document.addEventListener("DOMContentLoaded", function () {
  // Dữ liệu điểm đến
  const destinations = [
    {
      id: 1,
      name: "Đà Lạt - Thành phố ngàn hoa",
      description:
        "Khám phá thành phố mộng mơ với khí hậu se lạnh, những đồi thông bạt ngàn và vô số điểm check-in sống ảo.",
      price: "2.990.000 VND",
      image: "https://example.com/dalat.jpg",
      isStudentDiscount: true,
    },
    {
      id: 2,
      name: "Phú Quốc - Thiên đường biển đảo",
      description:
        "Trải nghiệm những bãi biển đẹp nhất Việt Nam với làn nước trong xanh và bờ cát trắng mịn.",
      price: "4.500.000 VND",
      image: "https://example.com/phuquoc.jpg",
      isStudentDiscount: false,
    },
    {
      id: 3,
      name: "Hà Giang - Cao nguyên đá",
      description:
        "Hành trình khám phá vẻ đẹp hoang sơ của núi rừng Tây Bắc, những con đèo quanh co và ruộng bậc thang hùng vĩ.",
      price: "3.200.000 VND",
      image: "https://example.com/hagiang.jpg",
      isStudentDiscount: true,
    },
    {
      id: 4,
      name: "Hội An - Phố cổ lãng mạn",
      description:
        "Dạo bước trong không gian cổ kính với những ngôi nhà vàng rực rỡ, thưởng thức ẩm thực đặc sắc miền Trung.",
      price: "2.800.000 VND",
      image: "https://example.com/hoian.jpg",
      isStudentDiscount: true,
    },
    {
      id: 5,
      name: "Nha Trang - Biển xanh cát trắng",
      description:
        "Thành phố biển với những resort sang trọng, hoạt động thể thao dưới nước thú vị và đảo khỉ đáng yêu.",
      price: "3.500.000 VND",
      image: "https://example.com/nhatrang.jpg",
      isStudentDiscount: false,
    },
    {
      id: 6,
      name: "Sa Pa - Thị trấn trong mây",
      description:
        "Ngắm nhìn những thửa ruộng bậc thang vàng óng, gặp gỡ đồng bào dân tộc và chinh phục đỉnh Fansipan.",
      price: "3.800.000 VND",
      image: "https://example.com/sapa.jpg",
      isStudentDiscount: true,
    },
  ];

  // Dữ liệu mẹo du lịch
  const travelTips = [
    {
      icon: "fa-wallet",
      title: "Tiết kiệm chi phí",
      content:
        "Đặt vé sớm trước 2 tháng để nhận ưu đãi lên đến 30%. Sử dụng thẻ học sinh để được giảm giá tại nhiều điểm tham quan.",
    },
    {
      icon: "fa-suitcase",
      title: "Đóng gói thông minh",
      content:
        "Chỉ mang theo những thứ thực sự cần thiết. Sử dụng túi nén để tiết kiệm không gian vali. Nhớ mang theo thuốc cá nhân và đồ dùng vệ sinh cơ bản.",
    },
    {
      icon: "fa-map-marked-alt",
      title: "Lập kế hoạch di chuyển",
      content:
        "Nghiên cứu trước các phương tiện công cộng tại điểm đến. Tải ứng dụng bản đồ offline phòng trường hợp không có internet.",
    },
    {
      icon: "fa-utensils",
      title: "Ẩm thực địa phương",
      content:
        "Thử các món ăn đường phố để tiết kiệm và trải nghiệm văn hóa ẩm thực chân thật nhất. Hỏi người dân địa phương để biết quán ăn ngon.",
    },
    {
      icon: "fa-camera",
      title: "Chụp ảnh đẹp",
      content:
        "Chụp ảnh vào sáng sớm hoặc chiều tà để có ánh sáng đẹp nhất. Tìm các góc chụp độc đáo thay vì chỉ chụp tại các điểm nổi tiếng.",
    },
  ];

  // Dữ liệu cảm nhận
  const testimonials = [
    {
      content:
        "Chuyến đi Sầm Sơn với lớp thực sự là trải nghiệm tuyệt vời nhất năm học của mình. Giá cả hợp lý mà dịch vụ rất chuyên nghiệp!",
      author: "Nguyễn Minh Khôi",
      role: "Học sinh lớp 10D4 - K69 - VĐ",
      avatar: "/img/member/nguyenminhkhoi.jpg",
    },
    {
      content: "Chuyến đi thăm cố đô Hoa Lư - Ninh Bình",
      author: "Hà Minh Châu",
      role: "Học sinh lớp 11D4 - K69 - VĐ",
      avatar: "https://example.com/avatar2.jpg",
    },
    {
      content: "Chuyến phiêu lưu tới vịnh Hạ Long",
      author: "Nguyễn Thị Anh Thư",
      role: "Học sinh lớp 12D4 - K69 - VĐ",
      avatar: "https://example.com/avatar3.jpg",
    },
  ];

  // Hiển thị điểm đến
  const destinationGrid = document.querySelector(".destination-grid");
  destinations.forEach((destination) => {
    const destinationCard = document.createElement("div");
    destinationCard.className = "destination-card";

    let badge = "";
    if (destination.isStudentDiscount) {
      badge =
        '<div class="student-badge"><i class="fas fa-graduation-cap"></i> Học sinh</div>';
    }

    destinationCard.innerHTML = `
            <div class="destination-image">
                <img src="${destination.image}" alt="${destination.name}">
            </div>
            ${badge}
            <div class="destination-info">
                <h3 class="destination-name">${destination.name}</h3>
                <p class="destination-description">${destination.description}</p>
                <span class="destination-price">Chỉ từ ${destination.price}</span>
                <button class="view-details">Xem chi tiết <i class="fas fa-arrow-right"></i></button>
            </div>
        `;

    destinationGrid.appendChild(destinationCard);
  });

  // Hiển thị mẹo du lịch
  const tipsCarousel = document.querySelector(".tips-carousel");
  travelTips.forEach((tip) => {
    const tipCard = document.createElement("div");
    tipCard.className = "tip-card";
    tipCard.innerHTML = `
            <div class="tip-icon">
                <i class="fas ${tip.icon}"></i>
            </div>
            <h4 class="tip-title">${tip.title}</h4>
            <p class="tip-content">${tip.content}</p>
        `;
    tipsCarousel.appendChild(tipCard);
  });

  // Hiển thị cảm nhận
  const testimonialSlider = document.querySelector(".testimonial-slider");
  testimonials.forEach((testimonial) => {
    const testimonialCard = document.createElement("div");
    testimonialCard.className = "testimonial-card";
    testimonialCard.innerHTML = `
            <p class="testimonial-content">${testimonial.content}</p>
            <div class="testimonial-author">
                <div class="author-avatar">
                    <img src="${testimonial.avatar}" alt="${testimonial.author}">
                </div>
                <div class="author-info">
                    <h4>${testimonial.author}</h4>
                    <p>${testimonial.role}</p>
                </div>
            </div>
        `;
    testimonialSlider.appendChild(testimonialCard);
  });

  // Xử lý hover cho các card
  const cards = document.querySelectorAll(
    ".destination-card, .tip-card, .testimonial-card"
  );
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transition = "all 0.3s ease";
    });
  });

  // Xử lý form đăng ký
  const newsletterForm = document.querySelector(".newsletter-form");
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const emailInput = this.querySelector('input[type="email"]');
    if (emailInput.value && emailInput.value.includes("@")) {
      alert(
        "Cảm ơn vì đã đăng ký nha! Sẽ có những thông tin mới nhất gửi tới mail của bạn."
      );
      emailInput.value = "";
    } else {
      alert("Vui lòng nhập địa chỉ email hợp lệ.");
    }
  });

  // Hiệu ứng scroll cho hero section
  const heroScroll = document.querySelector(".hero-scroll");
  heroScroll.addEventListener("click", function () {
    window.scrollTo({
      top: document.querySelector(".featured-destinations").offsetTop - 80,
      behavior: "smooth",
    });
  });

  // Thêm hiệu ứng khi cuộn trang
  window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100) {
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
      }
    });
  });

  // Khởi tạo trạng thái ban đầu cho các section
  const initSections = () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(30px)";
      section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });

    // Kích hoạt hiệu ứng cho section đầu tiên
    setTimeout(() => {
      document.querySelector(".featured-destinations").style.opacity = "1";
      document.querySelector(".featured-destinations").style.transform =
        "translateY(0)";
    }, 300);
  };

  initSections();
});

document.addEventListener("DOMContentLoaded", function () {
  const domesticData = [
    {
      id: 1,
      title: "Đà Lạt - Thành phố ngàn hoa",
      price: "2.990.000 VND",
      description:
        "Đà Lạt với khí hậu mát mẻ quanh năm, những đồi thông bạt ngàn và vô số điểm check-in sống ảo là điểm đến lý tưởng cho học sinh. Thành phố này còn nổi tiếng với các vườn hoa, hồ nước thơ mộng và ẩm thực đặc sắc.",
      images: [
        "img/du-lich-da-lat-3-1305.jpg",
        "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a",
        "https://images.unsplash.com/photo-1579630942071-4b06b4a1a8f9",
        "https://images.unsplash.com/photo-1579630942071-4b06b4a1a8f9",
      ],
      highlights: [
        "Thung lũng Tình Yêu",
        "Hồ Xuân Hương",
        "Đồi chè Cầu Đất",
        "Chợ đêm Đà Lạt",
      ],
      tips: [
        "Mang theo áo ấm vì đêm Đà Lạt khá lạnh",
        "Nên thuê xe máy để tự do khám phá",
        "Thử món bánh ướt lòng gà đặc sản",
      ],
    },
    {
      id: 2,
      title: "Đà Lạt - Thành phố ngàn hoa",
      price: "2.990.000 VND",
      description:
        "Đà Lạt với khí hậu mát mẻ quanh năm, những đồi thông bạt ngàn và vô số điểm check-in sống ảo là điểm đến lý tưởng cho học sinh. Thành phố này còn nổi tiếng với các vườn hoa, hồ nước thơ mộng và ẩm thực đặc sắc.",
      images: [
        "https://images.unsplash.com/photo-1596524430615-b46475bff5aa",
        "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a",
        "https://images.unsplash.com/photo-1579630942071-4b06b4a1a8f9",
        "https://images.unsplash.com/photo-1579630942071-4b06b4a1a8f9",
      ],
      highlights: [
        "Thung lũng Tình Yêu",
        "Hồ Xuân Hương",
        "Đồi chè Cầu Đất",
        "Chợ đêm Đà Lạt",
      ],
      tips: [
        "Mang theo áo ấm vì đêm Đà Lạt khá lạnh",
        "Nên thuê xe máy để tự do khám phá",
        "Thử món bánh ướt lòng gà đặc sản",
      ],
    },
  ];

  const internationalData = [
    {
      id: 101,
      title: "Tokyo - Nhật Bản",
      price: "15.990.000 VND",
      description:
        "Tokyo là sự pha trộn độc đáo giữa truyền thống và hiện đại. Từ những ngôi đền cổ kính đến các tòa nhà chọc trời hiện đại, thành phố này luôn có điều gì đó mới mẻ để khám phá. Đặc biệt vào mùa hoa anh đào, Tokyo khoác lên mình vẻ đẹp lãng mạn hiếm có.",
      images: [
        "https://images.unsplash.com/photo-1542051841857-5f90071e7989",
        "https://images.unsplash.com/photo-1492571350019-22de08371fd3",
        "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
        "https://images.unsplash.com/photo-1492571350019-22de08371fd3",
      ],
      highlights: [
        "Shibuya Crossing",
        "Đền Sensoji",
        "Công viên Ueno",
        "Tháp Tokyo Skytree",
      ],
      tips: [
        "Mua thẻ JR Pass để tiết kiệm chi phí di chuyển",
        "Thử sushi tại chợ cá Tsukiji",
        "Đến sớm để tránh đám đông ở các điểm du lịch",
      ],
    },
    // Thêm các điểm đến khác...
  ];

  const airlinesData = [
    {
      id: 1,
      name: "Vietnam Airlines",
      logo: "img/slogan-cua-vietnam-airlines.jpg",
    },
    {
      id: 2,
      name: "Bamboo Airways",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Bamboo_Airways_logo.svg/1200px-Bamboo_Airways_logo.svg.png",
    },
    // Thêm các hãng bay khác...
  ];

  // DOM Elements
  const navBtns = document.querySelectorAll(".nav-btn");
  const sections = document.querySelectorAll(".travel-section");
  const domesticGrid = document.getElementById("domestic-grid");
  const internationalGrid = document.getElementById("international-grid");
  const airlinesGrid = document.getElementById("airlines-grid");
  const detailOverlay = document.getElementById("detail-overlay");
  const detailContainer = document.getElementById("detail-container");
  const backBtn = document.getElementById("back-btn");

  // Navigation
  navBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Xóa active tất cả nút
      navBtns.forEach((b) => b.classList.remove("active"));
      // Thêm active cho nút được click
      this.classList.add("active");

      // Ẩn tất cả section
      sections.forEach((section) => section.classList.add("hidden"));
      // Hiện section tương ứng
      const target = this.dataset.target;
      document.getElementById(target).classList.remove("hidden");
    });
  });

  // Render Domestic Destinations
  function renderDomesticDestinations() {
    domesticGrid.innerHTML = "";
    domesticData.forEach((item) => {
      const card = createDestinationCard(item);
      domesticGrid.appendChild(card);
    });
  }

  // Render International Destinations
  function renderInternationalDestinations() {
    internationalGrid.innerHTML = "";
    internationalData.forEach((item) => {
      const card = createDestinationCard(item);
      internationalGrid.appendChild(card);
    });
  }

  // Render Airlines
  function renderAirlines() {
    airlinesGrid.innerHTML = "";
    airlinesData.forEach((airline) => {
      const card = document.createElement("div");
      card.className = "airline-card";
      card.innerHTML = `
                <img src="${airline.logo}" alt="${
        airline.name
      }" class="airline-logo">
                <h3 class="airline-name">${airline.name}</h3>
                ${
                  airline.studentDiscount
                    ? `<span class="student-badge">${airline.studentDiscount}</span>`
                    : ""
                }
            `;
      airlinesGrid.appendChild(card);
    });
  }

  // Tạo card điểm đến
  function createDestinationCard(data) {
    const card = document.createElement("div");
    card.className = "destination-card";
    card.innerHTML = `
            <div class="destination-image">
                <img src="${data.images[0]}" alt="${data.title}">
            </div>
            <div class="destination-info">
                <h3 class="destination-name">${data.title}</h3>
                <p class="destination-description">${data.description.substring(
                  0,
                  150
                )}...</p>
                <span class="destination-price">${data.price}</span>
                <button class="view-details" data-id="${data.id}">
                    Xem chi tiết <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `;

    // Thêm sự kiện click
    card
      .querySelector(".view-details")
      .addEventListener("click", () => showDetail(data));
    return card;
  }

  // Hiển thị chi tiết điểm đến
  function showDetail(data) {
    // Tạo HTML cho detail view
    let imagesHTML = "";
    data.images.forEach((img, index) => {
      if (index === 0) {
        imagesHTML += `<div class="detail-main-image">
                    <img src="${img}" alt="${data.title}">
                </div>`;
      } else {
        imagesHTML += `<div class="detail-secondary-image">
                    <img src="${img}" alt="${data.title}">
                </div>`;
      }
    });

    let highlightsHTML = data.highlights
      .map((item) => `<li>${item}</li>`)
      .join("");
    let tipsHTML = data.tips.map((item) => `<li>${item}</li>`).join("");

    detailContainer.innerHTML = `
            <div class="detail-header">
                <h1 class="detail-title">${data.title}</h1>
                <span class="detail-price">${data.price}</span>
            </div>
            
            <div class="detail-gallery">
                ${imagesHTML}
            </div>
            
            <div class="detail-content">
                <div class="detail-description">
                    <h3>Giới thiệu</h3>
                    <p>${data.description}</p>
                </div>
                
                <div class="detail-info">
                    <h3>Điểm nổi bật</h3>
                    <ul>${highlightsHTML}</ul>
                    
                    <h3>Mẹo du lịch</h3>
                    <ul>${tipsHTML}</ul>
                </div>
            </div>
            
            <div class="detail-actions">
                <button class="book-btn">
                    <i class="fas fa-ticket-alt"></i> Đặt tour ngay
                </button>
            </div>
        `;

    // Hiển thị detail view
    detailOverlay.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  // Sự kiện nút back
  backBtn.addEventListener("click", function () {
    detailOverlay.classList.remove("show");
    document.body.style.overflow = "auto";
  });

  // Khởi tạo
  renderDomesticDestinations();
  renderInternationalDestinations();
  renderAirlines();
});
