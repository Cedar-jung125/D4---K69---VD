const typeWords = [
  "We're friendly, cheerful, and full of laughs",
  "Bold minds with creative vibes",
  "Energetic, daring, never boring",
  "Kind hearts, always expressive",
];

const dynamicTexts = [
  "Chúng mình thân thiện, vui vẻ và luôn tràn ngập tiếng cười",
  "Tư duy táo bạo, phong cách sáng tạo",
  "Luôn nhiệt huyết, liều lĩnh và không bao giờ nhàm chán",
  "Trái tim nhân hậu, luôn biết cách thể hiện bản thân",
];

let currentTypeWord = 0;
let currentLetter = 0;
let isDeleting = false;
let typingSpeed = 100;
const typeElement = document.getElementById("typewriter");
const dynamicElement = document.getElementById("dynamic-text");

function typeWriterEffect() {
  const currentText = typeWords[currentTypeWord];

  if (isDeleting) {
    typeElement.textContent = currentText.substring(0, currentLetter - 1);
    currentLetter--;
    typingSpeed = 50;

    if (currentLetter === 0) {
      isDeleting = false;
      currentTypeWord = (currentTypeWord + 1) % typeWords.length;
      setTimeout(typeWriterEffect, 500);
    } else {
      setTimeout(typeWriterEffect, typingSpeed);
    }
  } else {
    typeElement.textContent = currentText.substring(0, currentLetter + 1);
    currentLetter++;
    typingSpeed = 100;

    // Hiển thị dynamic text khi bắt đầu gõ
    if (currentLetter === 3) {
      dynamicElement.textContent = dynamicTexts[currentTypeWord];
      dynamicElement.style.opacity = 1;
    }

    if (currentLetter === currentText.length) {
      isDeleting = true;
      setTimeout(typeWriterEffect, 2000);
    } else {
      setTimeout(typeWriterEffect, typingSpeed);
    }
  }
}

// Slideshow Functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let slideInterval;

function showSlide(n) {
  // Ẩn tất cả slides
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  // Cập nhật index slide hiện tại
  currentSlideIndex = (n + slides.length) % slides.length;

  // Hiển thị slide hiện tại
  slides[currentSlideIndex].classList.add("active");
  dots[currentSlideIndex].classList.add("active");
}

function changeSlide(n) {
  clearInterval(slideInterval);
  showSlide(currentSlideIndex + n);
  startSlideShow();
}

function goToSlide(n) {
  clearInterval(slideInterval);
  showSlide(n);
  startSlideShow();
}

function startSlideShow() {
  slideInterval = setInterval(() => {
    changeSlide(1);
  }, 5000); // Tự động chuyển sau 5 giây
}

window.onload = function () {
  typeWriterEffect();
  startSlideShow();
  setInterval(magicNext1, 10000);
  setInterval(magicNext2, 10000);
  setInterval(magicNext3, 10000);
  setInterval(magicNext4, 10000);
};

/* ====== SECTION 1 ====== */
let currentIndex1 = 0;
const wrapper1 = document.querySelector("#section1 .article-wrapper");
const cards1 = document.querySelectorAll("#section1 .article-card");
const visibleCount1 = 3;
const cardWidth1 = document.querySelector(
  "#section1 .article-card"
).offsetWidth;
const maxIndex1 = Math.max(0, cards1.length - visibleCount1);

function updateSlider1() {
  const offset = -(currentIndex1 * cardWidth1);
  wrapper1.style.transform = `translateX(${offset}px)`;
}

function magicNext1() {
  if (currentIndex1 >= maxIndex1) {
    currentIndex1 = 0;
  } else {
    currentIndex1++;
  }
  updateSlider1();
}

function magicPrev1() {
  if (currentIndex1 <= 0) {
    currentIndex1 = maxIndex1;
  } else {
    currentIndex1--;
  }
  updateSlider1();
}

/* ====== SECTION 2 ====== */
let currentIndex2 = 0;
const wrapper2 = document.querySelector("#section2 .article-wrapper");
const cards2 = document.querySelectorAll("#section2 .article-card");
const visibleCount2 = 3;
const cardWidth2 = document.querySelector(
  "#section2 .article-card"
).offsetWidth;
const maxIndex2 = Math.max(0, cards2.length - visibleCount2);

function updateSlider2() {
  const offset = -(currentIndex2 * cardWidth2);
  wrapper2.style.transform = `translateX(${offset}px)`;
}

function magicNext2() {
  if (currentIndex2 >= maxIndex2) {
    currentIndex2 = 0;
  } else {
    currentIndex2++;
  }
  updateSlider2();
}

function magicPrev2() {
  if (currentIndex2 <= 0) {
    currentIndex2 = maxIndex2;
  } else {
    currentIndex2--;
  }
  updateSlider2();
}

let currentIndex3 = 0;
const wrapper3 = document.querySelector("#section3 .article-wrapper");
const cards3 = document.querySelectorAll("#section3 .article-card");
const visibleCount3 = 3;
const cardWidth3 = document.querySelector(
  "#section3 .article-card"
).offsetWidth;
const maxIndex3 = Math.max(0, cards3.length - visibleCount3);

function updateSlider3() {
  const offset = -(currentIndex3 * cardWidth3);
  wrapper3.style.transform = `translateX(${offset}px)`;
}

function magicNext3() {
  if (currentIndex3 >= maxIndex3) {
    currentIndex3 = 0;
  } else {
    currentIndex3++;
  }
  updateSlider3();
}

function magicPrev3() {
  if (currentIndex3 <= 0) {
    currentIndex3 = maxIndex3;
  } else {
    currentIndex3--;
  }
  updateSlider3();
}

let currentIndex4 = 0;
const wrapper4 = document.querySelector("#section4 .article-wrapper");
const cards4 = document.querySelectorAll("#section4 .article-card");
const visibleCount4 = 3;
const cardWidth4 = document.querySelector(
  "#section4 .article-card"
).offsetWidth;
const maxIndex4 = Math.max(0, cards4.length - visibleCount4);

function updateSlider4() {
  const offset = -(currentIndex4 * cardWidth4);
  wrapper4.style.transform = `translateX(${offset}px)`;
}

function magicNext4() {
  if (currentIndex4 >= maxIndex4) {
    currentIndex4 = 0;
  } else {
    currentIndex4++;
  }
  updateSlider4();
}

function magicPrev4() {
  if (currentIndex4 <= 0) {
    currentIndex4 = maxIndex4;
  } else {
    currentIndex4--;
  }
  updateSlider4();
}
