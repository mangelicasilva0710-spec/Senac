const selectPersonagem = document.querySelector('#personagem');
const btnVotar = document.querySelector('#btn-votar');
const divErro = document.querySelector('.erro');
const ulRanking = document.querySelector('#lista-ranking');
const votos = {
  Zeus: 0,
  Poseidon: 0,
  Hades: 0,
  Hera: 0,
  Afrodite: 0,
  Hermes: 0,
  Hestia: 0,
  Apolo: 0,
  Ártemis: 0,
  Ares: 0,
  Atenas: 0,
  Deméter: 0,
  Hefesto: 0,
  Dionísio: 0
};
function atualizarRanking() {
  const arr = Object.entries(votos);
  arr.sort((a, b) => b[1] - a[1]);
  ulRanking.innerHTML = '';
  const maior = arr.length ? arr[0][1] : 0;
  arr.forEach((item, index) => {
    const [nome, qtd] = item;
    const li = document.createElement('li');
    if (index === 0 && maior > 0) {
      li.classList.add('lider');
    }
    const spanNome = document.createElement('span');
    spanNome.className = 'nome';
    spanNome.textContent = nome;

    const spanVotos = document.createElement('span');
    spanVotos.className = 'votos';
    spanVotos.textContent = `${qtd} voto${qtd === 1 ? '' : 's'}`;

    li.appendChild(spanNome);
    li.appendChild(spanVotos);
    ulRanking.appendChild(li);
  });
  if (arr.every(([_, v]) => v === 0)) {
    ulRanking.innerHTML = `<li style="background:transparent;border:none;color:var(--muted)">Nenhum voto registrado ainda.</li>`;
  }
}
function votar() {
  const escolha = selectPersonagem.value;
  if (!escolha) {
    divErro.textContent = 'Erro: selecione um personagem antes de votar.';
    return;
  }
  divErro.textContent = '';
  if (Object.prototype.hasOwnProperty.call(votos, escolha)) {
    votos[escolha] += 1;
  } else {
    votos[escolha] = 1;
  }
  atualizarRanking();
  selectPersonagem.selectedIndex = 0;
}
selectPersonagem.addEventListener('change', () => {
  if (selectPersonagem.value) {
    divErro.textContent = '';
  }
});
btnVotar.addEventListener('click', votar);
atualizarRanking();
