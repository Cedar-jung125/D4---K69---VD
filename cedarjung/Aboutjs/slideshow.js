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

// Khởi động tất cả hiệu ứng
window.onload = function () {
  typeWriterEffect();
  startSlideShow();
};

let currentIndex = 0;
const wrapper = document.querySelector(".article-wrapper");
const cards = document.querySelectorAll(".article-card");
const visibleCount = 3;
const cardWidth = 300 + 16; // card + gap

function updateSlider() {
  const offset = -(currentIndex * cardWidth);
  wrapper.style.transform = `translateX(${offset}px)`;
}

function magicNext() {
  currentIndex++;
  if (currentIndex > cards.length - visibleCount) {
    currentIndex = 0;
  }
  updateSlider();
}

function magicPrev() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = cards.length - visibleCount;
  }
  updateSlider();
}

// Auto slide
setInterval(magicNext, 10000);
