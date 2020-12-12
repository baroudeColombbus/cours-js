// heure suivante 

// write a program  that collect 3 information
// check that the information is not a text
// 1- hour
// 2- minute
// 3 - seconde
// hour <= 24 
// minutes <= 60
// secondes <= 60

/* if houres >= 0 || heures <= 24 do :  {
    hours += 1
}

*/

/* if minutes >= 0 || minutes <= 60   do :  {
    minutes += 1
}

*/

/* if secondes >= 0 || secondes <= 60  do  :  {
    secondes += 1
}

*/

// 



var heures = prompt('Entrez l\'heure');
var minutes = prompt('Entrez les minutes');
var secondes = prompt('Entrez les secondes');
if ((heures >= 0) && (heures <=23) && (minutes >= 0) && (minutes <= 59) && (secondes >= 0) && (secondes <=59)) {// conditions 
    secondes++;// on incrémente les seconde
        if (secondes === 60) {
            secondes = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                heure++;
                if (heures === 24) {
                    heures = 0;
                }
            }
        }
    console.log('il sera ' + heures + ' ' + minutes + ' ' + secondes );
    document.getElementById('p1').innerHTML = 'Dans une seconde il sera ' + heures + ' h ' + minutes + ' mn ' + secondes +' s.';
} else {
    document.getElementById('p1').innerHTML = 'Heure incorrecte';
}
















// function comparaison(nb1,nb2){
//     if ( (!isNaN(nb1)) && (!isNaN(nb2)) ) {// utilisation de isNaN ; isNaN nous "ce n'est pas un nombre" ; !isNaN nous dit "c'est bien un nombre"
//             if (nb1 < nb2) {// si nombre1 est inférieur
//                 document.getElementById('p2').innerHTML = 'Votre 1er nombre : ' + nb1 + ' est plus petit que votre 2nd : ' + nb2;
//             } else if (nb1 > nb2) { // si il est supérieur
//                 document.getElementById('p2').innerHTML = 'Votre 1er nombre : ' + nb1 + ' est plus grand que votre 2nd : ' + nb2;
//             } else {// sinon ils sont égaux
//                 document.getElementById('p2').innerHTML = 'Votre 1er nombre : ' + nb1 + ' est égal à votre 2nd : ' + nb2;
//             }// fin if condition comparaison 
//         } else { // verifie la condition on utilisant (!isNaN(nb1)
//             document.getElementById('p2').innerHTML = 'Vous n\'avez pas saisi de nombre(s)';
//     };
// }// end of the fonction 

// comparaison(nb1,nb2);