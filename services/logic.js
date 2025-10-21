import { createLoveMessage } from "../components/loveMessage.js";

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("love-btn");
  const container = document.getElementById("message-container");
  let messageVisible = false;

  btn.addEventListener("click", () => {
    if (!messageVisible) {
      const message = createLoveMessage();
      message.id = "love-message";
      container.appendChild(message);
      btn.textContent = "Ciérrame 💜";
      messageVisible = true;
    } else {
      const message = document.getElementById("love-message");
      if (message) message.remove();
      btn.textContent = "Púlsame 💜";
      messageVisible = false;
    }
  });
  // 🎞️ Lógica del carrusel
  let currentSlide = 0;

  function updateSlide() {
    const slide = document.querySelector("#carousel-slides > div");
    const slideWidth = slide.offsetWidth;

    document.getElementById("carousel-slides").style.transform = `translateX(-${
      currentSlide * slideWidth
    }px)`;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % 4;
    updateSlide();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + 4) % 4;
    updateSlide();
  }

  function goToSlide(index) {
    currentSlide = index;
    updateSlide();
  }

  // Make functions global so buttons can use them
  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;
  window.goToSlide = goToSlide;

  // Init on load and resize
  updateSlide();
  window.addEventListener("resize", updateSlide);

  const duration = 8000; // 5 segundos
  const animationEnd = Date.now() + duration;

  const defaults = {
    origin: { y: 0.7 },
  };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }

    const particleCount = 50 * (timeLeft / duration);

    // Confeti con diferentes colores
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        spread: 60,
        startVelocity: 40,
        colors: ["#a78bfa", "#8b5cf6", "#c4b5fd", "#7c3aed", "#d8b4fe"],
        ticks: 60,
        origin: { x: Math.random(), y: Math.random() * 0.6 + 0.1 },
      })
    );
  }, 250);
});
