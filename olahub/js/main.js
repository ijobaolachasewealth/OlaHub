// File: olahub/js/main.js

document.addEventListener("DOMContentLoaded", () => {
  // === Hero Typewriter Effect ===
  const phrases = [
    "Social Media Accounts",
    "Virtual Numbers and OTP",
    "Social Media Boosting",
    "Strong VPN Logs",
    "Premium Streaming Logs"
  ];

  let currentPhrase = 0;
  let currentChar = 0;
  let isDeleting = false;
  const typewriterTarget = document.getElementById("typewriter-text");

  function typeHeroText() {
    const text = phrases[currentPhrase];
    const visible = text.substring(0, currentChar);
    typewriterTarget.innerHTML = visible;

    if (!isDeleting && currentChar < text.length) {
      currentChar++;
      setTimeout(typeHeroText, 100);
    } else if (isDeleting && currentChar > 0) {
      currentChar--;
      setTimeout(typeHeroText, 50);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) currentPhrase = (currentPhrase + 1) % phrases.length;
      setTimeout(typeHeroText, 1500);
    }
  }

  // Simple fade-in on scroll
const revealElements = document.querySelectorAll(".services, .testimonials");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach((el) => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    } else {
      el.style.opacity = 0;
      el.style.transform = "translateY(30px)";
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


  typeHeroText();

  // === Animated Signature in Hamburger Menu ===
  const menuSignature = document.getElementById("
