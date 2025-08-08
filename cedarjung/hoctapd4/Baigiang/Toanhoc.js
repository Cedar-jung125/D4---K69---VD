// ====== TOÀN BỘ PHẦN JAVASCRIPT HOÀN CHỈNH ======
document.addEventListener("DOMContentLoaded", function () {
  // ====== CẤU TRÚC DỮ LIỆU ======
  const mockTests = {
    "multiple-choice": [
      {
        id: 1,
        title: "Đại số cơ bản",
        duration: 1800, // 30 phút (giây)
        totalQuestions: 5, // Giảm số câu để demo
        maxScore: 40,
        instructions:
          "Bao gồm các câu hỏi về phương trình, bất đẳng thức, hàm số cơ bản.",
        image:
          "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        questions: [
          {
            id: 1,
            text: "Nghiệm của phương trình x² - 5x + 6 = 0 là:",
            options: [
              "x = 2 và x = 3",
              "x = -2 và x = -3",
              "x = 1 và x = 6",
              "x = -1 và x = -6",
            ],
            correctAnswer: 0,
            points: 8,
          },
          {
            id: 2,
            text: "Đạo hàm của hàm số f(x) = 3x² + 2x - 5 là:",
            options: ["6x + 2", "3x + 2", "6x - 5", "3x² + 2"],
            correctAnswer: 0,
            points: 8,
          },
          {
            id: 3,
            text: "Giá trị của biểu thức (2 + √3)(2 - √3) là:",
            options: ["1", "4 - √3", "4 + √3", "4 - 3"],
            correctAnswer: 3,
            points: 8,
          },
          {
            id: 4,
            text: "Cho tam giác ABC vuông tại A, AB = 3cm, AC = 4cm. Độ dài cạnh BC là:",
            options: ["5cm", "6cm", "7cm", "8cm"],
            correctAnswer: 0,
            points: 8,
          },
          {
            id: 5,
            text: "Hàm số y = 2x + 3 đồng biến trên khoảng nào?",
            options: ["(-∞, +∞)", "(-∞, 0)", "(0, +∞)", "Không đồng biến"],
            correctAnswer: 0,
            points: 8,
          },
        ],
      },
      {
        id: 2,
        title: "Hình học không gian",
        duration: 1500, // 25 phút
        totalQuestions: 3, // Giảm số câu để demo
        maxScore: 30,
        instructions: "Các bài toán về hình học 3D, thể tích, khoảng cách.",
        image:
          "https://images.unsplash.com/photo-1580015915217-697d9b407af0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        questions: [
          {
            id: 1,
            text: "Thể tích khối lập phương có cạnh 3cm là:",
            options: ["9cm³", "18cm³", "27cm³", "36cm³"],
            correctAnswer: 2,
            points: 10,
          },
          {
            id: 2,
            text: "Số mặt của hình chóp tứ giác là:",
            options: ["4", "5", "6", "8"],
            correctAnswer: 1,
            points: 10,
          },
          {
            id: 3,
            text: "Bán kính mặt cầu ngoại tiếp hình lập phương cạnh a là:",
            options: ["a√2", "a√3/2", "a√3", "2a√3"],
            correctAnswer: 1,
            points: 10,
          },
        ],
      },
    ],
    "true-false": [
      {
        id: 1,
        title: "Toán logic cơ bản",
        duration: 1200, // 20 phút
        totalQuestions: 3, // Giảm số câu để demo
        maxScore: 30,
        instructions: "Xác định tính đúng sai của các mệnh đề toán học.",
        image:
          "https://images.unsplash.com/photo-1635070040809-4c8c6ef6b0a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        questions: [
          {
            id: 1,
            text: "Phương trình x² + 1 = 0 có nghiệm thực.",
            correctAnswer: false,
            points: 10,
          },
          {
            id: 2,
            text: "Hàm số y = sinx có chu kỳ 2π.",
            correctAnswer: true,
            points: 10,
          },
          {
            id: 3,
            text: "Tích phân từ 0 đến π của sinx dx bằng 0.",
            correctAnswer: false,
            points: 10,
          },
        ],
      },
    ],
    "short-answer": [
      {
        id: 1,
        title: "Giải tích nâng cao",
        duration: 2100, // 35 phút
        totalQuestions: 2, // Giảm số câu để demo
        maxScore: 40,
        instructions: "Nhập đáp án ngắn cho các bài toán giải tích.",
        image:
          "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        questions: [
          {
            id: 1,
            text: "Giá trị của x thỏa mãn phương trình 2x - 5 = 3 là:",
            correctAnswer: "4",
            points: 20,
          },
          {
            id: 2,
            text: "Đạo hàm của hàm số y = e^(2x) tại x = 0 là:",
            correctAnswer: "2",
            points: 20,
          },
        ],
      },
    ],
  };

  // ====== BIẾN TOÀN CỤC ======
  let currentExamType = "";
  let currentTestType = "";
  let currentMockTest = null;
  let currentQuestion = 0;
  let answers = [];
  let markedQuestions = [];
  let timer;
  let timeLeft = 0;
  let questions = [];
  let testStarted = false;
  let startTime, endTime;

  // ====== DOM ELEMENTS ======
  const mcqType = document.getElementById("mcqType");
  const essayType = document.getElementById("essayType");
  const mcqTestSelection = document.getElementById("mcqTestSelection");
  const mockTestSelection = document.getElementById("mockTestSelection");
  const mcqTestInstructions = document.getElementById("mcqTestInstructions");
  const mcqTestContainer = document.getElementById("mcqTestContainer");
  const questionContainer = document.getElementById("questionContainer");
  const questionNav = document.getElementById("questionNav");
  const questionGrid = document.getElementById("questionGrid");
  const resultsContainer = document.getElementById("resultsContainer");
  const essayTestSelection = document.getElementById("essayTestSelection");
  const essayTestContainer = document.getElementById("essayTestContainer");
  const instructionTitle = document.getElementById("instructionTitle");
  const instructionContent = document.getElementById("instructionContent");

  // ====== EVENT LISTENERS ======
  mcqType.addEventListener("click", () => showTestSelection("mcq"));
  essayType.addEventListener("click", () => showTestSelection("essay"));

  // ====== CÁC HÀM CHÍNH ======
  function showTestSelection(type) {
    currentExamType = type;

    if (type === "mcq") {
      mcqTestSelection.style.display = "block";
      essayTestSelection.style.display = "none";
      essayTestContainer.style.display = "none";
    } else {
      essayTestSelection.style.display = "block";
      mcqTestSelection.style.display = "none";
      mcqTestContainer.style.display = "none";
      mcqTestInstructions.style.display = "none";
    }

    document.querySelector(".MATHD4-exam-type-container").style.display =
      "none";
  }

  function backToExamType() {
    document.querySelector(".MATHD4-exam-type-container").style.display =
      "flex";

    if (currentExamType === "mcq") {
      mcqTestSelection.style.display = "none";
      mcqTestInstructions.style.display = "none";
      mcqTestContainer.style.display = "none";
      mockTestSelection.style.display = "none";
    } else {
      essayTestSelection.style.display = "none";
      essayTestContainer.style.display = "none";
    }
  }

  function showMCQTest(type) {
    currentTestType = type;
    mcqTestSelection.style.display = "none";
    showMockTestSelection();
  }

  function showMockTestSelection() {
    mcqTestSelection.style.display = "none";
    mockTestSelection.style.display = "block";

    const container = document.querySelector(
      "#mockTestSelection > div:last-child"
    );
    container.innerHTML = "";

    mockTests[currentTestType].forEach((test) => {
      const card = document.createElement("div");
      card.className = "MATHD4-mock-test-card";
      card.innerHTML = `
                <div style="background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${
                  test.image
                }');
                    background-size: cover; height: 120px; border-radius: 8px; margin-bottom: 1rem;"></div>
                <h3 style="color: var(--MATHD4-primary); margin-bottom: 0.5rem;">
                    <i class="fas fa-file-alt" style="margin-right: 0.5rem;"></i>Mock Test ${
                      test.id
                    }: ${test.title}
                </h3>
                <div style="display: flex; gap: 1rem; font-size: 0.9rem; margin-bottom: 0.5rem;">
                    <span><i class="fas fa-clock" style="margin-right: 0.3rem;"></i>${Math.floor(
                      test.duration / 60
                    )} phút</span>
                    <span><i class="fas fa-question-circle" style="margin-right: 0.3rem;"></i>${
                      test.totalQuestions
                    } câu</span>
                    <span><i class="fas fa-star" style="margin-right: 0.3rem;"></i>${
                      test.maxScore
                    } điểm</span>
                </div>
                <p style="color: #666; font-size: 0.9rem;">${test.instructions.substring(
                  0,
                  60
                )}...</p>
            `;
      card.onclick = () => selectMockTest(test.id);
      container.appendChild(card);
    });
  }

  function selectMockTest(testId) {
    currentMockTest = mockTests[currentTestType].find((t) => t.id === testId);
    mockTestSelection.style.display = "none";
    mcqTestInstructions.style.display = "block";

    instructionTitle.textContent = `Mock Test ${testId}: ${currentMockTest.title}`;
    instructionContent.innerHTML = `
            <p><strong>Nội dung:</strong> ${currentMockTest.instructions}</p>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin: 1rem 0;">
                <div style="background: #f0f4ff; padding: 0.5rem; border-radius: 6px;">
                    <i class="fas fa-clock"></i> <strong>Thời gian:</strong> ${Math.floor(
                      currentMockTest.duration / 60
                    )} phút
                </div>
                <div style="background: #f0f4ff; padding: 0.5rem; border-radius: 6px;">
                    <i class="fas fa-question-circle"></i> <strong>Số câu:</strong> ${
                      currentMockTest.totalQuestions
                    }
                </div>
                <div style="background: #f0f4ff; padding: 0.5rem; border-radius: 6px;">
                    <i class="fas fa-star"></i> <strong>Tổng điểm:</strong> ${
                      currentMockTest.maxScore
                    }
                </div>
                <div style="background: #f0f4ff; padding: 0.5rem; border-radius: 6px;">
                    <i class="fas fa-calculator"></i> <strong>Công cụ:</strong> Máy tính bỏ túi
                </div>
            </div>
            <p style="margin-top: 1rem; color: var(--MATHD4-accent); font-weight: bold;">
                <i class="fas fa-exclamation-circle"></i> Bài làm sẽ tự động nộp khi hết giờ
            </p>
        `;
  }

  function backToTestType() {
    mockTestSelection.style.display = "none";
    mcqTestSelection.style.display = "block";
    currentMockTest = null;
  }

  function backToTestSelection() {
    mcqTestInstructions.style.display = "none";
    mockTestSelection.style.display = "block";
  }

  function startMCQTest() {
    if (!currentMockTest) return;

    mcqTestInstructions.style.display = "none";
    mcqTestContainer.style.display = "block";
    questionNav.style.display = "block";

    questions = currentMockTest.questions;
    timeLeft = currentMockTest.duration;
    answers = new Array(questions.length).fill(null);
    markedQuestions = [];

    document.querySelector(
      ".MATHD4-mcq-title"
    ).textContent = `Mock Test ${currentMockTest.id}: ${currentMockTest.title}`;
    createQuestionGrid();
    loadQuestion(0);
    startTimer();
    startTime = new Date();
  }

  function createQuestionGrid() {
    questionGrid.innerHTML = "";

    for (let i = 0; i < questions.length; i++) {
      const questionNumber = document.createElement("div");
      questionNumber.className = "MATHD4-question-number";
      questionNumber.textContent = i + 1;
      questionNumber.onclick = () => navigateToQuestion(i);

      questionGrid.appendChild(questionNumber);
    }
  }

  function loadQuestion(index) {
    currentQuestion = index;

    const questionNumbers = document.querySelectorAll(
      ".MATHD4-question-number"
    );
    questionNumbers.forEach((num, i) => {
      num.classList.remove("active", "answered", "marked");
      if (i === index) {
        num.classList.add("active");
        num.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
      if (answers[i] !== null) num.classList.add("answered");
      if (markedQuestions.includes(i)) num.classList.add("marked");
    });

    if (currentTestType === "multiple-choice") {
      loadMCQQuestion(index);
    } else if (currentTestType === "true-false") {
      loadTFQuestion(index);
    } else if (currentTestType === "short-answer") {
      loadSAQuestion(index);
    }

    document.getElementById("prevBtn").style.display =
      index === 0 ? "none" : "block";
    document.getElementById("nextBtn").textContent =
      index === questions.length - 1 ? "Kết thúc" : "Tiếp theo";
    document.getElementById("markBtn").innerHTML = markedQuestions.includes(
      index
    )
      ? '<i class="fas fa-flag" style="margin-right: 0.5rem;"></i>Bỏ đánh dấu'
      : '<i class="fas fa-flag" style="margin-right: 0.5rem;"></i>Đánh dấu';
  }

  function loadMCQQuestion(index) {
    const question = questions[index];

    let html = `
            <div class="MATHD4-question-text">
                <span style="font-weight: bold; color: var(--MATHD4-primary);">Câu ${
                  index + 1
                }:</span> ${question.text}
                <div style="font-size: 0.9rem; color: var(--MATHD4-primary); margin-top: 0.5rem;">${
                  question.points
                } điểm</div>
            </div>
            <div class="MATHD4-options-container">
        `;

    question.options.forEach((option, i) => {
      const isChecked = answers[index] === i ? "checked" : "";
      html += `
                <div class="MATHD4-option" onclick="selectOption(${i})">
                    <input type="radio" name="option" id="option${i}" ${isChecked}>
                    <label for="option${i}">${option}</label>
                </div>
            `;
    });

    html += `</div>`;
    questionContainer.innerHTML = html;
  }

  function loadTFQuestion(index) {
    const question = questions[index];
    const isTrueChecked = answers[index] === true ? "checked" : "";
    const isFalseChecked = answers[index] === false ? "checked" : "";

    let html = `
            <div class="MATHD4-question-text">
                <span style="font-weight: bold; color: var(--MATHD4-primary);">Câu ${
                  index + 1
                }:</span> ${question.text}
                <div style="font-size: 0.9rem; color: var(--MATHD4-primary); margin-top: 0.5rem;">${
                  question.points
                } điểm</div>
            </div>
            <div class="MATHD4-options-container" style="display: flex; gap: 1rem;">
                <div class="MATHD4-option" style="flex: 1;" onclick="selectTF(true)">
                    <input type="radio" name="tfOption" id="trueOption" ${isTrueChecked}>
                    <label for="trueOption">Đúng</label>
                </div>
                <div class="MATHD4-option" style="flex: 1;" onclick="selectTF(false)">
                    <input type="radio" name="tfOption" id="falseOption" ${isFalseChecked}>
                    <label for="falseOption">Sai</label>
                </div>
            </div>
        `;

    questionContainer.innerHTML = html;
  }

  function loadSAQuestion(index) {
    const question = questions[index];
    const answerValue = answers[index] !== null ? answers[index] : "";

    let html = `
            <div class="MATHD4-question-text">
                <span style="font-weight: bold; color: var(--MATHD4-primary);">Câu ${
                  index + 1
                }:</span> ${question.text}
                <div style="font-size: 0.9rem; color: var(--MATHD4-primary); margin-top: 0.5rem;">${
                  question.points
                } điểm</div>
            </div>
            <div class="MATHD4-options-container">
                <input type="text" class="MATHD4-sa-input" id="saAnswer" value="${answerValue}" placeholder="Nhập đáp án của bạn...">
                <button class="MATHD4-btn MATHD4-btn-primary" onclick="saveSAAnswer()">Lưu đáp án</button>
            </div>
        `;

    questionContainer.innerHTML = html;
  }

  function selectOption(optionIndex) {
    answers[currentQuestion] = optionIndex;
    document.querySelectorAll(".MATHD4-option input")[
      optionIndex
    ].checked = true;
    document
      .querySelectorAll(".MATHD4-question-number")
      [currentQuestion].classList.add("answered");
  }

  function selectTF(value) {
    answers[currentQuestion] = value;
    document.getElementById(
      value ? "trueOption" : "falseOption"
    ).checked = true;
    document
      .querySelectorAll(".MATHD4-question-number")
      [currentQuestion].classList.add("answered");
  }

  function saveSAAnswer() {
    const answer = document.getElementById("saAnswer").value.trim();
    answers[currentQuestion] = answer;
    document
      .querySelectorAll(".MATHD4-question-number")
      [currentQuestion].classList.add("answered");
  }

  function markQuestion() {
    const index = markedQuestions.indexOf(currentQuestion);

    if (index === -1) {
      markedQuestions.push(currentQuestion);
      document
        .querySelectorAll(".MATHD4-question-number")
        [currentQuestion].classList.add("marked");
      document.getElementById("markBtn").innerHTML =
        '<i class="fas fa-flag" style="margin-right: 0.5rem;"></i>Bỏ đánh dấu';
    } else {
      markedQuestions.splice(index, 1);
      document
        .querySelectorAll(".MATHD4-question-number")
        [currentQuestion].classList.remove("marked");
      document.getElementById("markBtn").innerHTML =
        '<i class="fas fa-flag" style="margin-right: 0.5rem;"></i>Đánh dấu';
    }
  }

  function navigateToQuestion(index) {
    loadQuestion(index);
  }

  function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
      loadQuestion(currentQuestion + 1);
    } else {
      confirmSubmission();
    }
  }

  function prevQuestion() {
    if (currentQuestion > 0) {
      loadQuestion(currentQuestion - 1);
    }
  }

  function startTimer() {
    updateTimerDisplay();

    timer = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();

      if (timeLeft <= 300) {
        // 5 phút cuối
        document.getElementById("mcqTimer").classList.add("warning");
      }

      if (timeLeft <= 0) {
        clearInterval(timer);
        submitTest();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById("mcqTimer").textContent = `${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  function confirmSubmission() {
    const unansweredCount = answers.filter((a) => a === null).length;

    if (unansweredCount > 0) {
      if (
        !confirm(
          `Bạn còn ${unansweredCount} câu chưa trả lời. Bạn có chắc chắn muốn nộp bài không?`
        )
      ) {
        return;
      }
    } else {
      if (
        !confirm(
          "Bạn đã trả lời tất cả câu hỏi. Bạn có chắc chắn muốn nộp bài không?"
        )
      ) {
        return;
      }
    }

    submitTest();
  }

  function submitTest() {
    clearInterval(timer);
    testStarted = false;

    let score = 0;
    let correctCount = 0;

    for (let i = 0; i < questions.length; i++) {
      if (answers[i] !== null) {
        if (
          currentTestType === "multiple-choice" ||
          currentTestType === "true-false"
        ) {
          if (answers[i] === questions[i].correctAnswer) {
            score += questions[i].points;
            correctCount++;
          }
        } else if (currentTestType === "short-answer") {
          if (
            answers[i].toString().toLowerCase() ===
            questions[i].correctAnswer.toString().toLowerCase()
          ) {
            score += questions[i].points;
            correctCount++;
          }
        }
      }
    }

    showResults(score, correctCount, questions.length - correctCount);
  }

  function showResults(score, correctCount, incorrectCount) {
    mcqTestContainer.style.display = "none";
    questionNav.style.display = "none";
    resultsContainer.style.display = "block";

    endTime = new Date();
    const timeSpentInSeconds = Math.floor((endTime - startTime) / 1000);
    const minutes = Math.floor(timeSpentInSeconds / 60);
    const seconds = timeSpentInSeconds % 60;
    const percentage = (correctCount / questions.length) * 100;

    document.getElementById("finalScore").textContent = score;
    document.getElementById("correctCount").textContent = correctCount;
    document.getElementById("incorrectCount").textContent = incorrectCount;
    document.getElementById("timeSpent").innerHTML = `
            <strong>${minutes} phút ${seconds} giây</strong>
            (${
              Math.floor(timeSpentInSeconds / currentMockTest.duration) * 100
            }% thời gian cho phép)
        `;

    document.querySelector(
      ".MATHD4-score-total"
    ).textContent = `/ ${currentMockTest.maxScore} điểm`;

    const scoreCircle = document.querySelector(".MATHD4-score-circle");
    scoreCircle.style.background = `conic-gradient(
            var(--MATHD4-success) 0% ${percentage}%,
            var(--MATHD4-danger) ${percentage}% 100%
        )`;
  }

  function backToHome() {
    resultsContainer.style.display = "none";
    document.querySelector(".MATHD4-exam-type-container").style.display =
      "flex";
  }

  function showEssayTest(testNumber) {
    essayTestSelection.style.display = "none";
    essayTestContainer.style.display = "block";

    const essayPdf = document.getElementById("essayPdf");
    const essayTitle = document.getElementById("essayTitle");

    if (testNumber === 1) {
      essayTitle.textContent =
        "Bài tập tự luận 1 - Đại số: Phương trình bậc hai";
      essayPdf.src = "path/to/essay1.pdf";
    } else if (testNumber === 2) {
      essayTitle.textContent =
        "Bài tập tự luận 2 - Hình học: Tam giác đồng dạng";
      essayPdf.src = "path/to/essay2.pdf";
    } else if (testNumber === 3) {
      essayTitle.textContent =
        "Bài tập tự luận 3 - Giải tích: Đạo hàm và ứng dụng";
      essayPdf.src = "path/to/essay3.pdf";
    }
  }

  function backToEssaySelection() {
    essayTestContainer.style.display = "none";
    essayTestSelection.style.display = "block";
  }

  // ====== GÁN HÀM VÀO WINDOW ======
  window.selectOption = selectOption;
  window.selectTF = selectTF;
  window.saveSAAnswer = saveSAAnswer;
  window.markQuestion = markQuestion;
  window.navigateToQuestion = navigateToQuestion;
  window.nextQuestion = nextQuestion;
  window.prevQuestion = prevQuestion;
  window.submitTest = submitTest;
  window.backToHome = backToHome;
  window.showEssayTest = showEssayTest;
  window.backToEssaySelection = backToEssaySelection;
  window.backToExamType = backToExamType;
  window.backToTestSelection = backToTestSelection;
  window.selectMockTest = selectMockTest;
  window.backToTestType = backToTestType;
  window.updateTimerDisplay = updateTimerDisplay;
  window.showResults = showResults;
  window.startMCQTest = startMCQTest;
  window.showMCQTest = showMCQTest;

  window.submitTest = function () {
    const unansweredCount = answers.filter((a) => a === null).length;
    let message = "Bạn có chắc chắn muốn nộp bài?";

    if (unansweredCount > 0) {
      message = `⚠️ Bạn còn <strong>${unansweredCount}</strong> câu chưa trả lời.\n\n${message}`;
    } else {
      message = `✅ Bạn đã hoàn thành tất cả câu hỏi.\n\n${message}`;
    }

    // Sử dụng SweetAlert2 cho đẹp (nếu có)
    if (typeof Swal !== "undefined") {
      Swal.fire({
        title: "Xác nhận nộp bài",
        html: message,
        icon: unansweredCount > 0 ? "warning" : "question",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        confirmButtonText: "Nộp bài",
        cancelButtonText: "Tiếp tục làm",
      }).then((result) => {
        if (result.isConfirmed) {
          clearInterval(timer);
          endTime = new Date();
          showResults(calculateScore());
        }
      });
    }
    // Fallback nếu không có thư viện
    else if (confirm(message.replace(/<[^>]*>/g, ""))) {
      clearInterval(timer);
      endTime = new Date();
      showResults(calculateScore());
    }
  };
  // ====== FIX ĐIỀU HƯỚNG ======
  window.showMCQTest = function (type) {
    currentTestType = type;
    mcqTestSelection.style.display = "none";
    mockTestSelection.style.display = "block";

    // Load danh sách mock test tương ứng
    renderMockTests();
  };

  window.backToExamType = function () {
    document.querySelector(".MATHD4-exam-type-container").style.display =
      "flex";
    mcqTestSelection.style.display = "none";
    mockTestSelection.style.display = "none";
    mcqTestInstructions.style.display = "none";
  };

  window.backToTestType = function () {
    mockTestSelection.style.display = "none";
    mcqTestSelection.style.display = "block";
  };

  window.backToTestSelection = function () {
    mcqTestInstructions.style.display = "none";
    mockTestSelection.style.display = "block";
  };

  window.selectMockTest = function (testId) {
    currentMockTest = mockTests[currentTestType].find((t) => t.id === testId);
    mockTestSelection.style.display = "none";
    mcqTestInstructions.style.display = "block";

    // Cập nhật hướng dẫn
    updateInstructions();
  };

  function renderMockTests() {
    const container = document.querySelector(
      "#mockTestSelection > div:last-child"
    );
    container.innerHTML = "";

    mockTests[currentTestType].forEach((test) => {
      const card = document.createElement("div");
      card.className = "MATHD4-mock-test-card";
      card.innerHTML = `
            <div style="background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${
              test.image
            }');
                background-size: cover; height: 120px; border-radius: 8px; margin-bottom: 1rem;"></div>
            <h3 style="color: var(--MATHD4-primary); margin-bottom: 0.5rem;">
                Mock Test ${test.id}: ${test.title}
            </h3>
            <div style="display: flex; gap: 1rem; font-size: 0.9rem; margin-bottom: 0.5rem;">
                <span><i class="fas fa-clock"></i> ${Math.floor(
                  test.duration / 60
                )} phút</span>
                <span><i class="fas fa-question-circle"></i> ${
                  test.totalQuestions
                } câu</span>
                <span><i class="fas fa-star"></i> ${test.maxScore} điểm</span>
            </div>
            <p style="color: #666; font-size: 0.9rem;">${test.instructions.substring(
              0,
              60
            )}...</p>
        `;
      card.onclick = () => selectMockTest(test.id);
      container.appendChild(card);
    });
  }

  function updateInstructions() {
    instructionTitle.textContent = `Mock Test ${currentMockTest.id}: ${currentMockTest.title}`;
    instructionContent.innerHTML = `
        <p><strong>Nội dung:</strong> ${currentMockTest.instructions}</p>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin: 1rem 0;">
            <div style="background: #f0f4ff; padding: 0.5rem; border-radius: 6px;">
                <i class="fas fa-clock"></i> <strong>Thời gian:</strong> ${Math.floor(
                  currentMockTest.duration / 60
                )} phút
            </div>
            <div style="background: #f0f4ff; padding: 0.5rem; border-radius: 6px;">
                <i class="fas fa-question-circle"></i> <strong>Số câu:</strong> ${
                  currentMockTest.totalQuestions
                }
            </div>
            <div style="background: #f0f4ff; padding: 0.5rem; border-radius: 6px;">
                <i class="fas fa-star"></i> <strong>Tổng điểm:</strong> ${
                  currentMockTest.maxScore
                }
            </div>
            <div style="background: #f0f4ff; padding: 0.5rem; border-radius: 6px;">
                <i class="fas fa-calculator"></i> <strong>Công cụ:</strong> Máy tính bỏ túi
            </div>
        </div>
    `;
  }
});

// Thêm vào DOMContentLoaded
let isDragging = false;
let offsetX, offsetY;
const questionNav = document.getElementById("questionNav");

questionNav.addEventListener("mousedown", (e) => {
  if (e.target === questionNav || e.target.closest("h3")) {
    isDragging = true;
    offsetX = e.clientX - questionNav.getBoundingClientRect().left;
    offsetY = e.clientY - questionNav.getBoundingClientRect().top;
    questionNav.style.cursor = "grabbing";
  }
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  questionNav.style.left = `${e.clientX - offsetX}px`;
  questionNav.style.top = `${e.clientY - offsetY}px`;
  questionNav.style.right = "unset";
  questionNav.style.transform = "none";
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  questionNav.style.cursor = "move";
});
