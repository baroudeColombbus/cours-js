//.js pour la page types de données

// string
let presentation = "Je m'appelle Ted-Yanis";
let age = 25;
let age2 = 45;
let prix = 19.99;
let boolean = true;
let monArray = [1,2,3,4,5,6]
let phrase = "Mon film est \"2000 lieues sous les mers\"";
let phrase2 = 'Mon film est "2000 lieues sous les mers"';

// affichage des variable
console.log(typeof presentation)
console.log(typeof age)
console.log(typeof age2)
console.log(typeof boolean)
console.log(typeof monArray)
console.log(phrase)
console.log(phrase2)

//confirm("Hi!")



//1- récupérer dans le document un élément dont l'id est p1
//1- remplacer le contenu d'un élément identifié par son attribut id 
//3- puis on concatène une string et le résultat de la fonction typeof()
document.getElementById('p1').innerHTML = 'Type de données pour la varaible présentation : ' + typeof presentation;
document.getElementById('p2').innerHTML = 'Type de données pour la varaible age : ' + typeof age;
document.getElementById('p3').innerHTML = 'Type de données pour la varaible prix : ' + typeof prix;

//2- Number

let x = 10;
let y =-2000 ;
let z = 3.14;
// 2 arguments dans la console.log
console.log(x, typeof(x))
console.log(y,typeof(y))
console.log(z, typeof(z))

//3- Boolean ou Booléen
let vrai = true;
let faux = false;

let test = 8 > 4 ;
let test2 = 4 < 1;

console.log('8 > 4 nous donnes : ',test)
console.log('4 < 1 nous donnes : ',test2)

//4-  NULL et UNDEFINED

let arbre;
arbre = 'feuille'

console.log(typeof (arbre));

let nul = null;
let indefini;

console.log('nom de la varaible nul ', typeof(nul));

document.getElementById('p4').innerHTML = 'Le type de la variable est : ' +typeof(nul);
document.getElementById('p5').innerHTML = 'Le type de la variable est : ' +typeof(indefini);


