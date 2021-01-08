document.querySelector('.validNote').addEventListener('click', (e) => {
    let noteInput1 = document.querySelector(".noteInput1").value;
    let noteInput2 = document.querySelector(".noteInput2").value;
    let noteInput3 = document.querySelector(".noteInput3").value;
    let noteInput4 = document.querySelector(".noteInput4").value;

    const regexN = /^[0-9]{1,2}$/;

    for (let i = 1; i < 5; i++) {

        if (!regexN.test(document.querySelector(".noteInput" + i).value)) {
            document.querySelector('.noteInput' + i).classList.add('invalid');
            document.querySelector('#note' + i + 'err').textContent = 'Veuillez entrer une note';
            document.querySelector('#note' + i + 'err').style.color = 'red';
            e.preventDefault();
        }
        else {

            document.querySelector('.noteInput' + i).classList.remove('invalid');
            document.querySelector('#note' + i + 'err').textContent = '';

        }
    }
    if (regexN.test(noteInput1) && regexN.test(noteInput2) && regexN.test(noteInput3) && regexN.test(noteInput4)) {
        document.querySelector("#validationNotes").textContent = 'Merci ! Vos notes sont prises en compte';
        document.querySelector('.noteInput1').classList.remove('invalid');
        document.querySelector('#note1err').textContent = '';
    } //Base de données

}
)

document.querySelector('.download').addEventListener('click', () => {
    alert('En cours de téléchargement...')
})

//Base de données

document.querySelector('.recapitulatifs').addEventListener('click', () => {
    location.href = 'recapitulatifNotes.html'
})

document.querySelector('.buy').addEventListener('click', () => {
    window.open('https://www.amazon.fr/livre-achat-occasion-litterature-roman/b?ie=UTF8&node=301061')
})