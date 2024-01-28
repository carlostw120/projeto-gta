alert("Pai está ficando bão")

const botao = document.querySelector(".btn-plataforma");

const elementoPlaraformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {

    elementoPlaraformas.classList.toggle("ativo")

} );