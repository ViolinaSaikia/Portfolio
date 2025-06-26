// Simple animation on scroll
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.8s ease';
    });

    const reveal = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.style.opacity = 1;
                section.style.transform = 'translateY(0)';
            }
        });
    };

    reveal();
    window.addEventListener('scroll', reveal);
});
