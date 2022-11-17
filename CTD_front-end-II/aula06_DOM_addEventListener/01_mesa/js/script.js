window.onload = () => {
    let submit = document.getElementById('submit');
    submit.addEventListener('click', (evt) => {
        evt.preventDefault();
        console.log('Submit pressionado');
    })

    let p = document.querySelector('p');
    p.addEventListener('mouseover', () => {
        p.style.color = 'red';
    });
    p.addEventListener('mouseout', () => {
        p.style.color = 'black';
    });

    let txt = document.getElementById('txt');
    txt.addEventListener('keyup', () => {
        document.getElementById('exit').innerHTML = `${txt.value} <br> ${txt.value.length}`;
    });

    alert('página carregada!');
};