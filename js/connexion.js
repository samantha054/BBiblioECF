document.querySelector('#sinscrire').addEventListener('click', (e) => {
    e.preventDefault();

    let nom = document.querySelector('#nom').value;
    let mail = document.querySelector('#mail').value;

    const regtext = /^([A-Za-zéèôöùàï]+[-_]?[ ]?([A-Za-zéëèôöùàï]?)+)$/;
    const regmail = /^[A-Za-z0-9-_\.]+(\@){1}[A-Za-z]+\.{1}([a-z]){2,3}$/;

    document.querySelector('#nom').classList.remove('invalid');
    document.querySelector('#mail').classList.remove('invalid');

    if (!regtext.test(nom) || !regmail.test(mail)) {
        if (!regtext.test(nom) && !regmail.test(mail)) {
            e.preventDefault();
            document.querySelector('#nom').classList.add('invalid');
            document.querySelector('#mail').classList.add('invalid');
            console.log(nom);
        }
        else if (!regtext.test(nom)) {
            e.preventDefault();
            document.querySelector('#nom').classList.add('invalid');
        }
        else {
            document.querySelector('#mail').classList.add('invalid');
        }

    }

    else {
        document.querySelector('#nom').classList.remove('invalid');
        document.querySelector('#mail').classList.remove('invalid');
        alert('Merci, vous recevrez prochainement un mail de confirmation.');
        document.querySelector('#nom').value = ' ';
        document.querySelector('#mail').value = ' ';
    }

})

$('#seConnecterJ').click((e) => {
    e.preventDefault();
    if (document.querySelector('#login').value != "" && document.querySelector('#password').value != "") {
        location.href = 'profilJury.html'
    }
    else {
        e.preventDefault();
    }
})

$('#seConnecterA').click((e) => {
    e.preventDefault();
    if (document.querySelector('#login').value != "" && document.querySelector('#password').value != "") {
        location.href = 'profilAuteurs.html'
    }
    else {
        e.preventDefault();
    }
})