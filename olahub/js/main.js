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

  typeHeroText();

  // === Animated Signature in Hamburger Menu ===
  const menuSignature = document.getElementById("
