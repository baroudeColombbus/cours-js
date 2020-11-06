// JS - III 06 Précédence et règles d'associativité


// NO
// Dans notre example x = 5
//Opérateur inversé; ce n'est pas vrai, 5 n'es tpas inférieur à 2.Autrement dit, si le test est false la négation(!)renvoie true donc on exécute pas
if(! (x <= 2)){//no
    document.getElementById('p3').innerHTML='x contient une valeur strictement supérieur à 2'
}

// la précédence

let x = 15;
let y = -20;
let z = 0;
document.getElementById('v1').innerHTML = (' la variable x contient ' + x );

document.getElementById('v2').innerHTML = (' la variable y contient ' + y );

document.getElementById('v3').innerHTML = (' la variable z contient ' + z );

if ( x >=20 + y && x <= 10 || y < 0){
    document.getElementById('p1').innerHTML = '1- Soit x = ' + x + ' compris entre 0 et 10, soit y strictement positif, soit les deux';
}

if ( x >= 20 + y && (x<= 10 || y < 0)) {
    document.getElementById('p2').innerHTML = '2- x positif et soit x inférieur à 10, soit y strictement positif, soit les deux';
}

if ( !z == 1) {
    document.getElementById('p3').innerHTML = '3- z contient une valeur évalué à false';
}
//if(x >= 20 + y && )