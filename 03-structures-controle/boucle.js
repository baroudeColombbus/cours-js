// JS pour les boucles
//INTRO
//incrémentation

let a = 10, b = 10, c = 20, d = 20;
//console.log(a);
//a++ va incrémenter APRES a de 1, il ajoute 1 après 
// a stocke la valeur 10 jusqu'à son  incrémentation.
// le signe ++ incrémente la valeur contenu dans la vriable par 1, ensuite : tout est stocké. Pour récupérer la nouvelle valeur, on doit appeler à nouveau notre variable
// cette fois-ci la valeur de variable rendra la valeur incrémenté
document.getElementById('p1').innerHTML = 'a contient la valeur ' + a + ', la je vais post-incrémenté de 1, ce qui fait toujours = '+ a++ + ' et ce qui fera a =  '+ a;
//console.log(a)

//pré-incrémentation
document.getElementById('p2').innerHTML = 'b contient la valeur ' + b + 'là je vais pré-incrémentévant, ce qui fait que maintenant b contient '+ ++b;

console.log(b);

console.log(c)

document.getElementById('p3').innerHTML = 'c contient la valeur ' + c +' , là je post-décrémente de 1, ce qui fait que c\'est toujours égal ' +c-- + ' et donc après ça sera égal a ' +c;
document.getElementById('p4').innerHTML = 'd contient la valeur ' + d + ' , là je pré-décrémente de 1, et donc d égal à ' + --d;


// boucle while

let w1 = 0;
while(w1 < 10){
    document.getElementById('while1').innerHTML += 'w1 contient la valeur ' + w1 + ' <br> ';
     w1++;
}

let w2 = 0;
while(w2 <= 10){
    document.getElementById('while2').innerHTML += 'w2 contient la valeur ' + w2 + '<br>';
    w2++;
}

// on va faire la même avec do...while (faire... tant que)
let w3 = 0;
do {// fait 
    document.getElementById('while3').innerHTML += 'w3 contient la valeur '+ w3 + '<br>' ;
    w3++;
}while(w3 < 10)// tant que le test est vrai

