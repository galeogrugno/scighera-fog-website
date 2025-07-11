// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  // Get all navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add intersection observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    });
  }, observerOptions);

  // Observe sections for animations
  const sections = document.querySelectorAll('.spotify-section, .bio-section, .social-section');
  sections.forEach(section => {
    observer.observe(section);
  });

  // Add hover effects to social cards
  const socialCards = document.querySelectorAll('.social-card');
  socialCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // Add click functionality to Spotify buttons
  const spotifyBtn = document.querySelector('.btn-primary');
  const shareBtn = document.querySelector('.btn-outline');

  if (spotifyBtn) {
    spotifyBtn.addEventListener('click', function() {
      // Placeholder for Spotify integration
      console.log('Spotify follow clicked');
      // You can add actual Spotify integration here
    });
  }

  if (shareBtn) {
    shareBtn.addEventListener('click', function() {
      // Simple share functionality
      if (navigator.share) {
        navigator.share({
          title: 'Scighera - Indie-pop dall\'anima milanese',
          text: 'Scopri la musica di Scighera',
          url: window.location.href
        });
      } else {
        // Fallback for browsers that don't support Web Share API
        navigator.clipboard.writeText(window.location.href).then(() => {
          alert('Link copiato negli appunti!');
        });
      }
    });
  }

  // Add active state to navigation
  function updateActiveNav() {
    const sections = ['music', 'bio', 'contact'];
    const scrollPosition = window.scrollY + 100;

    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      const navLink = document.querySelector(`a[href="#${sectionId}"]`);
      
      if (section && navLink) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLink.style.color = 'hsl(var(--foreground))';
        } else {
          navLink.style.color = 'hsl(var(--muted-foreground))';
        }
      }
    });
  }

  // Update active navigation on scroll
  window.addEventListener('scroll', updateActiveNav);
  
  // Initial call to set active nav
  updateActiveNav();
});