// opérateurs

let x = 5; 
let y = 6;

if(x >= 0 && x <= 10){// les deux conditions doivent être correcte
    document.getElementById('p1').innerHTML = 'x vaut ' + x + ' et est une valeur comprise entre 0 et 10';
}

// || ou 


if(y < 0 || y > 10){// OU ici une seule comparaision
    document.getElementById('p2').innerHTML = 'y vaut ' + y + ' et est une valeur plus petite que -10 ou plus grande que -10';
}

// NO
// Dans notre example x = 5
//Opérateur inversé; ce n'est pas vrai, 5 n'es tpas inférieur à 2.Autrement dit, si le test est false la négation(!)renvoie true donc on exécute pas
if(! (x <= 2)){//no
    document.getElementById('p3').innerHTML='x contient une valeur strictement supérieur à 2'
}



         