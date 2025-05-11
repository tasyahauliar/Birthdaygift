// JavaScript diperbarui untuk navigasi slide dan interaksi galeri

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function showNextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function showPreviousSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Inisialisasi slide pertama
document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
});
