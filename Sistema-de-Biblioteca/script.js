// ENUNCIADO
// Criem um sistema de Biblioteca
// 1 - No arquivo index.html, criem um formulário com os campos: Titulo, Autor e Ano de Publicação.
// 2 - No script.js - Cada livro cadastrado deve ser salvo em um array de objetos {titulo, autor, ano}.
// 3 - Liste todos os livros cadastrados no DOM (no HTML).
// 4 - Ainda no JS, faça uma verificação que: 
    // Se o ano for antes 2000, mostrar em vermelho com a "tag" Clássico.
    // Se não, mostrar em verde com a "tag" Moderno.
// 5 - Ao final, estilize a página com style.css externo.

const cadastros = [];
const form = document.querySelector ('#formulario');
const salvo = document.querySelector ('#salvo');
form.addEventListener ('submit', function(e){
    e.preventDefault();
    const titulo = document.querySelector(`#titulo`).value;
    const autor = document.querySelector(`#autor`).value;
    const ano = document.querySelector(`#ano`).value;
    const salvos = {titulo, autor, ano};
    cadastros.push(salvos);
    mostrarSalvo();
    form.reset();
})
function criaTag(){
    const span = document.createElement('span');
    return span;
}
function mostrarSalvo(){
    salvo.innerHTML = ``;
    for(let indice = 0; indice < cadastros.length; indice++){
        const salvos = cadastros[indice];
        // const card = document.createElement('div');
        // card.classList.add('card');
        // const span = criaTag();
        // if(livro.ano < 2000){
        //     card.classList.add('classico');
        //     span.classList.add('tag-classica');
        //     span.innerText = 'Classico'; // teste
        // } else if(livro.ano >= 2000){
        //     card.classList.add('moderno');
        //     span.classList.add('tag-moderna');
        //     span.innerText = 'Classico'; // teste
        // }
        // card.innerHTML = `
        // <div>
        //     <h3> Título: ${salvos.titulo}</h3><hr>
        //     <p> Autor: ${salvos.autor}</p>
        // </div>
        // <p> Ano de Publicação: ${salvos.ano}</p>
        // `;
        // list.appendChild(card);
        // card.appendChild(span);


        const cor = salvos.ano < 2000 ? `red` : `green`;
        salvo.innerHTML += `
        <div class="card" style="border: 1px solid ${cor}">
            <h3> <b> ${salvos.titulo} </b> </h3>
            <p>${salvos.autor}</p>
            <p> ano: <span style="color${cor}"> ${salvos.ano} </span> </p>
        </div>`;
    }
};
