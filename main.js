document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Adjust scroll position for fixed header
                const headerOffset = document.querySelector('.header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Optional: Add simple fade-in on scroll for sections
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the section is visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('hidden-section'); // Add initial hidden class
        sectionObserver.observe(section);
    });

    // Add styles for hidden and fade-in to CSS
    // .hidden-section { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
    // .fade-in { opacity: 1; transform: translateY(0); }

    // Dynamic TikTok CTA button link
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            // No alert needed, as it's a direct link to TikTok
            // alert('Mengarahkan ke TikTok @gaisann12!'); // Example if you want an alert
        });
    }
});