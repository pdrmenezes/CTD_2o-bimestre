// permitir ao usuário cadastrar um array de músicos

// diálogo, confirmação ou alerta?

// perguntar quantos músicos a pessoa quer cadastrar e guardar em 1 variável
let n = prompt("quantos músicos deseja cadastrar?");


alert(n);

// nome de cada um?

let musicos = [];
for (let i = 0; i < n; i++) {
    // musicos[i] = prompt("nome: ");
    musicos.push(prompt("nome: "))
}
console.log(musicos);


// varrer um array facilmente (for of)
for (let m of musicos) {
    console.log(m);
}


// varrer um objeto facilmente (for in)
let personagem = {
    nome: 'mari',
    idade: 18,
    genero: 'mulher cis'
}

for (let campo in personagem) {
    console.log(campo, personagem[campo]); // logar no console o nome do campo + conteúdo do campo
}


// trabalhar com objetos dentro de arrays (for of + for in)
let personagem2 = {
    nome: 'ana',
    idade: 30,
    genero: 'mulher cis'
}

let personagens = [];
personagens.push(personagem);
personagens.push(personagem2);

for (let p of personagens) {
    for (let campo in p) {
        console.log(campo, p[campo]);
    }
}

/* -------------------------------- */

let certeza = confirm("tem certeza???");

// com if ternário
// certeza ? "sim, certeza absoluta" : alert("tudo bem ter dúvidas (:");

if (certeza == true) {
    console.log("sim, certeza absoluta");
} else {
    alert("tudo bem ter dúvidas (:");
}