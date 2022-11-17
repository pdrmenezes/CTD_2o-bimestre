// alterar texto do h1
// innerHTML x innerText (no innerHTML ele entende códigos html, no innerText, ele só entende texto simples)
document.querySelector('h1').innerHTML = '<i>Novo Título</i>';


// ao invés de substituir o texto que existe, acrescentar texto ao h1
document.querySelector('h1').innerText += ' Demais!';


// capturar um texto do prompt para alterar o h1
// usando template strings

let novoTitulo = prompt('Insira o novo título pra a sua história: ');
document.querySelector('h1').innerText = `O novo título é: ${novoTitulo}`;


// alterar cor de fundo do body

// posso atribuir a seleção de 1 classe a 1 variável e acessá-la com o mesmo método
let body = document.querySelector('body');

body.style.backgroundColor = '#333';

// alterar cor de fundo e cord de texto do 1º item de lista
let itemDeLista = document.querySelector('li')
itemDeLista.style.backgroundColor = 'tomato';
itemDeLista.style.color = '#fff'

// pra alterar mais de um parâmetro ao mesmo tempo
itemDeLista.classList.add('dark');

// e pra alterar todos os itens da lista
let itens = document.querySelectorAll('li');

for (let item of itens) {
  item.classList.add('dark');

}

// associando alterações a um clique

function themeChange() {
  body.classList.toggle('dark');
}

body.onclick = themeChange; // quando clicar no body, a função que muda a cor de fundo será chamada. Com o toggle, se a classe 'dark' estiver presente, ele retira, se não estiver, ele adiciona


/* outra forma de visualizar o que o toggle faz 
function themeChange() {
  if (body.classList.contains('dark')){
    body.classList.remove('dark');
  } else {
    body.classList.add('dark');
  };
}

*/