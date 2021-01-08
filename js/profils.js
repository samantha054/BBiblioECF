$('#valider').click((e)=>{
    e.preventDefault();
    const regexMDP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/;
    if(regexMDP.test(document.querySelector('#passwordC').value)){
        document.querySelector('#passwordC').classList.remove('invalid');
        document.querySelector('.erreur').textContent ='';
        alert('Merci votre mot de passe a été modifié');
        location.href='titreDeLOeuvre.html'
        
    }
    else{
        document.querySelector('#passwordC').classList.add('invalid');
        document.querySelector('.erreur').textContent =' Le mot de passe doit comprendre majuscule et minuscule, 10 caractères minimum et 1 chiffre';
        document.querySelector('.erreur').style.color='red';
    }
})

$('#datepicker').datepicker();