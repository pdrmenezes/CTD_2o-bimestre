// AJAX - Assynchronous Javascript And XHTML

let nome = document.querySelector('#nome')
let btn = document.querySelector('#btn')
let ol = document.querySelector('ol')


btn.addEventListener('click', event => {
    event.preventDefault();

    let url = `https://api.github.com/users/${nome.value}/repos`;

    // por padrão, o 'fetch' gera um GET para a url indicada
    fetch(url) // comunicação assíncrona
        // assim que a resposta chegar, chegará como array de objetos transformados em string, transformaremos a array de objetos stringficados em objeto manipulável
        .then(arrayRepos => arrayRepos.json()) // comunicação assíncrona. Assim que o array de objetos estiver pronto:
        .then(arrayRepos => {
            arrayRepos.forEach(repo => {
                ol.innerHTML += `<li>${repo.name}</li>`
            })
        })
})