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

