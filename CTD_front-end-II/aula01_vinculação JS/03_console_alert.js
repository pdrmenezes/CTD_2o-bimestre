let meuObjeto = {
    mensagem: "Mensagem de texto",
    utilidade: "Prova de JS"
};

let meuArray = ["Primeira mensagem do array", "Segunda mensagem do array", "Terceira mensagem do array"]

console.table(meuObjeto);
console.table(meuArray);

alert("Um alerta pra ficar ligeiro!");

console.log(5 + 5);


let atendimentoPersonalizado = confirm("Deseja um atendimento personalizado?")

if (atendimentoPersonalizado) {
    let nome = prompt("Por favor insira seu nome");
    alert("Damos as boas-vindas ao nosso site " + nome + ". Muito obrigado pela sua visita!Estamos à sua disposição! ?");
} else {
    alert("Obrigado por se conectar.")
}