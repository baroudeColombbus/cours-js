// le nombre de jours

// let nbrSaisi = prompt('Quel moi choisissez-vous ?', 'saisir le numéro du moi entre 1 et 12');


// let annee = {
//     mois : ['Victor','Hugo'],
//     age : 2,
//     email : 'tothugo@gmail.com',
//     // bonjour est une méthode de l'objet victor
//     bonjour: function(){
//         alert('Bonjour je suis ' + this.nom[0] + 'j\'ai '+ this.age + ' ans');
//     }// fin de l'alerte

// }
// // let annee = {
// //     moiDeLannee : [ Janvier = 31,
// //         fevrier = 28,
// //         mars = 31,
// //         avril = 30,
// //         mai = 31,
// //         juin = 30,
// //         juillet = 31,
// //         aout = 31,
// //         septembre = 30,
// //         octobre = 31,
// //         novembre = 30, 
// //         Decembre = 31],

// //     janvier : function(){
// //         this.moiDeLannee[0] ;
// //     }

// // }// fin annee



// mois =  parseInt(nbrSaisi);

// if ( (!isNaN(mois))){ 
//     if(mois == 1){
//         document.getElementById('p1').innerHTML = 'le mois numéro ' + nbrSaisi + ' de l\'année fait ' + 31 +' jours';

//     }else if(mois == 2){
//         document.getElementById('p1').innerHTML = 'le mois numéro ' + nbrSaisi + ' de l\'année fait ' + 28 +' jours';

//     }else if(mois == 3){
//         document.getElementById('p1').innerHTML = 'le mois numéro ' + nbrSaisi + ' de l\'année fait ' + 31 +' jours';
//     }else if(mois == 4){
//         document.getElementById('p1').innerHTML = 'le mois numéro ' + nbrSaisi + ' de l\'année fait ' + 30 +' jours';
//     }else if(mois == 5){
//         document.getElementById('p1').innerHTML = 'le mois numéro ' + nbrSaisi + ' de l\'année fait ' + 31 +' jours';
//     }else if(mois == 6){
//         document.getElementById('p1').innerHTML = 'le mois numéro ' + nbrSaisi + ' de l\'année fait ' + 30 +' jours';
//     }else if(mois == 7){
//         document.getElementById('p1').innerHTML = 'le mois numéro ' + nbrSaisi + ' de l\'année fait ' + 31 +' jours';
//     }else if(mois == 8){
//         document.getElementById('p1').innerHTML = 'le mois numéro ' + nbrSaisi + ' de l\'année fait ' + 31 +' jours';
//     }else if(mois == 9){
//         document.getElementById('p1').innerHTML = 'le mois numéro ' + nbrSaisi + ' de l\'année fait ' + 30 +' jours';
//     }else if(mois == 10){
//         document.getElementById('p1').innerHTML = 'le mois numéro ' + nbrSaisi + ' de l\'année fait ' + 31 +' jours';
//     }else if(mois == 11){
//         document.getElementById('p1').innerHTML = 'le mois numéro ' + nbrSaisi + ' de l\'année fait ' + 30 +' jours';
//     }else if(mois == 12){
//         document.getElementById('p1').innerHTML = 'le mois numéro ' + nbrSaisi + ' de l\'année fait ' + 31 +' jours';
//     }else{
//         document.getElementById('p1').innerHTML = 'vous devez saisir un nombre entre 1 et 12 !';
//     }
    
// }else{
//     document.getElementById('p1').innerHTML = nbrSaisi  + ' n\'est pas un nombre';
// } 

// // solution 2

// if(!isNaN(mois)){ // est-ce bien un nombre ?
//     if(mois >= 1 && mois <= 12){ // si le chiffre est entre 1 et 12, on exécute le bloc de code suivant
//         if(mois == 1 || mois == 3 || mois == 5 || mois == 7 || mois == 8 || mois == 10 || mois == 12 ){ 
//             document.getElementById('p1').innerHTML = ' Le numéro ' + mois + ' de l\'année fait 31 jours.';
//         }else if(mois == 4 || mois == 6 || mois == 9 || mois == 11){
//             document.getElementById('p1').innerHTML = ' Le numéro ' + mois + ' de l\'année fait 30 jours.';
//         }else{
//             document.getElementById('p1').innerHTML = ' Le numéro ' + mois + ' de l\'année fait 28 jours.';
//         }
//     }else{ // sinon, on exécute ce code
//         document.getElementById('p1').innerHTML = 'Il n\' y a que 12 mois dans l\'année !';
//     }
// }else{ // si mois n'est pas un nombre (isNan), on exécute ce code
//     document.getElementById('p1').innerHTML = 'Vous devez saisir un chiffre !';
// } //fin de la condition


// solution 3

// let nombreSaisi = prompt('Quel moi choisissez-vous ?', 'saisir le numéro du moi entre 1 et 12');
// mois = parseInt(nombreSaisi);

// if (isNaN(mois)){
//     document.getElementById('p1').innerHTML = nombreSaisi + ' n\est pas un nombre '+'(Katia ton code commence ici => Vous devez saisir un chiffre !)';
// }else if(mois == 1 || mois == 3 || mois == 5 || mois == 7 || mois == 8 || mois == 10 || mois == 12 ){
//     document.getElementById('p1').innerHTML = ' Le numéro ' + mois + ' de l\'année fait 31 jours.';
// }else if(mois == 4 || mois == 6 || mois == 9 || mois == 11){
//     document.getElementById('p1').innerHTML = ' Le numéro ' + mois + ' de l\'année fait 30 jours.';
// }else if(mois == 2){
//     document.getElementById('p1').innerHTML = ' Le numéro ' + mois + ' de l\'année fait 28 jours.';
// }else {
//     document.getElementById('p1').innerHTML = 'Il n\'y a que 12 mois dans l\'année !';
// }

let nomDuMoi = ['janvier', 'fevrier', 'mars', 'avril','mai','juin','juillet','août','septembre','octobre','novembre','decembre'];

console.log(nomDuMoi)
console.log(nomDuMoi.indexOf('fevrier'));


var months = prompt('Quel moi choisissez-vous ?', 'saisir le numéro du moi entre 1 et 12');
mois = parseInt(months);

if(isNaN(months)){
    document.getElementById('p1').innerHTML = months + ' n\'est pas un nombre '; //avec affichage des valeurs saisi
}else { /* sinon c'est un nombre */
if (mois === 2) {//un nombre égal à 2 etc...
    //document.getElementById('p1').innerHTML = 'Le mois numéro ' + mois + ' de l\'année fait 28 jours.';
    document.getElementById('p1').innerHTML = 'Le mois numéro ' + mois +  ', ' + nomDuMoi[mois - 1] + ' fait 28 jours.';
} else if ((mois === 4) || (mois === 6) || (mois === 9) || (mois === 11)) {// OU à 4 OU à 6 etc...
    document.getElementById('p1').innerHTML = 'Le mois numéro ' + mois +  ', ' + nomDuMoi[mois - 1] + ' fait 30 jours.';
} else if ((mois === 1) || (mois === 3) || (mois === 5) || (mois === 7) || (mois === 8) || (mois === 10) || (mois === 12)) {
    document.getElementById('p1').innerHTML = 'Le mois numéro '  + mois +  ', ' + nomDuMoi[mois - 1] + ' fait 31 jours.';
} else {
    document.getElementById('p1').innerHTML = 'Votre choix de numéro, le ' + mois + ' n\est pas dans le calendrier ! ';
}
}//fin du if else principal
