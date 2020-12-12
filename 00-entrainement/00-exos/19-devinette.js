// 19- devinette

let nbrAleatoir = Math.random();

//2- on multiplie le nombre trouvé par 100
let nombreX100 = nbrAleatoir * 100;

//3 on arrondie le nombre
let nbrArrondi = Math.floor(nombreX100)// math.floor arrondi un nombre décimal au nombre inféreir

//2 aute solutions pour arrondir
nombreX100 = parseInt(nbrAleatoir * 100);
console.log(nombreX100)

/*
loop 6 time using while
1 - gather a number using a prompt
2- if the gathered number prompted by the user is == to the random number
3- write that number + you've won
4- if the gathered number is < random number 
5- write the the user number is < random number
7- if the gathered number is > random number 
8 - write  the user number is > random number

*/
let nombreDeFois = 0;
alert('Bienvenue')
 
// for(i=1; i<=6; i++){
//     let nombreDevine =  parseInt(prompt('Le jeu est simple : je pense à un nombre entre 0 et 100 \n a ton avis quel est ce nombre ? Tu as droit à six tentatives'));
//     //console.log('votre nombre', nombreDevine)
//     if (nombreDevine === nombreX100){
//         //console.log('votre nombre', nombreDevine,'nombre alleatoire',nombreX100 );
//         alert('Bravo ! vous avez trouvé à la ' + i + ' ère tentative sur 6');
//         break;
         
//     }else if (nombreDevine < nombreX100) {
//         alert('le nombre '+ nombreDevine +' est plus petit. Il vous restes ' +  (6-i )+ ' tentative sur 6')
//         //console.log(nombreDevine, ' est plus pet ',nombreX100 );
//     }else if (nombreDevine > nombreX100){
//         alert('le nombre '+ nombreDevine +' est plus grand. Il vous restes ' +  (6-i )+ ' tentative sur 6')
//        // console.log(nombreDevine, ' > ', nombreX100 );
    
//     } else if (isNaN(nombreDevine)) {
//         alert('Vous devez saisir un nombre. Il vous restes ' +  (6-i )+ ' tentative sur 6');
//     }else if ((i===6)) {
//         alert('Vous avez perdu !!!\n la solution etait ' + nombreDevine + '\vous y arriverez mieux la prochaine fois');
//         break;
//     } 
// }

for(i=1; i<=6; i++){
    let nombreDevine =  parseInt(prompt('Le jeu est simple : je pense à un nombre entre 0 et 100 \n a ton avis quel est ce nombre ? Tu as droit à six tentatives'));
    //console.log('votre nombre', nombreDevine)
    if (nombreDevine === nombreX100){
        //console.log('votre nombre', nombreDevine,'nombre alleatoire',nombreX100 );
        alert('Bravo ! vous avez trouvé à la ' + i + ' ère tentative sur 6');
        break;
         
    } if (nombreDevine < nombreX100) {
        alert('le nombre '+ nombreDevine +' est plus petit. Il vous restes ' +  (6-i )+ ' tentative sur 6')
        //console.log(nombreDevine, ' est plus pet ',nombreX100 );
    }if (nombreDevine > nombreX100){
        alert('le nombre '+ nombreDevine +' est plus grand. Il vous restes ' +  (6-i )+ ' tentative sur 6')
    } if (!isNaN(nombreDevine)) {
        alert('Vous devez saisir un nombre. Il vous restes ' +  (6-i )+ ' tentative sur 6');
    } if ((i===6)) {
        alert('Vous avez perdu !!!\n la solution etait ' + nombreDevine + '\ vous y arriverez mieux la prochaine fois');
        break;
    } 


}// fin du for 

// solution 2

// for(var i = 1; i<=6; i++){
//     var choixUtilisateur = parseInt(prompt('Le jeu est simple, je pense à un nombre entre 0 et 100. A ton avis, quel est ce nombre ? Tu as droit à 6 essais !'));
//         if(!isNaN(choixUtilisateur)){
//             if(nombreArrondi === choixUtilisateur){ // le nombre est égal au nombre au hasard
//                 alert('Bien joué');
//                 i=6; // la boucle s'arrête
//             }else{
//                 if(nombreArrondi < choixUtilisateur){
//                     alert('Le nombre est plus petit ; essai n°' + i + ' /6');
//                 }else{
//                     alert('Le nombre est plus grand ; essai n°' + i + ' /6');
//                 }
//             }// fin if plus grand ou plus petit
//         }else{
//             alert('Il faut entrer un nombre !!');
//         }// fin if principal
// } // fin for
// alert('La bonne réponse était ' + nombreArrondi);


// solution 3

// autre solution AUDREY
// var solution = Math.floor(Math.random() * 100) + 1 ; // Je génère un nombre aléatoire entre 1 et 100
// console.log("(La solution est " + solution + ")");
// for (var i = 1; i <= 6; i++) { // je lance la boucle, où i <=  nombre d'essais
//     var essai = parseInt(prompt("Tu as 6 essais pour trouver le nombre mystère, choisis un nombre entre 1 et 100 :"));
//     if (essai === solution) {
//         // console.log("Vous avez trouvé en " + i + " essai(s)");
//         alert("Bravo, Vous avez trouvé en " + i + " essai(s)");
//         break; // si la réponse est trouvé, la boucle s'arrête et la console l'affiche, en précisant le nombre d'essai nécessaires.
//         // OU i = 6 pour remplacer le break;
//     } 
//     if (essai < solution){ // comparent la valeur "essai" à la valeur "solution"
//         // console.log(essai + " est trop petit");
//         alert(essai + ' est trop petit... Vous en êtes à ' + i + ' sur 6 tentatives!!');
//     } 
//     if (essai > solution) {
//         // console.log(essai + " est trop grand");
//         alert(essai + ' est trop grand... Vous en êtes à ' + i + ' sur 6 tentatives!!');
//     } 
//     if (i === 6){
//         // console.log("Vous avez perdu ! Le nombre était : " + solution);
//         alert('Vous avez perdu, le nombre était ' + solution ); // si la solution n'est pas trouvée, la console l'affiche en donnant la solution
//     }
//     if (isNaN(essai)) { //si ce n'est pas un nombre
//         alert('Votre proposition n\'est pas un nombre !! Vous en êtes à ' + i + ' sur 6 tentatives!!');
//     } console.log(i);   
// } // fin boucle for




//Le mode strict apporte quelques changements à la sémantique « normale » de JavaScript:
// Le mode strict élimine quelques erreurs silencieuses de JavaScript en les changeant en erreurs explicites (une exception sera levée).
// Le mode strict corrige les erreurs qui font qu'autrement il est difficile pour les moteurs JavaScript d'effectuer des optimisations. Le code sera donc exécuté plus rapidement en mode strict, sans changer une seule ligne si cela n'est pas nécessaire.
// Le mode strict interdit les mot-clés susceptibles d'être définis dans les futures versions de ECMAScript.



