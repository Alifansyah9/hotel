// Get the navigation links
const navLinks = document.querySelectorAll('nav a');

// Add click event listener to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior

    // Get the target section based on the link's href
    const targetSection = document.querySelector(event.target.getAttribute('href'));

    // Scroll to the target section smoothly
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Get the book now button
const bookNowBtn = document.querySelector('#book-now');

// Add click event listener to the book now button
bookNowBtn.addEventListener('click', () => {
  // Simulate booking process (you'll need to add your actual booking logic here)
  alert('Booking process initiated. Please complete the booking form.');
});

// Get the carousel elements
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
let currentSlide = 0;

// Function to display the current slide
function showSlide(n) {
  const slides = carousel.getElementsByClassName('slide');
  if (n >= slides.length) currentSlide = 0;
  if (n < 0) currentSlide = slides.length - 1;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[currentSlide].style.display = 'block';
}

// Add click event listeners to the carousel buttons
prevBtn.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

nextBtn.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

// Initial slide display
showSlide(currentSlide);