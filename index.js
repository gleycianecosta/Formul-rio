const form = document.querySelector('.form-example');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let data = {
        city: document.querySelector('.form-city').value,
        cnpj: document.querySelector('.form-cnpj').value,
        email: document.querySelector('.form-email').value,
        fantasia: document.querySelector('.form-fantasia').value,
        inscricao: document.querySelector('.form-inscricao').value,
        lastname: document.querySelector('.form-lastname').value,
        marketplace: document.querySelector('.form-marketplace').value,
        nomeresponsavel: document.querySelector('.form-nomeresponsavel').value,
        phone: document.querySelector('.form-phone').value,
        razao: document.querySelector('.form-razao').value,
        url: document.querySelector('.form-url').value,
        estado: document.querySelector('.form-estado').value
    }


    fetch('/api/dataentities/FO/documents', {
        method: 'POST',
        headers: {
            "content-type": 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            console.log('sucess', response)
        })
})