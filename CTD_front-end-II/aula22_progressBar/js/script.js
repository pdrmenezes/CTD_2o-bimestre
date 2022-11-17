// simular processo que leva 5 segundos
const tempoDeCarga = 5000;

function animarBarra() {
    // selecionando o elemento barra
    let barra = document.getElementById("barra");

    // iniciar o proceso sempre em 0
    let width = 0;

    // calcular progresso em relação ao tempo total

    const progressoSobreTempoTotal = tempoDeCarga / 100;

    // determinar um intervalo pra incrementar o processo
    let id = setInterval(incrementarProgresso, progressoSobreTempoTotal);

    function incrementarProgresso() {
        // se o progresso estiver completo, encerramos a função
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;

            // modificar o DOM pra atualizar o progresso
            barra.style.width = width + "%";
            barra.innerHTML = width + "%";
        }
    }
}

document.querySelector("#iniciar-carga").addEventListener('click', animarBarra);