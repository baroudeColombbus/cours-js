// page saisie

//let nombreEntre = parseInt(prompt('entrez un nombre','>=50 et <=100'));
let nombre = 0; // valeur initiale qui va nous permettre d'entrer dans la boucle

while ((nombre < 50) || (nombre > 100)) {// tant que : tous les nombres non compris entre 50 et 100 ; soit il est inférieur à 50 soit il est supérieur à 100 || ou
    nombre = parseInt(prompt('entrez un nombre','> 50 et <100'));
}

console.log( nombre + ' > nombre récupéréé');

