const campoPreco = document.querySelector('#preco'):
const opcoesPagamento = document.querySelector('#pagamento');
const btn = document.querySelector('#btn');
const resultado = document.querySelector('#resultado')

function calcularValorFinal(){
    const preco = parseFloat(campoPreco.value):
    const pagamento = opcoesPagamento.value;

    if(isNaN(preco) || preco <= 0 || pagamento ===""){\
        resultado.innerHTML = '<p class= '
    }
}

