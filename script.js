window.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
});

const sections = document.querySelectorAll('.fade-in-section');

const checkVisibility = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (sectionTop < viewportHeight * 0.8) {
            section.classList.add('is-visible');
        } else {
            section.classList.remove('is-visible');
        }
    });
};

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

checkVisibility();