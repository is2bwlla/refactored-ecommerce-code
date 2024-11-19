// Selecionando o ícone de hambúrguer e a navbar
const hamburguerIcon = document.querySelector('.hamburguer-icon');
const navbar = document.querySelector('.bg-nav');

// Função para alternar a classe 'active' e abrir/fechar o menu
hamburguerIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});