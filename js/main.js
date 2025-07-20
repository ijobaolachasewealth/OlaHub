// === OLAHUB JS v1.5.1 ===

console.log('✅ main.js loaded');

const typewriterTarget = document.getElementById('typewriter-text');

const phrases = [
  'Social Media Accounts',
  'Virtual Numbers and OTP',
  'Social Media Boosting',
  'Strong VPN Logs',
  'Premium Streaming Logs'
];

let currentPhrase = 0;
let currentChar = 0;
let isDeleting = false;

function type() {
  const currentText = phrases[currentPhrase];
  if (isDeleting) {
    currentChar--;
  } else {
    currentChar++;
  }

  const visibleText = currentText.substring(0, currentChar);
  if (typewriterTarget) {
    typewriterTarget.innerHTML = `<span class="animated-chase">${visibleText}</span>`;
  }

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && currentChar === currentText.length) {
    speed = 2000;
    isDeleting = true;
  } else if (isDeleting && currentChar === 0) {
    isDeleting = false;
    currentPhrase = (currentPhrase + 1) % phrases.length;
    speed = 500;
  }

  setTimeout(type, speed);
}

// ------------------------------
// GLOWING SIGNATURE TYPEWRITER
// ------------------------------
let signatureAnimated = false;
function animateSignatureOnce() {
  if (signatureAnimated) return;

  const sig = document.querySelector('.menu-signature');
  if (!sig) return;

  const text = sig.getAttribute('data-signature');
  let index = 0;
  sig.innerHTML = '';

  const interval = setInterval(() => {
    if (index < text.length) {
      const span = document.createElement('span');
      span.textContent = text[index];
      span.classList.add('glow-char');
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
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.classList.add('fade-out');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 1000);
  }

  handleScrollAnimations();
});

// ------------------------------
// DOM INITIALIZATION
// ------------------------------
document.addEventListener('DOMContentLoaded', () => {
  type(); // ✅ Single typewriter call here only
  initCustomCursor();
  initHamburgerMenu();
});

// ------------------------------
// SCROLL-TRIGGERED FADE-INS
// ------------------------------
function handleScrollAnimations() {
  const elements = document.querySelectorAll('.scroll-fade-in');
  elements.forEach((el) => {
    if (el.classList.contains('hero-section')) {
      el.classList.add('visible');
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
    cursor.style.display = 'none';
    return;
  }

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX - 15}px`;
    cursor.style.top = `${e.clientY - 15}px`;
    cursor.style.opacity = 1;
  });

  const hoverables = document.querySelectorAll('a, button, .cta-button');
  hoverables.forEach((el) => {
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
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.mobile-menu');
  const overlay = document.getElementById('menuOverlay');
  const closeBtn = document.getElementById('closeMenu');
  const body = document.body;

  if (!hamburger || !menu) return;

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
    hamburger.classList.toggle('is-active');
    overlay.classList.toggle('visible');
    overlay.classList.toggle('hidden');
    body.classList.toggle('no-scroll');

    animateSignatureOnce();

    const menuItems = menu.querySelectorAll('li');
    menuItems.forEach((item, index) => {
      item.style.animationDelay = `${index * 0.1}s`;
      item.classList.add('slide-in');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      menu.classList.remove('menu-open');
      hamburger.classList.remove('is-active');
      overlay.classList.add('hidden');
      overlay.classList.remove('visible');
      body.classList.remove('no-scroll');
    });
  }

  if (overlay) {
    overlay.addEventListener('click', () => {
      menu.classList.remove('menu-open');
      hamburger.classList.remove('is-active');
      overlay.classList.add('hidden');
      overlay.classList.remove('visible');
      body.classList.remove('no-scroll');
    });
  }
}

// ------------------------------
// PRODUCT UPLOAD FORM HANDLER
// ------------------------------
const uploadForm = document.querySelector('.upload-form');

if (uploadForm) {
  uploadForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = uploadForm.querySelector("input[type='text']").value;
    const price = uploadForm.querySelector("input[type='number']").value;
    const file = uploadForm.querySelector("input[type='file']").files[0];
    const desc = uploadForm.querySelector('textarea').value;

    if (!title || !price || !file || !desc) {
      alert('Please fill in all fields.');
      return;
    }

    const commission = parseInt(uploadForm.querySelector("input[name='platformCut']").value);
    const sellerAmount = parseInt(price) - commission;

    alert(`✅ Product uploaded:
Title: ${title}
Price: ₦${price}
Platform Cut: ₦${commission}
Seller Gets: ₦${sellerAmount}`);

    uploadForm.reset();
    addProductCard(title, price);
  });
}

// ------------------------------
// SHOW ADMIN UPLOAD (SIMULATED)
// ------------------------------
const isAdmin = true; // Change to false if not admin

if (isAdmin) {
  const uploadSection = document.getElementById('adminUpload');
  if (uploadSection) uploadSection.style.display = 'block';
}

// ------------------------------
// ADD PRODUCT TO GRID (Simulated Listing)
// ------------------------------
function addProductCard(title, price, imageSrc = 'assets/sample-product.jpg') {
  const grid = document.querySelector('.product-grid');
  if (!grid) return;

  const card = document.createElement('div');
  card.className = 'product-card';

  card.innerHTML = `
    <img src="${imageSrc}" alt="Product Image">
    <h3 class="product-title">${title}</h3>
    <p class="product-price">₦${price}</p>
    <button class="buy-button">Buy Now</button>
  `;

  grid.prepend(card);
}
