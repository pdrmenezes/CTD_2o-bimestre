// chamar funções em template strings

function soma(num1, num2) {
    return num1 + num2;
}

const temp = `O resultado é ${soma(2, 2)};`
console.log(temp);


// selecionando 'div' com classe 'nome'
document.querySelector('div.nome').innerHTML = '<strong>Daniel</strong>';


// editando estilo pelo DOM
let titulo = document.querySelector('.title')

titulo.style.color = 'cyan';
titulo.style.textAlign = 'center';

// criando e editando nodes/nós
document.createElement('input')
document.createTextNode('Olá Mundo')
document.body.appendChild(titulo)