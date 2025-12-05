const form = document.querySelector('#form');
const selecaoPratos = form.querySelector('#prato');
const selecaoBebida = form.querySelector('#bebida');
const adicionais = form.querySelectorAll('input[type="checkbox"]');
const btnCalcular = form.querySelector('#calcular');
const erro = document.querySelector('#erro');
const resultado = document.querySelector('#resultado');

const precos = {
    prato: {
        "Croissant doce": 15.00,
        "Sanduíches naturais": 20.00,
        "Panquecas doces": 25.00
    },
    bebida: {
        "Espresso": 8.00,
        "Chocolate quente": 12.00,
        "Smoothies": 15.00
    },
    adicionais: {
        "Sobremesa": 10.00,
        "Molho Extra": 6.00,
        "Embalagem Premium": 17.00
    }
};

function calcular(e) {
    e.preventDefault();

    const prato = selecaoPratos.value;
    const bebida = selecaoBebida.value;
    let total = 0;

    if (prato === "") {
        erro.textContent = "Escolha um prato válido.";
        return;
    }
    if (bebida === "") {
        erro.textContent = "Escolha uma bebida válida.";
        return;
    }

    erro.textContent = "";

    total += precos.prato[prato];
    total += precos.bebida[bebida];

    let extrasEscolhidos = [];

    adicionais.forEach(item => {
        if (item.checked) {
            total += precos.adicionais[item.value];
            extrasEscolhidos.push(item.value);
        }
    });

    resultado.innerHTML = `
        <h2>Resumo do pedido</h2>
        <p><b>Prato: </b>${prato}</p>
        <p><b>Bebida: </b>${bebida}</p>
        <p><b>Adicionais: </b>${extrasEscolhidos.length > 0 ? extrasEscolhidos.join(', ') : "Nenhum"}</p>
        <p><b>Total: R$ ${total.toFixed(2).replace('.', ',')}</b></p>
        <button id="novoPedido">Novo Pedido</button>
    `;

    form.classList.add('hidden');
    resultado.classList.remove('hidden');

    document.querySelector('#novoPedido').addEventListener('click', resetar);
}

function resetar() {
    form.classList.remove('hidden');
    resultado.classList.add('hidden');
    form.reset();
    resultado.innerHTML = "";
}

btnCalcular.addEventListener('click', calcular);
