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

// Product data
const productData = {
  "Ashwagandha": {
    name: "Ashwagandha",
    price: "R130",
    description: "Ashwagandha is a powerful adaptogen that helps reduce stress and anxiety while boosting energy levels. It supports overall wellness and promotes a balanced lifestyle.",
    image: "images/ashwagandha.jpg",
    secondaryImage: "images/ashwagandha-secondary.jpg"
  },
  "Collagen": {
    name: "Collagen",
    price: "R120",
    description: "Our premium collagen supports healthy skin, joints, and overall vitality. It helps improve skin elasticity, reduces wrinkles, and promotes joint health.",
    image: "images/collagen.jpg",
    secondaryImage: "images/collagen-secondary.jpg"
  },
  "Maca Root": {
    name: "Maca Root",
    price: "R140",
    description: "Maca Root is a superfood from the Andes that enhances stamina, mood, and endurance. It supports hormonal balance and overall vitality.",
    image: "images/maca.jpg",
    secondaryImage: "images/maca-secondary.jpg"
  },
  "Macho Man": {
    name: "Macho Man",
    price: "R170",
    description: "Macho Man is specifically formulated to support men's vitality and hormonal balance. It helps improve energy levels and overall well-being.",
    image: "images/macho.jpg",
    secondaryImage: "images/macho-secondary.jpg"
  },
  "Moringa": {
    name: "Moringa",
    price: "R90",
    description: "Moringa is a nutrient-dense superfood packed with vitamins, minerals, and antioxidants. It supports immune health and provides sustained energy.",
    image: "images/moringa.jpg",
    secondaryImage: "images/moringa-secondary.jpg"
  },
  "SEA MOSS": {
    name: "SEA MOSS",
    price: "R150",
    description: "SEA MOSS is a marine super supplement that boosts immunity, supports digestion, and provides essential minerals. It is rich in iodine and helps balance thyroid function.",
    image: "images/seamoss.jpg",
    secondaryImage: "images/seamoss-secondary.jpg"
  },
  "Shilajit": {
    name: "Shilajit",
    price: "R200",
    description: "Shilajit is a rare mineral-rich substance known for its ability to restore energy, enhance performance, and support overall wellness. It is traditionally used in Ayurvedic medicine.",
    image: "images/shilajit.jpg",
    secondaryImage: "images/shilajit-secondary.jpg"
  },
  "Soursop Leaves": {
    name: "Soursop Leaves",
    price: "R100",
    description: "Soursop Leaves are a traditional remedy known for their immune-boosting and detoxifying properties. They support overall health and provide natural antioxidants.",
    image: "images/soursop.jpg",
    secondaryImage: "images/soursop-secondary.jpg"
  },
  "Zinc": {
    name: "Zinc",
    price: "R80",
    description: "Zinc is an essential mineral that supports immunity, cellular metabolism, and overall health. It helps maintain proper function of the immune system and aids in wound healing.",
    image: "images/zinc.jpg",
    secondaryImage: "images/zinc-secondary.jpg"
  }
};

// Modal functionality
const modal = document.getElementById('product-modal');
const closeModal = document.querySelector('.close-modal');

// Function to open product modal
function openProductModal(productName) {
  const product = productData[productName];
  if (!product) return;

  // Populate modal with product data
  document.getElementById('modal-product-name').textContent = product.name;
  document.getElementById('modal-product-price').textContent = product.price;
  document.getElementById('modal-product-description').textContent = product.description;
  document.getElementById('modal-product-image').src = product.image;
  document.getElementById('modal-product-secondary-image').src = product.secondaryImage;
  document.getElementById('modal-order-button').href = `https://wa.me/27799392702?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}`;

  // Show modal
  modal.style.display = 'block';
}

// Close modal when clicking the X or outside the modal
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Make product cards clickable
document.querySelectorAll('.product').forEach(product => {
  product.addEventListener('click', () => {
    const productName = product.querySelector('h3').textContent;
    openProductModal(productName);
  });
});

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

// Hero Slider - Updated to ensure images load before starting animation
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

// Initialize slider after images are loaded
document.addEventListener('DOMContentLoaded', () => {
  // Preload the first image
  const firstSlideImage = new Image();
  firstSlideImage.src = 'images/slide1.jpg';
  
  // Start the slider after the first image is loaded
  firstSlideImage.onload = () => {
    showSlide(0); // Show the first slide immediately
    setInterval(nextSlide, 5000); // Start the auto-slide
  };
});
