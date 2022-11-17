var barraVerdeProgressoGlobal = 0
var barraLaranjaProgressoGlobal = 0

let barraVerdeTamanhoInicialGlobal = 0;
let barraLaranjaTamanhoInicialGlobal = 0;

let contadorGlobalDeInteracoes = 1;

function avancaBarraVerde(recebeValor) {
    var elem = document.getElementById("barraVerdeProgresso");
    var id = setInterval(frame, 10);

    function frame() {
        if (barraVerdeTamanhoInicialGlobal >= recebeValor) {
            clearInterval(id);
        } else {
            barraVerdeTamanhoInicialGlobal++;
            elem.style.width = barraVerdeTamanhoInicialGlobal + "%"; // aumenta a width da barra
            elem.innerHTML = barraVerdeTamanhoInicialGlobal + "%"; // muda o número da porcentagem no html
        }
    }
}

function avancaBarraLaranja(recebeValor) {
    var elem = document.getElementById("barraLaranjaProgresso");
    var id = setInterval(frame, 10);

    function frame() {
        if (barraLaranjaTamanhoInicialGlobal >= recebeValor) {
            clearInterval(id);
        } else {
            barraLaranjaTamanhoInicialGlobal++;
            elem.style.width = barraLaranjaTamanhoInicialGlobal + "%"; // aumenta a width da barra
            elem.innerHTML = barraLaranjaTamanhoInicialGlobal + "%"; // muda o número da porcentagem no html
        }
    }
}

function avanca() {
    if (barraLaranjaProgressoGlobal == 100) {
        alert("Concluído!")
    } else {
        if (barraVerdeProgressoGlobal < 100) {
            barraVerdeProgressoGlobal += 10;
            avancaBarraVerde(barraVerdeProgressoGlobal)
        } else {
            if (barraLaranjaProgressoGlobal < 100) {
                barraLaranjaProgressoGlobal += 20;
                avancaBarraLaranja(barraLaranjaProgressoGlobal)

                barraVerdeProgressoGlobal = 0;
                barraVerdeTamanhoInicialGlobal = 0;

                document.querySelector('h4').innerText = `Interações: 0${contadorGlobalDeInteracoes++}`
            }
        }
    }
}