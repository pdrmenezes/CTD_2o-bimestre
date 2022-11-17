let texto = "Como vai esta segunda-feira?";

let palavras = texto.split(" ");

console.log(palavras);
console.log(`total de palavras: ${palavras.length}`);
console.log(palavras[3].length);

// usar for / forEach() / for of pra verificar o comprimento de cada palavra do array

// usando regular expressions pra validar campos (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions)
// procurando o padrão /mari/ dentro do parâmetro 'texto'


let encontrou = /mari/.test(texto); // retorna true ou false
console.log(`encontrou mari: ${encontrou}`);

// procurando um dígito numérico
encontrou = /\d/.test(texto);
encontrou = /[0-9]/.test(texto); // '[0-9]' tem o mesmo efeito que o '\d'
console.log(`encontrou número: ${encontrou}`);

let nome = document.querySelector("#nome");

nome.addEventListener('keyup', validateForm) // o evento 'keyup' é disparado ao soltar a tecla
nome.addEventListener('change', validateForm) // usando o evento 'change' no input espera o foco sair do campo

function validateForm() {
    let erros = [];

    // validação começa verificando se o campo está vazio
    if (nome.value != "") {
        erros.push("o campo 'nome' não deve estar vazio.") // insere nova mensagem na array de erros
    }

    let palavras = nome.value.split(" ");

    // validação conta quantas palavras foram inseridas (mín 2)
    if (palavras.length < 2) {
        erros.push('precisa ter pelo menos duas palavras');
    }

    // valida se há dígitos numéricos no conteúdo do campo
    let encontrou = /\d/.test(nome.value);
    if (encontrou) {
        erros.push('o nome não pode conter dígitos numéricos');
    }

    if (erros.length > 0) {
        console.log(`erro(s): ${erros}`);
    }
};