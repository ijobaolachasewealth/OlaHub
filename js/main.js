// === OLAHUB JS v1.5 ===

// ------------------------------
// HERO TYPEWRITER TEXT
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

function typeHeroText() {
  const typeTarget = document.getElementById("typewriter");
  if (!typeTarget) return;

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
// GLOWING SIGNATURE TYPEWRITER
// ------------------------------
let signatureAnimated = false;
function animateSignatureOnce() {
  if (signatureAnimated) return;

  const sig = document.querySelector(".menu-signature");
  if (!sig) return;

  const text = sig.getAttribute("data-signature");
  let index = 0;
  sig.innerHTML = "";

  const interval = setInterval(() => {
    if (index < text.length) {
      const span = document.createElement("span");
      span.textContent = text[index];
      span.classList.add("glow-char");
      sig.appendChild(span);
      index++;
    } else {
      clearInterval(interval);
      signatureAnimated = true;
    }
  }, 80);
}

// ------------------------------
// PAGE PRELOADER FADE OUT
// ------------------------------
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.classList.add("fade-out");
    setTimeout(() => {
      preloader.style.display = "none";
    }, 1000);
  }

  handleScrollAnimations();
});

// ------------------------------
// DOM INITIALIZATION
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  typeHeroText();
  initCustomCursor();
  initHamburgerMenu();
});

// ------------------------------
// SCROLL-TRIGGERED FADE-INS
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
// CUSTOM CURSOR TRACKING
// ------------------------------
function initCustomCursor() {
  const cursor = document.getElementById('customCursor');
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
// HEADER SHRINK ON SCROLL
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
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".mobile-menu");
  const body = document.body;

  if (!hamburger || !menu) return;

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("menu-open");
    hamburger.classList.toggle("is-active");
    body.classList.toggle("no-scroll");

    if (menu.
