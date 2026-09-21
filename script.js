const menuToggle = document.querySelector('.menu-toggle');
const menuLinksContainer = document.querySelector('.links');
const menuLinks = document.querySelectorAll('.links a');

menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.classList.toggle('is-open');
    menuLinksContainer.classList.toggle('is-open', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen);
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
});

menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('is-open');
        menuLinksContainer.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open navigation menu');
    });
});

const updateOverscrollBackground = () => {
    const documentBottom = document.documentElement.scrollHeight - window.innerHeight;
    const isAtBottom = window.scrollY >= documentBottom - 1;

    document.documentElement.classList.toggle('footer-overscroll', isAtBottom);
};

window.addEventListener('scroll', updateOverscrollBackground, { passive: true });
window.addEventListener('resize', updateOverscrollBackground);
updateOverscrollBackground();
