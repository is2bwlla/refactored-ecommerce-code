const hamburguerIcon = document.querySelector('.hamburguer-icon');
const navbar = document.querySelector('.bg-nav');

hamburguerIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});