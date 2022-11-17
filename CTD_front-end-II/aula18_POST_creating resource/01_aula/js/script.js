let title = document.querySelector('#title');
let desc = document.querySelector('#desc');
let btn = document.querySelector('#btn');

btn.addEventListener('click', cadastrarNovoPost);

// função assíncrona por não garantir que o recurso estará disponível imediatamente
async function cadastrarNovoPost(event) {
    event.preventDefault;

    let url = "https://jsonplaceholder.typicode.com/posts";

    let post = {
        title: title.value,
        desc: description.value
    }

    let postStringificado = JSON.stringify(post);

    let params = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: postString
    }
}

let response = fetch(url, params);

var postJson = await response.json();

console.log(postJson);

document.querySelector('p').innerText = `Post cadastrado com sucesso! id = ${postJson.id}`;