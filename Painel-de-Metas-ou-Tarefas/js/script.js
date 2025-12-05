const form = document.querySelector('.formulario');
const campoNome = form.querySelector('#titulo');
const campoDescricao = form.querySelector('#descricao');
const campoPrioridade = form.querySelector('#prioridade');
const campoData = form.querySelector('#data');
const btnAdd = form.querySelector('#adicionar');
const erro = document.querySelector('.erro');
const listaMetas = document.querySelector('#lista-metas');

function adicionarMeta(e){
    e.preventDefault();
    erro.innerText = "";

    const titulo = campoTitulo.value.trim();/*o trim remove os espaço*/
    const descricao = campoDescricao.value.trim();
    const prioridade = campoPrioridade.value;
    const data = campoData.value;
    const hoje = new Date().toISOString().split('T')[0];
    
    if (!titulo || !descricao || !data || data < hoje) {
        erro.innerText = "Preencha os campos corretamente";
        return;
    }
    const li = document
}