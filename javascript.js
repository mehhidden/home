// ADVICE SLIDER

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const totalSlides = slides.length;

document.querySelector(".next").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlidePosition();
  updateDots();
});

document.querySelector(".prev").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
  updateDots();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    updateSlidePosition();
    updateDots();
  });
});

function updateSlidePosition() {
  const slider = document.querySelector(".slider");
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function updateDots() {
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentSlide].classList.add("active");
}

//COMMENT SLIDER

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slider-comments");
  const nextButton = document.getElementById("right-dir");
  const prevButton = document.getElementById("left-dir");

  let currentIndex = 0;
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  }

  nextButton.addEventListener("click", function () {
    nextSlide();
  });

  prevButton.addEventListener("click", function () {
    prevSlide();
  });

  showSlide(currentIndex);
});


//QUESTION MENU

const questionItems = document.querySelectorAll(".question-item");

questionItems.forEach((item) => {
  item.addEventListener("click", () => {
    const answerBox = item.querySelector(".answer-box");
    const questionBox = item.querySelector(".question-box");
    const icon = item.querySelector(".question-icon i");

    const openItem = document.querySelector(".question-item.open");
    if (openItem && openItem !== item) {
      const openAnswerBox = openItem.querySelector(".answer-box");
      const openQuestionBox = openItem.querySelector(".question-box");
      const openIcon = openItem.querySelector(".question-icon i");

      openAnswerBox.style.maxHeight = "0";
      openQuestionBox.classList.remove("open");
      openItem.classList.remove("open");
      openIcon.classList.remove("open");
    }

    if (item.classList.contains("open")) {
      setTimeout(() => {
        answerBox.style.maxHeight = "0";
        questionBox.classList.remove("open");
        item.classList.remove("open");
        icon.classList.remove("open");
      }, 10);
    } else {
      answerBox.style.maxHeight = answerBox.scrollHeight + "px";
      questionBox.classList.add("open");
      item.classList.add("open");
      icon.classList.add("open");
    }
  });
});




