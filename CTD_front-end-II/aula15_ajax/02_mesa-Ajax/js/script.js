const url = "https://reqres.in/api/users?page=2"

fetch(url)


    .then(response => response.json())
    .then(response => {
        response.data.forEach(pessoa => {
            console.log(pessoa)

            const new_div = document.createElement('div');
            new_div.setAttribute("class", "movie");
            last_section = document.getElementsByClassName('movies-grid')[0].appendChild(new_div);


            const img = document.createElement('img');
            img.setAttribute('class', 'thumbnail');
            img.setAttribute('src', pessoa.avatar);
            document.getElementById('movies-grid').lastChild.appendChild(img);

            const nome = document.createElement('h1');
            nome.setAttribute('class', 'movie-title');
            nome.innerText = `${pessoa.first_name} ${pessoa.last_name}`;
            document.getElementById('movies-grid').lastChild.appendChild(nome);

            let email = document.createElement('p');
            email.setAttribute('class', 'movie-email');
            email.innerText = pessoa.email;
            document.getElementById('movies-grid').lastChild.appendChild(email);
        })
    })