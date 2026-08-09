const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

const sliderTrack = document.querySelector(".slider-track");

if (sliderTrack) {
  const sliderImages = document.querySelectorAll(".slider-track img");
  const prevBtn = document.getElementById("sliderPrev");
  const nextBtn = document.getElementById("sliderNext");
  const dots = document.querySelectorAll(".slider-dots .dot");

  let currentIndex = 0;

  function updateSlider() {
    sliderTrack.style.transform = `translateX(-${currentIndex * 85}%)`;

    sliderImages.forEach((img, i) => {
      img.classList.toggle("active", i === currentIndex);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }

  prevBtn.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + sliderImages.length) % sliderImages.length;
    updateSlider();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    updateSlider();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      currentIndex = Number(dot.dataset.index);
      updateSlider();
    });
  });
}