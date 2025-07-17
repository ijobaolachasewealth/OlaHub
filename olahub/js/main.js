// olahub/js/main.js

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

const target = document.getElementById("typewriter-text");

function type() {
  const text = phrases[currentPhrase];
  const visibleText = text.substring(0, currentChar);

  target.innerHTML = visibleText;

  if (!isDeleting && currentChar < text.length) {
    currentChar++;
    setTimeout(type, 100);
  } else if (isDeleting && currentChar > 0) {
    currentChar--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      currentPhrase = (currentPhrase + 1) % phrases.length;
    }
    setTimeout(type, 1500);
  }
}

document.addEventListener("DOMContentLoaded", type);

// Typewriter effect for Hero Section
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
const target = document.getElementById("typewriter-text");

function type() {
  const text = phrases[currentPhrase];
  const visibleText = text.substring(0, currentChar);
  target.innerHTML = visibleText;

  if (!isDeleting && currentChar < text.length) {
    currentChar++;
    setTimeout(type, 100);
  } else if (isDeleting && currentChar > 0) {
    currentChar--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) currentPhrase = (currentPhrase + 1) % phrases.length;
    setTimeout(type, 1500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();

  // Signature Typewriter on menu open
  const menuSignature = document.getElementById("menuSignature");
  const signatureText = '|👤| © 𝗜𝗷❂𝗯𝗮 ☯︎𝗹𝗮 𝗖𝗵𝗮𝘀𝗲 𝗪𝗲𝗮𝗹𝘁𝗵™';
  let i = 0;

  function animateSignature() {
    if (i < signatureText.length) {
      menuSignature.innerHTML += signatureText.charAt(i);
      i++;
      setTimeout(animateSignature, 70);
    }
  }

  animateSignature();
});
