// solicitar a opção do usuário

let opcaoUsuario = parseInt(prompt("Pedra (1), Papel (2) ou tesoura (3)?"));
console.log(typeof (opcaoUsuario)) // o prompt retorna string por padrão

// definir jogada aleatória da máquina usando aclasse Math e seus métodos

let opcaoMaquina = parseInt(Math.random() * 3 + 1); // parseInt tem comportamento de 'floor', arredondando o número decimal pra baixo, pro seu piso (ex: 1.6 tem piso 1, vira 1)

// Math.random dá um número aleatório entre 0 e 1, multiplicá-lo por 3 vai fazer com que ele dê números de 0 a 2, somar 1 faz com que ele dê números de 1 a 3.


/* Exemplo de switch: 

let x = 0;

switch (x) { // o switch considera o tipo do dado, como se estivesse verificando igualdade com ( === )
    case 0:
        text = "Off";
        break;
    case 1:
        text = "On";
        break;
    default:
        text = "no value found";
}

console.log(text);

*/

// pra registrar todas as opções e verificar possibilidades podemos usar um switch interno dentro de cada case de um switch externo

switch (opcaoUsuario) { // o switch considera o tipo do dado, como se estivesse verificando igualdade com ( === )
    case 1:
        switch (opcaoMaquina) {
            case 1:
                console.log("Você escolheu: Pedra \nA Máquina escolheu: Pedra \nEMPATE!")
                break;
            case 2:
                console.log("Você escolheu: Pedra \nA Máquina escolheu: Papel \nVOCÊ PERDEU! :(")
                break;
            case 3:
                console.log("Você escolheu: Pedra \nA Máquina escolheu: Tesoura \nVOCÊ GANHOU! :)")
                break;
            default:
                console.log("opção inválida");
        }
        break;
    case 2:
        switch (opcaoMaquina) {
            case 1:
                console.log("Você escolheu: Papel \nA Máquina escolheu: Pedra \nVOCÊ GANHOU! :)")
                break;
            case 2:
                console.log("Você escolheu: Papel \nA Máquina escolheu: Papel \nEMPATE!")
                break;
            case 3:
                console.log("Você escolheu: Papel \nA Máquina escolheu: Tesoura \nVOCÊ PERDEU! :())")
                break;
            default:
                console.log("opção inválida");
        }
        break;
    case 3:
        switch (opcaoMaquina) {
            case 1:
                console.log("Você escolheu: Tesoura \nA Máquina escolheu: Pedra \nVOCÊ PERDEU! :(")
                break;
            case 2:
                console.log("Você escolheu: Tesoura \nA Máquina escolheu: Papel \nVOCÊ GANHOU! :)")
                break;
            case 3:
                console.log("Você escolheu: Tesoura \nA Máquina escolheu: Tesoura \nEMPATE!")
                break;
            default:
                console.log("opção inválida");
        }
        break;
    default:
        console.log("opção inválida.")
}