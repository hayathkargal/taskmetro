// Mobile navigation toggle
function toggleNav() {
  const nav = document.querySelector('.nav');
  if (nav) {
    nav.classList.toggle('open');
  }
}

// Close nav when clicking outside
document.addEventListener('click', (e) => {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav-toggle');
  
  if (nav && toggle && nav.classList.contains('open')) {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('open');
    }
  }
});

// Footer year
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

// Request form submission
function submitRequest(e) {
  e.preventDefault();
  
  const form = document.getElementById('requestForm');
  if (!form) return false;
  
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  
  // Show loading state
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';
  
  const formData = new FormData(form);
  
  // Send to Web3Forms
  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('✅ Request submitted successfully! We\'ll get back to you within 24 hours.');
      form.reset();
    } else {
      throw new Error(data.message || 'Submission failed');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('❌ Failed to submit request. Please email us directly at support@taskmetro.com or try again.');
  })
  .finally(() => {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  });
  
  return false;
}

// Contact form submission
function submitContact(e) {
  e.preventDefault();
  
  const form = document.getElementById('contactForm');
  if (!form) return false;
  
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  
  // Show loading state
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';
  
  const formData = new FormData(form);
  
  // Send to Web3Forms
  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('✅ Message sent successfully! We\'ll respond soon.');
      form.reset();
    } else {
      throw new Error(data.message || 'Submission failed');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('❌ Failed to send message. Please email us directly at support@taskmetro.com or try again.');
  })
  .finally(() => {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  });
  
  return false;
}

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Close mobile nav if open
          const nav = document.querySelector('.nav');
          if (nav && nav.classList.contains('open')) {
            nav.classList.remove('open');
          }
        }
      }
    });
  });
});

// Add active state to nav based on current page
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav a');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });
});
