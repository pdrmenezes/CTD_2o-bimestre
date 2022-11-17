let formName = document.querySelector('#name');
let job = document.querySelector('#job');
let btn = document.querySelector('#btn');
let resposta = document.querySelector('p');



btn.addEventListener('click', cadastrarNovaPessoa);

// função assíncrona por não garantir que o recurso estará disponível imediatamente
async function cadastrarNovaPessoa(event) {
    event.preventDefault;


    let url = "https://reqres.in/api/users";

    let pessoa = {
        name: formName.value,
        job: job.value
    }

    let pessoaStringificada = JSON.stringify(pessoa);

    let params = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: pessoaStringificada
    }
    let response = fetch(url, params);

    let pessoaJson = await response.json();
    console.log(pessoaJson);

}

// resposta.innerText = `Pessoa cadastrada com sucesso! id = ${postJson.id}`;