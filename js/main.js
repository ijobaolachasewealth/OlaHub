// === OLAHUB JS v1.0 ===
// File: olahub/js/main.js

// ------------------------------
// TYPEWRITER HERO ANIMATION
// ------------------------------
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

const typeTarget = document.getElementById("typewriter-text");

function typeHeroText() {
  const text = phrases[currentPhrase];
  const visible = text.substring(0, currentChar);
  typeTarget.innerHTML = visible;

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

// ------------------------------
// SIGNATURE TYPEWRITER (Menu)
// ------------------------------
function animateSignature() {
  const menuSignature = document.getElementById("menuSignature");
  const signatureText = "|👤| © 𝗜𝗷❂𝗯𝗮 ☯︎𝗹𝗮 𝗖𝗵𝗮𝘀𝗲 𝗪𝗲𝗮𝗹𝘁𝗵™";
  let i = 0;

  function typeChar() {
    if (i < signatureText.length) {
      menuSignature.innerHTML += signatureText.charAt(i);
      i++;
      setTimeout(typeChar, 70);
    }
  }

  typeChar();
}

// ------------------------------
// PRELOADER FADE OUT ON LOAD
// ------------------------------
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.classList.add("fade-out");
    setTimeout(() => {
      preloader.style.display = "none";
    }, 800);
  }
});

// ------------------------------
// ON DOM LOAD
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  typeHeroText();
  animateSignature();
});
