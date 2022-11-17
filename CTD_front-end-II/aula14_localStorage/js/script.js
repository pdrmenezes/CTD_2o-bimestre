// executado no load/carregamento da página
let nome = document.querySelector('#nome')
let sobrenome = document.querySelector('#sobrenome')
let btn = document.querySelector('#btn')
let ol = document.querySelector('ol')


/* ============ trabalhar com um campo no localStorage ============ */

let nomesArray = []; // o array que vai mediar o armazenamento no storage
let nomesStrStorage = localStorage.getItem('nomes') // recuperamos o conteúdo do valor 'nomes' em uma string


if (nomesStrStorage != null) {
    nomesArray = nomesStrStorage.split(',') // separando a string em um array usando vírgulas

    nomesArray.forEach(nome => ol.innerHTML += `<li>${nome}</li>`) // pra cada elemento do array gerado, adiciona um novo item na lista
} else {
    console.log('empty storage.')
}

btn.addEventListener('click', event => {
    event.preventDefault(); // impede o form de ser enviado para o backend

    ol.innerHTML += `<li>${nome.value}</li>` // pega o valor digitado no campo e acrescenta um item 'li' dentro da 'ol' no html

    nomesArray.push(nome.value); // adiciona valor digitado ao array de nomes

    let nomesStr = nomesArray.join(','); // juntando todos os elementos do array em uma string separados por vírgula pra salvar no localStorage

    localStorage.setItem('nomes', nomesStr); // atualiza o valor 'nomes' no localStorage com a string gerada pelo join
})


/* ============ trabalhar com um objeto literal no localStorage ============ */

let pessoasArray = [] // array que vai mediar o armazenamento no storage
let pessoasStorage = localStorage.getItem('pessoas'); // se já tiver pessoas no storage, pega essas pessoas


if (pessoasStorage = !null) {
    pessoasArray = pessoasStorage.split('\n');

    pessoasArray.forEach(pessoa => {
        let pessoaObj = JSON.parse(pessoaStr);
        ol.innerHTML += `<li>nome: ${pessoaObj.nome}, sobrenome: ${pessoaObj.sobrenome}</li>`;
    });
} else {
    console.log('empty storage.')
} // se houver pessoas no storage (se pessoas no storage != null), splita e adiciona na lista novamente, senão, mostra 'empty storage'

btn.addEventListener('click', event => {
    event.preventDefault();

    ol.innerHTML += `<li>nome: ${pessoaObj.nome}, sobrenome: ${pessoaObj.sobrenome}</li>`; // atualizamos a lista com o nome recém inserido

    let pessoaObj = {
        nome: nome.value,
        sobrenome: sobrenome.value
    }; // criado objeto literal js manipulável com os campos do form

    let pessoaStr = JSON.stringify(pessoaObj); // pessoa transformada em string

    pessoasArray.push(pessoaStr); // adicionar as pessoas stringficadas em uma array

    let pessoasStorage = pessoasArray.join('\n'); // string com todos os objetos stringficados juntos

    localStorage.setItem('pessoas', pessoasStorage); // adiciona cada pessoa da array pessoasStorage
});