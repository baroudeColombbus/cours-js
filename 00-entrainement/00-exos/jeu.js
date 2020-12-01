// jeu 


var disMoi = ''; // initialisation de la variable avec 

while ((disMoi !== 'oui') && (disMoi !== 'non')) {
    disMoi = prompt('On joue au ni oui ni non ?? Allez !');
    i++; // une boucle a besoin de nombre de tours
}

document.write('<p>Perdu</p>')
