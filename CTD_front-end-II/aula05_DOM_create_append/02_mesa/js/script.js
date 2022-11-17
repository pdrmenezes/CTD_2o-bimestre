let titulo = document.createElement('h1');
titulo.innerText = "Login";
document.body.appendChild(titulo);

let formulario = document.createElement('form');
formulario.style.display = 'flex';
formulario.style.flexDirection = 'column';
document.body.appendChild(formulario);

formulario.classList.add("form");

let email = document.createElement('input');
email.setAttribute('type', 'text');
email.setAttribute('placeholder', 'Email');
email.setAttribute('disabled', true);
email.removeAttribute('placeholder');
//email.disabled = "disabled";
formulario.appendChild(email);

let senha = document.createElement('input');
senha.setAttribute('type', 'password');
senha.setAttribute('placeholder', 'Senha');
formulario.appendChild(senha);

let botaoEnviar = document.createElement('button');
botaoEnviar.setAttribute('type', 'submit');
botaoEnviar.innerText = "Enviar";
formulario.appendChild(botaoEnviar);

//fazendo com template string, ele substitui o appendChild, então usar o +=
let botaoCancelar = `<button type = "reset">Cancelar</button>`;
formulario.innerHTML += botaoCancelar;
