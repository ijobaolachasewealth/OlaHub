// === OLAHUB JS v1.1 ===
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

  // Trigger scroll animations just once after everything loads
  handleScrollAnimations();
});

// ------------------------------
// ON DOM LOAD
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  typeHeroText();
  animateSignature();
  initCustomCursor();
});

// ------------------------------
// SCROLL ANIMATION TRIGGER
// ------------------------------
function handleScrollAnimations() {
  const elements = document.querySelectorAll('.scroll-fade-in');

  elements.forEach(el => {
    // Prevent hiding important sections like the hero
    if (el.classList.contains("hero-section")) {
      el.classList.add("visible");
      return;
    }

    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight - 100;

    if (inView) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScrollAnimations);

// ------------------------------
// CUSTOM CURSOR INTERACTION
// ------------------------------
function initCustomCursor() {
  const cursor = document.getElementById('custom-cursor');
  if (!cursor) return;

  // Disable on mobile
  if (window.innerWidth < 768) {
    cursor.style.display = "none";
    return;
  }

  // Move cursor
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX - 15}px`;
    cursor.style.top = `${e.clientY - 15}px`;
    cursor.style.opacity = 1;
  });

  // Hover expand on links & buttons
  const hoverables = document.querySelectorAll('a, button, .cta-button');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('active'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
  });
}

// ------------------------------
// SHRINK HEADER ON SCROLL
// ------------------------------
window.addEventListener('scroll', () => {
  const header = document.getElementById('mainHeader');
  if (!header) return;

  if (window.scrollY > 50) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});

// ------------------------------
// HAMBURGER TOGGLE BEHAVIOR
// ------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById("hamburgerToggle");
  const menu = document.getElementById("mobileMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const isActive = menu.classList.contains("active");

      if (isActive) {
        menu.classList.remove("active");
        setTimeout(() => menu.classList.add("hidden"), 400); // hide after animation
      } else {
        menu.classList.remove("hidden");
        setTimeout(() => menu.classList.add("active"), 10); // allow DOM render first
      }
    });
  }
});
