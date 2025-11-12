const frases = [
    "Pare de inventar desculpas. O resultado só depende de você",
    "Se você consegue ficar horas no celular, consegue estudar 1 hora",
    "Você sabe exatamente o que precisa fazer. Só falta fazer",
    "O dia não está curto. Você que está se dispersando",
    "Você não está cansado, está acomodado. Dá para mais",
]

const botao = document.querySelector('button');
const frase = document.querySelector('#frases');

function gerarFrases() {
    const indiceAletorio = Math.floor(Math.random() * frases.length);
    frase.innerText = frases[indiceAletorio];
};
botao.addEventListener('click', gerarFrases);