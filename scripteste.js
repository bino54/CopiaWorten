const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".direita");
const prevBtn = document.querySelector(".esquerda");

let index = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${index * 10}%)`;
  prevBtn.style.display = index === 0 ? "none" : "block";
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  updateCarousel();
});



updateCarousel();