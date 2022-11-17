// exemplo 1: ação no onclick
function revisaoDOM() {
    let nome = "Marcos";
    let nomeTemplate = `O nome do usuário é: ${nome}`;

    console.log(nomeTemplate);
}

// ou

let inputText = document.getElementById("input");

function revisaoDOM() {
    let nome = inputText.value;
    let nomeTemplate = `O nome do usuário é: ${nome}`;

    console.log(nomeTemplate);
}


// exemplo 2: eventListener no botão de adicionar pelo id
let btn = document.getElementById('adicionar');

btn.addEventListener('click', function (e) {
    e.preventDefault();
    let nome = inputText.value;
    let nomeTemplate = `O nome do usuário é: ${nome}`;

    console.log(nomeTemplate);
});


// adicionando texto e html a um elemento
document.querySelector('h3').innerHTML = "<p><strong>Novo texto com innerHTML.</strong></p>"
document.querySelector('h3').innertext += " Mais outro novo texto com innerText."
document.querySelector('h3').innertext += ` Nome: ${inputText.value}.`;

// manipulando nós
console.log("Manipulando Nodes com DOM");

let novoTexto = document.createTextNode("Digital House Brasil");
console.log(novoTexto.data);
document.querySelector('h3').innertext += novoTexto.data;

// adicionando elementos
console.log("\nAdicionando elementos na lista com o DOM\n");

var itemDescricao = document.createTextNode(`${nome}`)
var novoItemLista = document.createElement('li');
novoItemLista.appendChild(itemDescricao);

document.getElementById('lista').appendChild(novoItemLista);

// removendo elementos
console.log("\nRemovendo elementos na lista com o DOM\n");

var listaUl = document.getElementById('lista');
listaUl.removeChild(listaUl.lastElementChild);
listaUl.removeChild(listaUl.firstElementChild);