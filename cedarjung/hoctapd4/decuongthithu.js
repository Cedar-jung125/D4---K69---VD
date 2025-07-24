document.addEventListener("DOMContentLoaded", function () {
  // 1. Xử lý phần chọn chế độ (Đề cương/Thi thử)
  function openPracticeMode(mode) {
    document.querySelector(".vd4-mode-gateway").style.display = "none";
    if (mode === "decuong") {
      document.querySelector(".vd4-doc-section").style.display = "block";
    } else {
      document.querySelector(".vd4-test-section").style.display = "block";
    }
  }

  function goBackToGateway() {
    document.querySelector(".vd4-mode-gateway").style.display = "block";
    document.querySelector(".vd4-doc-section").style.display = "none";
    document.querySelector(".vd4-test-section").style.display = "none";
    resetViewer();
  }

  // 2. Xử lý phần xem PDF
  const viewer = document.getElementById("doc-viewer");
  let currentDoc = null;
  let currentPhase = null;
  const phases = ["Giữa HKI", "HKI", "Giữa HKII", "HKII"];
  const subjects = [
    "Toán",
    "Ngữ Văn",
    "Ngoại ngữ",
    "Lịch Sử",
    "Vật lí",
    "Địa lí",
    "GDKT - PL",
    "Tin học",
  ];

  const pdfData = [
    {
      title: "Đề cương khối 10",
      phase: "Giữa HKII",
      subject: "Ngữ Văn",
      filename: "vangiuaki210d4.pdf",
    },
    {
      title: "Đề cương khối 10",
      phase: "Giữa HKII",
      subject: "Địa lí",
      filename: "dialigiuaki210d4.pdf",
    },
    {
      title: "Đề cương khối 10",
      phase: "HKII",
      subject: "Toán",
      filename: "toanki210d4.pdf",
    },
    {
      title: "Đề cương khối 10",
      phase: "HKII",
      subject: "Ngữ Văn",
      filename: "vanki210d4.pdf",
    },
    {
      title: "Đề cương khối 10",
      phase: "HKII",
      subject: "Vật lí",
      filename: "vatliki210d4.pdf",
    },
    {
      title: "Đề cương khối 10",
      phase: "HKII",
      subject: "GDKT - PL",
      filename: "gdktplki210d4.pdf",
    },
    {
      title: "Đề cương khối 10",
      phase: "HKII",
      subject: "Lịch Sử",
      filename: "lichsuki210d4.pdf",
    },
    {
      title: "Đáp án đề cương khối 10",
      phase: "HKII",
      subject: "Toán",
      filename: "decuongmontoanki210d4.pdf",
    },
    {
      title: "Đáp án đề cương khối 10",
      phase: "HKII",
      subject: "Tin học",
      filename: "decuongmontinhocki210d4.pdf",
    },
    {
      title: "Đáp án đề cương khối 10",
      phase: "HKII",
      subject: "Lịch Sử",
      filename: "decuongmonlichsuki210d4.pdf",
    },
    {
      title: "Đáp án đề cương khối 10",
      phase: "HKII",
      subject: "GDKT - PL",
      filename: "decuongmongdktplki210d4.pdf",
    },
    {
      title: "Đáp án đề cương khối 10",
      phase: "HKII",
      subject: "Vật lí",
      filename: "decuongmonvatliki210d4.pdf",
    },
    {
      title: "Đáp án đề cương khối 10",
      phase: "HKII",
      subject: "Địa lí",
      filename: "decuongmondialiki210d4.pdf",
    },
    {
      title: "Đáp án đề cương khối 10",
      phase: "Giữa HKII",
      subject: "Lịch Sử",
      filename: "decuongmonlichsugiuaki210d4.pdf",
    },
    {
      title: "Đáp án đề cương khối 10",
      phase: "Giữa HKII",
      subject: "Ngữ Văn",
      filename: "decuongmonvangiuaki210d4.pdf",
    },
    {
      title: "Đáp án đề cương khối 10",
      phase: "Giữa HKII",
      subject: "Địa lí",
      filename: "decuongmondialigiuaki210d4.pdf",
    },
    {
      title: "Đáp án đề cương khối 10",
      phase: "HKI",
      subject: "Địa lí",
      filename: "decuongmondialiki110d4.pdf",
    },
    {
      title: "Đáp án đề cương khối 10",
      phase: "HKI",
      subject: "Tin học",
      filename: "decuongmontinhocki110d4.pdf",
    },
    {
      title: "Đáp án đề cương khối 10",
      phase: "HKI",
      subject: "Lịch Sử",
      filename: "decuongmonlichsuki110d4.pdf",
    },
    {
      title: "Đáp án đề cương khối 10",
      phase: "HKI",
      subject: "Toán",
      filename: "decuongmontoanki110d4.pdf",
    },
    {
      title: "Đáp án đề cương khối 10",
      phase: "HKI",
      subject: "GDKT - PL",
      filename: "decuongmongdktplki110d4.pdf",
    },
    {
      title: "Đáp án đề cương khối 10",
      phase: "Giữa HKI",
      subject: "GDKT - PL",
      filename: "decuongmongdktplgiuaki110d4.pdf",
    },
    {
      title: "Đáp án đề cương khối 10",
      phase: "Giữa HKI",
      subject: "Lịch Sử",
      filename: "decuongmonlichsugiuaki110d4.pdf",
    },
    {
      title: "Đáp án đề cương khối 10",
      phase: "Giữa HKI",
      subject: "Địa lí",
      filename: "decuongmondialigiuaki110d4.pdf",
    },
  ];

  // Khởi tạo sự kiện ngay sau khi DOM load
  initDocumentEvents();

  function initDocumentEvents() {
    const documents = document.querySelectorAll(".vd4-doc-card");
    documents.forEach((doc) => {
      doc.addEventListener("click", (e) => {
        e.preventDefault();
        const title = doc.querySelector(".vd4-doc-title").innerText;
        if (currentDoc !== title) {
          currentDoc = title;
          currentPhase = null;
          renderPhases(title);
        } else {
          resetViewer();
        }
      });
    });
  }

  function renderPhases(title) {
    viewer.innerHTML = `
        <h3>${title}</h3>
        <div class="subject-list">
            ${phases
              .map(
                (phase) => `
                <button class="phase-btn" data-title="${title}" data-phase="${phase}">${phase}</button>
            `
              )
              .join("")}
        </div>
      `;

    // Gắn sự kiện cho các nút phase
    document.querySelectorAll(".phase-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        selectPhase(
          this.getAttribute("data-title"),
          this.getAttribute("data-phase")
        );
      });
    });
  }

  function selectPhase(title, phase) {
    currentDoc = title;
    currentPhase = phase;

    viewer.innerHTML = `
        <h3>${title} - ${phase}</h3>
        <div class="subject-list">
            ${subjects
              .map(
                (subject) => `
                <button class="subject-btn" 
                        data-title="${title}" 
                        data-phase="${phase}" 
                        data-subject="${subject}">${subject}</button>
            `
              )
              .join("")}
        </div>
        <button class="back-phase-btn">← Quay lại học kỳ</button>
      `;

    // Gắn sự kiện cho các nút môn học
    document.querySelectorAll(".subject-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        loadPDF(
          this.getAttribute("data-title"),
          this.getAttribute("data-phase"),
          this.getAttribute("data-subject")
        );
      });
    });

    // Gắn sự kiện nút quay lại
    document.querySelector(".back-phase-btn").addEventListener("click", () => {
      renderPhases(title);
    });
  }

  function loadPDF(title, phase, subject) {
    const pdf = pdfData.find(
      (p) => p.title === title && p.phase === phase && p.subject === subject
    );

    if (!pdf) {
      viewer.innerHTML = `<p class="pdf-error">Không tìm thấy file PDF phù hợp!</p>`;
      return;
    }

    // Sửa đường dẫn PDF thành tương đối (bỏ dấu / ở đầu)
    viewer.innerHTML = `
        <h3>${title} - ${phase} - Môn ${subject}</h3>
        <iframe src="pdf/${encodeURIComponent(pdf.filename)}" 
                width="100%" 
                height="600px" 
                frameborder="0"></iframe>
        <div class="back-button-wrapper">
            <button class="back-subject-btn">← Quay lại môn học</button>
        </div>
      `;

    // Gắn sự kiện nút quay lại
    document
      .querySelector(".back-subject-btn")
      .addEventListener("click", () => {
        selectPhase(title, phase);
      });
  }

  function resetViewer() {
    currentDoc = null;
    currentPhase = null;
    viewer.innerHTML = "";
  }

  // 3. Gắn sự kiện cho các nút chính
  document.querySelectorAll('[onclick^="openPracticeMode"]').forEach((btn) => {
    const mode = btn
      .getAttribute("onclick")
      .replace("openPracticeMode('", "")
      .replace("')", "");
    btn.addEventListener("click", () => openPracticeMode(mode));
  });

  document.querySelectorAll('[onclick="goBackToGateway()"]').forEach((btn) => {
    btn.addEventListener("click", goBackToGateway);
  });

  // 4. Khởi tạo trạng thái ban đầu
  document.querySelector(".vd4-mode-gateway").style.display = "block";
  document.querySelector(".vd4-doc-section").style.display = "none";
  document.querySelector(".vd4-test-section").style.display = "none";
});
