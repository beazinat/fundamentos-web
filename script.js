function iniciarPreparo() {
    alert('Preparando o gelo...');

    const botao = document.getElementById('startButton');
    botao.style.backgroundColor = '#ff6f61';
    botao.style.color = '#fff';
    botao.textContent = 'Preparo Iniciado';
}

function ingredientesSeparados() {
    alert('Ingredientes separados com sucesso!');

    const botao = document.getElementById('separatedButton');
    botao.style.backgroundColor = '#4CAF50';
    botao.style.color = '#fff';
    botao.textContent = 'Ingredientes Prontos';
}

const botaoPreparo = document.getElementById('startButton');
if (botaoPreparo) {
    botaoPreparo.addEventListener('click', iniciarPreparo);
}

const botaoIngredientes = document.getElementById('separatedButton');
if (botaoIngredientes) {
    botaoIngredientes.addEventListener('click', ingredientesSeparados);
}
