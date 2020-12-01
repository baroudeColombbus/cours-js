// page exo parité

// for(var i = 1; i <= 10; i++){
//     if(i % 2 === 0){
//         console.log(i + ' est pair')
//     }
// }


// nombre pair
for(var i = 1; i <= 10; i++){
    if(i % 2 === 0){ // le reste est égal à 0 donc le chiffre est pair
        console.log(i + ' est pair');
    }else{ // si non c'est impair
        console.log(i + ' est impair');
    }
}


//         exo 2

// let nbrUtilisateur = parseInt(prompt('Entrez un nombre à verifier '));
// let nbrUtilisateurMax = (nbrUtilisateur +10);

// for(var i = nbrUtilisateur; i <= nbrUtilisateurMax; i++){
//     if(i % 2 === 0){ // le reste est égal à 0 donc le chiffre est pair
//         console.log(i + ' est pair');
//     }else{ // si non c'est impair
//         console.log(i + ' est impair');
//     }
// }

let nbrUtilisateur2 = parseInt(prompt('Entrez un nombre à verifier 2 '));
let nbrUtilisateurMax2 = (nbrUtilisateur2 +10);
while (nbrUtilisateur2 <= nbrUtilisateurMax2){
    if (nbrUtilisateur2 % 2 === 0){
        document.write('<p>' + nbrUtilisateur2 + ' est pair\n</p>');
       // document.getElementById('p4').innerHTML = nbrUtilisateur2 + ' est pair <br>';
    } else {
        document.write('<p>' + nbrUtilisateur2 + ' est impair \n </p>')
        //document.getElementById('p4').innerHTML = nbrUtilisateur2 + ' est pair <br>';
    } nbrUtilisateur2++;

}