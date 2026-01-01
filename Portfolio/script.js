// GitHub contributions feature removed — cleaned up

// Initialize basic DOM behaviors if needed
document.addEventListener('DOMContentLoaded', () => {
    // Background is static now (using 'Images/Background Image New.jpg').
    // Parallax JS removed per request to keep the background stationary but slightly blurred and darkened.
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

