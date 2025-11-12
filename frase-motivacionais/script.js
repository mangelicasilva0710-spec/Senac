const dicas = [
    "Se você não fizer por você agora, ninguém vai aparecer depois para salvar o que você perdeu",
    "O tempo está passando — e você sabe que cada dia que você adia, você se arrepende em silêncio",
    "Você conhece exatamente o futuro que gostaria de ter. E também sabe que não está fazendo tudo o que precisa para chegar lá",
    "Quando você coloca a cabeça no travesseiro, você sabe se fez o que devia",
    "A sua consciência não mente",
    "Você diz que quer vencer, mas suas ações não combinam com suas palavras",
    "Seu eu do futuro está esperando você se tornar alguém que ele possa se orgulhar. Não decepcione ele",
    "Todo “depois eu faço” já te roubou mais do que você imagina",
    "Você já sabe o que acontece quando você procrastina. Já viveu isso. Não repita",
    "Você não tem que provar nada para ninguém — mas deve muito ao que você sabe que pode ser",
    "Você não precisa ser perfeito. Mas precisa ser honesto consigo mesmo: hoje você deu tudo que podia?",
];

function gerarDica() {
    const dica = dicas[Math.floor(Math.random() * dicas.length)];
    document.querySelector("#dica").textContent = dica;
}

document.querySelector("#botao").addEventListener("click", gerarDica);
