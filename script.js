// Smooth scroll fade effect
document.addEventListener('DOMContentLoaded', function() {
  // Add animation class to elements
  const elements = document.querySelectorAll('.fade-in');
  
  elements.forEach((el) => {
    el.style.animation = `fadeIn 0.8s ease-out forwards`;
  });

  // Scroll indicator click functionality
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function() {
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    });
  }

  // Hide scroll indicator on scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      scrollIndicator.style.opacity = '0';
      scrollIndicator.style.pointerEvents = 'none';
    } else {
      scrollIndicator.style.opacity = '1';
      scrollIndicator.style.pointerEvents = 'auto';
    }
  });
});

// Optional: Add keyboard navigation
document.addEventListener('keydown', function(event) {
  if (event.code === 'Space') {
    event.preventDefault();
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }
});
