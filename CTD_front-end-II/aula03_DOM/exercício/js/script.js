// querySelector() nos permite, a partir do 'document', pegar o 1º elemento da classe 'h1'
let titulo = document.querySelector('h1');
console.log(titulo);

// querySelectorAll() nos permite selecionar, do 'document', todos os elementos com a classe 'h2'
let todosOsSubtitulos = document.querySelectorAll('h2');
console.log(todosOsSubtitulos);

// varrer um array
for (let sub of todosOsSubtitulos) {
    console.log(sub);
}

// callback function a ser chamada pra mostrar cada elemento
function mostraElemento(elemento) {
    console.log(elemento);
}

// callback com arrow function dentro do forEach
todosOsSubtitulos.forEach((elemento) => {
    console.log(elemento);
})

todosOsSubtitulos.forEach(mostraElemento);

// selecionar o elemento com classe 'conteudo'
console.log(document.querySelector('conteudo'));


// selecionar o elemento com id 'diferente'
console.log(document.querySelector('#diferente'));

// selecionar o elemento também com getElementById
console.log(document.getElementById('diferente'));


// selecionar só o elemento 'p' que está dentro do 'h2'
console.log(document.querySelector('h2 p'));

// alterando o conteúdo de qalquer elemento
document.querySelector('h1').innerHTML = 'novo título'

// usar o prompt pra alterar o conteúdo de um elemento
document.querySelector('h1').innerHTML = prompt("Insira um novo título");