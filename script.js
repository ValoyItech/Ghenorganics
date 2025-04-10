// Sidebar toggle
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

closeSidebar.addEventListener('click', () => {
  sidebar.classList.remove('active');
});

// Close sidebar when clicking outside of it
document.addEventListener('click', (e) => {
  if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
    sidebar.classList.remove('active');
  }
});

// Hide header on scroll down, show on scroll up
let lastScrollTop = 0;
const header = document.querySelector('.header-bar');

window.addEventListener('scroll', () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop) {
    header.classList.add('hide-header');
  } else {
    header.classList.remove('hide-header');
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Initialize AOS (Animate on Scroll)
AOS.init({
  duration: 800,
  once: true
});

// WhatsApp order button
function orderNow(productName) {
  const phoneNumber = "27799392702"; // South African format without +
  const message = `Hello, I would like to order *${productName}*. Please assist.`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// Product Search Filter
document.getElementById('product-search').addEventListener('input', function () {
  const filter = this.value.toLowerCase();
  const products = document.querySelectorAll('.product');

  products.forEach(product => {
    const title = product.querySelector('h3').textContent.toLowerCase();
    if (title.includes(filter)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});

// FAQ Section
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

// About Section Scroll Navigation
const scrollContainer = document.querySelector('.about-scroll-container');
const prevBtn = document.querySelector('.scroll-nav .prev-btn');
const nextBtn = document.querySelector('.scroll-nav .next-btn');

prevBtn.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: -320, // Adjust based on the width of your items + gap
    behavior: 'smooth'
  });
});

nextBtn.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: 320, // Adjust based on the width of your items + gap
    behavior: 'smooth'
  });
});

// Hero Slider
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);