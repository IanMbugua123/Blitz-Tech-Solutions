
// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
        backToTopButton.classList.add('opacity-100', 'visible');
    } else {
        backToTopButton.classList.remove('opacity-100', 'visible');
        backToTopButton.classList.add('opacity-0', 'invisible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Image modal functionality
document.querySelectorAll('.design-item img').forEach(img => {
    img.addEventListener('click', function() {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4';
        
        const modalContent = document.createElement('div');
        modalContent.className = 'relative max-w-4xl w-full';
        
        const closeBtn = document.createElement('button');
        closeBtn.className = 'absolute -top-12 right-0 text-white text-3xl';
        closeBtn.innerHTML = '&times;';
        closeBtn.addEventListener('click', () => modal.remove());
        
        const modalImg = document.createElement('img');
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        modalImg.className = 'w-full h-auto max-h-screen object-contain';
        
        modalContent.appendChild(closeBtn);
        modalContent.appendChild(modalImg);
        modal.appendChild(modalContent);
        
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
                document.body.style.overflow = '';
            }
        });
    });
});

// Whatsapp 
  document.addEventListener("DOMContentLoaded", function () {
    const whatsappButton = document.getElementById("whatsapp-button");
    const heroSection = document.querySelector("#home");

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            whatsappButton.style.display = "none";
          } else {
            whatsappButton.style.display = "block";
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (heroSection) {
      observer.observe(heroSection);
    }
  });


