const campoEmail = document.querySelector("#email");
const botaoValidacao = document.querySelector("#button2");

const mensagem = document.createElement('m');

function clearform() {
    campoEmail.value = '';
}

botaoValidacao.addEventListener("click", function(event) {
    event.preventDefault();
    
    if(campoEmail.value.trim() === '') {
        mensagem.textContent = "*Preencha o e-mail";
        campoEmail.insertAdjacentElement("afterend", mensagem);
        mensagem.setAttribute("class", "error");
        return false;
    }

    const valorEmail = campoEmail.value;

    console.log(valorEmail);

    mensagem.classList.add("d-none");
    clearform();
});

var textos = ["Texto 1", "Texto 2", "Texto 3"];
var indiceAtual = 0;

function trocarTexto(indice) {
    var textosSec2 = document.getElementById('sec2-textos');
    var paragrafos = textosSec2.getElementsByTagName('p');

    // Oculta todos os parágrafos
    for (var i = 0; i < paragrafos.length; i++) {
        paragrafos[i].style.display = 'none';
    }

    // Exibe o texto correspondente ao botão clicado
    paragrafos[indice].style.display = 'block';
}