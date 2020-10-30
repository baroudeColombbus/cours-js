// JS pour introduction comparaisons

let x = '4';
let testEgalValeur = x == 4; // valeur égale en valeur ET en type ?

// print to the value of x to the console
// console.log(x)
// console.log(typeof testEgalValeur)
let testValeurType = x === 4; //valeur égale en valeur ET en type (doit remplir deux conditions, type et numner par exemple)
// console.log(testValeurType)

let testEgalValeurType = x == 4; 

let testDifferenceValeur = x != 5;// différent  de 5
// console.log(testDifferenceValeur)

let testDifferenceValeurType = x !== 4; // différent en valeur ET en type ?
// console.log(testDifferenceValeurType)

let testinferieur = x < 8;
console.log(testinferieur)

let testsuperieur = x > 4 ;
console.log(testsuperieur)

alert('valeur dans x égale à 4 (en valeur) ? : ' + testEgalValeur + 
    '\n (valeur dans x égale à 4 (en valeur))' + testEgalValeurType + '' +
    '\n valeur dans x différent de 4 en (valeur) ? ' + testDifferenceValeur +
    '\n valeur dans x différent de 4 en (en valeur OU en type) ? ' + testDifferenceValeurType +
    '\n valeur dans x égale à 4 (en valeur ET type) ? : ' + testValeurType +
    '\n valeur dans x inférieur à 4 (en valeur) ? ' + testinferieur +
    '\n valeur dans x supérieur à 4 (en valeur) ? ' + testsuperieur


);
