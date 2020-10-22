// mon premier fichier .js Baroude Colombbus
// Ce fichier est lié à la page 01-04-introduction.html

/* Déclaration de toutes mes variables */
let bonjour = document.getElementById('b1');
let ajouter = document.getElementById('b2');

/* Les events */
bonjour.addEventListener('click', popup);
ajouter.addEventListener('click', ajout);

/* funtions */
function popup() {
    alert('Bonjour, cette function est correcte');
}

/*  */
function ajout(){
    let para = document.createElement('p');
    para.textContent = 'En cliquant sur ce bouton, on cré une function aui ajoute un paragraphe dans le body du html';
    document.body.appendChild(para);
}

