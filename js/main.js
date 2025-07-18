// === OLAHUB JS v1.2 ===
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
  menuSignature.innerHTML = "";
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

  handleScrollAnimations();
});

// ------------------------------
// DOM READY INITIALIZATION
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  typeHeroText();
  initCustomCursor();
  initHamburgerMenu();
});

// ------------------------------
// SCROLL ANIMATION TRIGGER
// ------------------------------
function handleScrollAnimations() {
  const elements = document.querySelectorAll('.scroll-fade-in');
  elements.forEach(el => {
    if (el.classList.contains("hero-section")) {
      el.classList.add("visible");
      return;
    }
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight - 100;
    if (inView) el.classList.add('visible');
  });
}

window.addEventListener('scroll', handleScrollAnimations);

// ------------------------------
// CUSTOM CURSOR INTERACTION
// ------------------------------
function initCustomCursor() {
  const cursor = document.getElementById('custom-cursor');
  if (!cursor) return;
  if (window.innerWidth < 768) {
    cursor.style.display = "none";
    return;
  }

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX - 15}px`;
    cursor.style.top = `${e.clientY - 15}px`;
    cursor.style.opacity = 1;
  });

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
  header.classList.toggle('shrink', window.scrollY > 50);
});

// ------------------------------
// HAMBURGER MENU CONTROLS
// ------------------------------
function initHamburgerMenu() {
  const toggle = document.getElementById("hamburgerToggle");
  const menu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("menuOverlay");
  const closeBtn = document.getElementById("menuCloseBtn");

  function openMenu() {
    menu.classList.remove("hidden");
    overlay.classList.remove("hidden");
    setTimeout(() => {
      menu.classList.add("active");
      overlay.classList.add("visible");

      // Reset li animation
      const menuItems = menu.querySelectorAll("ul li");
      menuItems.forEach((item) => {
        item.style.animation = "none";
        item.offsetHeight; // trigger reflow
        item.style.animation = "";
      });

      // Typewriter signature
      animateSignature();
    }, 10);
  }

  function closeMenu() {
    menu.classList.remove("active");
    overlay.classList.remove("visible");
    setTimeout(() => {
      menu.classList.add("hidden");
      overlay.classList.add("hidden");
    }, 400);
  }

  if (toggle) toggle.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  if (overlay) overlay.addEventListener("click", closeMenu);
}
