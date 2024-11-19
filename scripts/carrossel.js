// PRIMEIRO CARROSSEL:

document.addEventListener("DOMContentLoaded", function() {
    const carrosseis = document.querySelectorAll('.carrossel-cards');

    carrosseis.forEach(carrossel => {
        const produtos = carrossel.querySelector('.produto');
        const cards = produtos.querySelectorAll('.cards-produto');
        const cardLargura = cards[0].offsetWidth;
        const cardsVisiveis = Math.floor(carrossel.offsetWidth / cardLargura);
        let indiceInicial = 0;

        function mostrarCards() {
            cards.forEach((card, index) => {
                if (index >= indiceInicial && index < indiceInicial + cardsVisiveis) {
                    card.style.display = "block"; // Exibir cards dentro da faixa visível
                } else {
                    card.style.display = "none"; // Ocultar cards fora da faixa visível
                }
            });
        }

        function proximo() {
            if (indiceInicial < cards.length - cardsVisiveis) {
                indiceInicial++;
            } else {
                indiceInicial = 0; // Voltar ao primeiro item quando atingir o último
            }
            mostrarCards();
        }

        function anterior() {
            if (indiceInicial > 0) {
                indiceInicial--;
            } else {
                indiceInicial = cards.length - cardsVisiveis; // Voltar ao último item quando estiver no primeiro
            }
            mostrarCards();
        }

        // // Log para verificar se os botões estão sendo selecionados corretamente
        // console.log(carrossel.querySelector(".anterior"));
        // console.log(carrossel.querySelector(".proximo"));

        // Event listeners para os botões de navegação
        const anteriorBtn = carrossel.querySelector(".anterior");
        const proximoBtn = carrossel.querySelector(".proximo");
        proximoBtn.addEventListener("click", proximo);
        anteriorBtn.addEventListener("click", anterior);

        mostrarCards(); // Mostrar os cards iniciais
    });
});

