document.addEventListener("DOMContentLoaded", function () {
  // Dữ liệu các chương trình
  const programs = [
    {
      id: 1,
      title: "GYM Cơ Bản Cho Nam",
      description:
        "Hướng dẫn tập gym cơ bản phù hợp với học sinh nam, tập trung vào phát triển cơ bắp và thể lực.",
      image:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80",
      type: "male",
      badge: "Mới",
      detail: {
        bgColor: "#1a2a4a",
        textColor: "#ffffff",
        images: [
          "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80",
          "https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        ],
        content: `
          <div class="mylove-detail-header">
            <h2>GYM CƠ BẢN CHO HỌC SINH NAM</h2>
            <div class="mylove-detail-meta">
              <span class="mylove-program-type male">Nam</span>
              <span class="mylove-detail-rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                (4.5/5)
              </span>
              <span class="mylove-detail-date"><i class="far fa-calendar-alt"></i> Cập nhật: 24/07/2025</span>
            </div>
          </div>
          
          <div class="mylove-detail-gallery">
            <div class="mylove-detail-main-img">
              <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80" alt="Gym cơ bản">
            </div>
            <div class="mylove-detail-thumbnails">
              <div class="mylove-thumbnail active">
                <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80" alt="Thumb 1">
              </div>
              <div class="mylove-thumbnail">
                <img src="https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Thumb 2">
              </div>
              <div class="mylove-thumbnail">
                <img src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="Thumb 3">
              </div>
            </div>
          </div>
          
          <div class="mylove-detail-body">
            <div class="mylove-detail-section">
              <h3><i class="fas fa-dumbbell"></i> Lợi ích của việc tập Gym</h3>
              <p>Tập gym giúp học sinh nam phát triển thể chất toàn diện, tăng cường sức mạnh và sự dẻo dai. Chương trình này được thiết kế đặc biệt cho lứa tuổi học sinh với các bài tập phù hợp.</p>
            </div>
            
            <div class="mylove-detail-section">
              <h3><i class="fas fa-list-ol"></i> Các bài tập cơ bản</h3>
              <div class="mylove-exercise-list">
                <div class="mylove-exercise">
                  <div class="mylove-exercise-icon">
                    <i class="fas fa-fire"></i>
                  </div>
                  <div class="mylove-exercise-content">
                    <h4>Hít đất</h4>
                    <p>3 hiệp, mỗi hiệp 10-15 lần</p>
                  </div>
                </div>
                <div class="mylove-exercise">
                  <div class="mylove-exercise-icon">
                    <i class="fas fa-fire"></i>
                  </div>
                  <div class="mylove-exercise-content">
                    <h4>Gập bụng</h4>
                    <p>3 hiệp, mỗi hiệp 15-20 lần</p>
                  </div>
                </div>
                <div class="mylove-exercise">
                  <div class="mylove-exercise-icon">
                    <i class="fas fa-fire"></i>
                  </div>
                  <div class="mylove-exercise-content">
                    <h4>Squat</h4>
                    <p>3 hiệp, mỗi hiệp 12-15 lần</p>
                  </div>
                </div>
                <div class="mylove-exercise">
                  <div class="mylove-exercise-icon">
                    <i class="fas fa-fire"></i>
                  </div>
                  <div class="mylove-exercise-content">
                    <h4>Hít xà đơn</h4>
                    <p>3 hiệp, mỗi hiệp 5-8 lần</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="mylove-detail-section">
              <h3><i class="fas fa-exclamation-triangle"></i> Lưu ý quan trọng</h3>
              <p>Luôn khởi động kỹ trước khi tập, uống đủ nước và nghỉ ngơi hợp lý. Không nên tập quá sức và cần có người hướng dẫn khi mới bắt đầu.</p>
            </div>
          </div>
          
          <div class="mylove-detail-footer">
            <button class="mylove-detail-action">
              <i class="fas fa-download"></i> Tải xuống giáo trình
            </button>
            <button class="mylove-detail-action">
              <i class="fas fa-share-alt"></i> Chia sẻ
            </button>
          </div>
        `,
      },
    },
    {
      id: 2,
      title: "Yoga Cho Nữ",
      description:
        "Các bài tập yoga giúp học sinh nữ giảm căng thẳng, tăng cường sự dẻo dai và sức khỏe tinh thần.",
      image:
        "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      type: "female",
      badge: "Phổ biến",
      detail: {
        bgColor: "#4a1a2a",
        textColor: "#ffffff",
        images: [
          "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1520&q=80",
        ],
        content: `
          <div class="mylove-detail-header">
            <h2>YOGA CHO HỌC SINH NỮ</h2>
            <div class="mylove-detail-meta">
              <span class="mylove-program-type female">Nữ</span>
              <span class="mylove-detail-rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                (4.7/5)
              </span>
              <span class="mylove-detail-date"><i class="far fa-calendar-alt"></i> Cập nhật: 25/07/2025</span>
            </div>
          </div>
          
          <div class="mylove-detail-gallery">
            <div class="mylove-detail-main-img">
              <img src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Yoga cho nữ">
            </div>
            <div class="mylove-detail-thumbnails">
              <div class="mylove-thumbnail active">
                <img src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Thumb 1">
              </div>
              <div class="mylove-thumbnail">
                <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Thumb 2">
              </div>
              <div class="mylove-thumbnail">
                <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1520&q=80" alt="Thumb 3">
              </div>
            </div>
          </div>
          
          <div class="mylove-detail-body">
            <div class="mylove-detail-section">
              <h3><i class="fas fa-spa"></i> Lợi ích của Yoga</h3>
              <p>Yoga giúp học sinh nữ giảm căng thẳng, tăng cường sự dẻo dai và cân bằng cảm xúc. Đặc biệt phù hợp trong giai đoạn thi cử căng thẳng.</p>
            </div>
            
            <div class="mylove-detail-section">
              <h3><i class="fas fa-list-ol"></i> Các tư thế cơ bản</h3>
              <div class="mylove-exercise-list">
                <div class="mylove-exercise">
                  <div class="mylove-exercise-icon">
                    <i class="fas fa-mountain"></i>
                  </div>
                  <div class="mylove-exercise-content">
                    <h4>Tư thế ngọn núi (Tadasana)</h4>
                    <p>Giúp cải thiện tư thế và tăng sự tập trung</p>
                  </div>
                </div>
                <div class="mylove-exercise">
                  <div class="mylove-exercise-icon">
                    <i class="fas fa-tree"></i>
                  </div>
                  <div class="mylove-exercise-content">
                    <h4>Tư thế cái cây (Vrksasana)</h4>
                    <p>Cải thiện thăng bằng và sự tập trung</p>
                  </div>
                </div>
                <div class="mylove-exercise">
                  <div class="mylove-exercise-icon">
                    <i class="fas fa-baby"></i>
                  </div>
                  <div class="mylove-exercise-content">
                    <h4>Tư thế em bé (Balasana)</h4>
                    <p>Giúp thư giãn và giảm căng thẳng</p>
                  </div>
                </div>
                <div class="mylove-exercise">
                  <div class="mylove-exercise-icon">
                    <i class="fas fa-dog"></i>
                  </div>
                  <div class="mylove-exercise-content">
                    <h4>Tư thế chó cúi mặt (Adho Mukha Svanasana)</h4>
                    <p>Kéo giãn cột sống và tăng tuần hoàn máu</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="mylove-detail-section">
              <h3><i class="fas fa-clock"></i> Thời gian tập lý tưởng</h3>
              <p>Nên tập yoga vào buổi sáng sau khi ngủ dậy hoặc buổi tối trước khi đi ngủ. Mỗi buổi tập từ 20-30 phút, 3-4 lần/tuần.</p>
            </div>
          </div>
          
          <div class="mylove-detail-footer">
            <button class="mylove-detail-action">
              <i class="fas fa-download"></i> Tải xuống giáo trình
            </button>
            <button class="mylove-detail-action">
              <i class="fas fa-share-alt"></i> Chia sẻ
            </button>
          </div>
        `,
      },
    },
    {
      id: 3,
      title: "Dinh Dưỡng Học Đường",
      description:
        "Hướng dẫn chế độ dinh dưỡng cân bằng phù hợp với lứa tuổi học sinh, giúp phát triển toàn diện.",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80",
      type: "unisex",
    },
    {
      id: 4,
      title: "Thể Dục Buổi Sáng",
      description:
        "Các bài tập thể dục buổi sáng đơn giản giúp học sinh khởi động ngày mới tràn đầy năng lượng.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      type: "unisex",
      badge: "Hot",
    },
    {
      id: 5,
      title: "Bóng Rổ Cơ Bản",
      description:
        "Hướng dẫn kỹ thuật chơi bóng rổ cơ bản cho học sinh nam, phát triển chiều cao và thể lực.",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1490&q=80",
      type: "male",
    },
    {
      id: 6,
      title: "Nhảy Hiện Đại Cho Nữ",
      description:
        "Các bài nhảy hiện đại giúp học sinh nữ rèn luyện sự dẻo dai, tự tin và giải tỏa căng thẳng.",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      type: "female",
      badge: "Mới",
    },
    {
      id: 7,
      title: "Thể Dục Dụng Cụ",
      description:
        "Hướng dẫn sử dụng các dụng cụ thể dục trong trường học một cách hiệu quả và an toàn.",
      image:
        "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      type: "unisex",
    },
    {
      id: 8,
      title: "Tập Tạ Tăng Cơ",
      description:
        "Chương trình tập tạ phù hợp với học sinh nam muốn phát triển cơ bắp một cách khoa học.",
      image:
        "https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      type: "male",
    },
    // Các chương trình khác...
  ];

  // Hiển thị tất cả chương trình ban đầu
  displayPrograms(programs);

  // Xử lý sự kiện click trên các nút category
  const categoryBtns = document.querySelectorAll(".mylove-category-btn");
  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      categoryBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      const category = this.getAttribute("data-category");

      if (category === "all") {
        displayPrograms(programs);
      } else {
        const filteredPrograms = programs.filter(
          (program) => program.type === category
        );
        displayPrograms(filteredPrograms);
      }
    });
  });

  // Xử lý click vào chương trình
  document.addEventListener("click", function (e) {
    if (e.target.closest(".mylove-program")) {
      const programId = parseInt(
        e.target.closest(".mylove-program").getAttribute("data-id")
      );
      const program = programs.find((p) => p.id === programId);

      if (program && program.detail) {
        showProgramDetail(program);
      }
    }
  });

  document
    .querySelector(".mylove-hero-cta")
    .addEventListener("click", function (e) {
      e.preventDefault();
      const contentSection = document.querySelector(".mylove-main");
      contentSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

  // Xử lý nút quay lại
  document.getElementById("backButton").addEventListener("click", function () {
    document.getElementById("mainContent").style.display = "block";
    document.getElementById("detailContent").style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Hàm hiển thị danh sách chương trình
  function displayPrograms(programsToDisplay) {
    const container = document.getElementById("programsContainer");

    if (programsToDisplay.length === 0) {
      container.innerHTML =
        '<p style="grid-column: 1/-1; text-align: center; padding: 50px; color: #666;">Không có chương trình nào trong danh mục này.</p>';
      return;
    }

    let html = "";
    programsToDisplay.forEach((program) => {
      html += `
        <div class="mylove-program" data-id="${program.id}" data-type="${
        program.type
      }">
          ${
            program.badge
              ? `<span class="mylove-program-badge">${program.badge}</span>`
              : ""
          }
          <img src="${program.image}" alt="${
        program.title
      }" class="mylove-program-img">
          <div class="mylove-program-content">
            <h3 class="mylove-program-title">${program.title}</h3>
            <p class="mylove-program-desc">${program.description}</p>
            <div class="mylove-program-meta">
              <span class="mylove-program-type ${program.type}">${getTypeName(
        program.type
      )}</span>
              <a href="#" class="mylove-program-link">Xem chi tiết <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  // Hàm hiển thị chi tiết chương trình
  function showProgramDetail(program) {
    document.getElementById("mainContent").style.display = "none";
    const detailContent = document.getElementById("detailContent");

    // Áp dụng màu sắc từ dữ liệu chương trình
    detailContent.style.backgroundColor = program.detail.bgColor || "#1a2a4a";
    detailContent.style.color = program.detail.textColor || "#ffffff";

    detailContent.style.display = "block";
    document.getElementById("detailData").innerHTML = program.detail.content;

    // Thêm hiệu ứng cho ảnh chi tiết
    const thumbnails = document.querySelectorAll(".mylove-thumbnail");
    const mainImg = document.querySelector(".mylove-detail-main-img img");

    thumbnails.forEach((thumb) => {
      thumb.addEventListener("click", function () {
        const thumbImg = this.querySelector("img");
        mainImg.src = thumbImg.src;

        thumbnails.forEach((t) => t.classList.remove("active"));
        this.classList.add("active");
      });
    });

    // Kích hoạt ảnh đầu tiên
    if (thumbnails.length > 0) {
      thumbnails[0].classList.add("active");
    }

    const heroSection = document.querySelector(".mylove-hero");
    const heroHeight = heroSection.offsetHeight;

    // Cuộn đến vị trí ngay sau hero section
    window.scrollTo({
      top: heroHeight,
      behavior: "smooth",
    });
  }

  // Hàm chuyển đổi type sang tên hiển thị
  function getTypeName(type) {
    switch (type) {
      case "male":
        return "Nam";
      case "female":
        return "Nữ";
      case "unisex":
        return "Cả hai";
      default:
        return "";
    }
  }
});
