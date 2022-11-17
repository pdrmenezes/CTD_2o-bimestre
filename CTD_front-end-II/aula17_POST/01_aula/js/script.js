async function login(event) {
    event.preventDefault();

    const url = "https://reqres.in/api/login"

    let payloadStr = JSON.stringify({
        email: email.value,
        password: password.value
    })

    let params = {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: payloadStr
    }
    let response = await fetch(url, params);
    // ou
    fetch(url, JSON.stringify({
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: payloadStr
    }));
};