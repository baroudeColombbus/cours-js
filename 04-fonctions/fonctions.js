// page fonctions
//exemple

document.getElementById('p1').innerHTML = Math.random();

//replace

let discours =  'Bonjour je suis Donald Trump et j\'ai gagné';
let discours2 = discours.replace('Donald Trump', 'Joe Biden');// Le nom d'une fonction  

document.getElementById('p2').innerHTML = discours2 

// exemple d'une fonctions personalisée
//1- multiplier le résultat de random * 100
function randomX100(){
    return Math.random() * 100;
}
// calling the function randomX100
console.log(randomX100());

document.getElementById('p3').innerHTML = randomX100();


function multiplier(nbr1, nrb2){
    // return( nbr1 * nrb2)
    return ('Multiplions ' + nbr1 + ' X ' + nrb2 + ' = ' + (nbr1 * nrb2));
}

document.getElementById('p3').innerHTML = multiplier(3,5);
//console.log( multiplie(2,5));


// Soustraction

function soustraire(nombre1 ,nombre2){
    return('Soustrions ' + nombre1 + ' - ' + nombre2 + ' => ' + (nombre1 - nombre2));
}
document.getElementById('p5').innerHTML = soustraire(20,120)
//console.log(soustraire(8, 5));
// Division 

function divisons(nombre1 ,nombre2){
    return('Divisons ' + nombre1 + ' - ' + nombre2 + ' => ' + (nombre1 / nombre2));
}

document.getElementById('p6').innerHTML = divisons(1200,100)

// Modulo

function getModulo(nombre1 ,nombre2){
    return('Le rest de la division euclidienne, po le modulo de ' + nombre1 + ' par ' + nombre2 + 'le modu'+ ' est égal à ' + (nombre1 % nombre2));
}

console.log(getModulo(8,3))
