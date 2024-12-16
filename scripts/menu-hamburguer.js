const hamburguerIcon = document.querySelector('.hamburguer-icon');
const navbar = document.querySelector('.categories-nav');

hamburguerIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});