// exo 15 multiplication

var premierNombre = parseInt(prompt('Choisir un 1er nombre'));
//var secondNombre = parseInt(prompt('Choisir un 2eme nombre comprit entre 2  et 9'));
nb1 = premierNombre;
nb2 = secondNombre;


// for(nb1=1; nb1 <=10; nb1++){
//     for(nb2=2; nb2 <= 9; nb2++){
//         mutltiplication = nb1 * nb2;
//     document.getElementById('p1').innerHTML = mutltiplication;  
// }
// }


for (var i = 1; i <=10; i++) {//1- initialisation de la variable; 2- test ou condition de sortie; 3- incrémentation
    var resultat = nombre1 * i;    // on fait l'opération avant et on la passe en variable
    document.getElementById('p1').innerHTML += nombre1 + ' x ' + i + ' = ' + resultat + '<br>';//le nombre1 à chaque passage FOIS la variable i = la variable résultat
}
for (var i = 1; i <=10; i++) { 
    document.getElementById('p1').innerHTML += nombre1 + ' x ' + i + ' = ' + nombre1 * i + '<br>';//on fait l'opération dans la bloce de code
}