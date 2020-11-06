// page sur les ternaire 

let x = 15;
let y = -20;

// faire un if else pour vérifier si x est sup. ou égal à 10
// condition classique

if(x >= 10){
    document.getElementById('p2').innerHTML = 'x est supérieur ou égal 10 (if statement);' 
}else{
    document.getElementById('p2').innerHTML = 'x n\'est pas supérieur ou égal 10 ?';
}

// la même condition en ternaire // ? = if : else
document.getElementById('p1').innerHTML = x >= 10? 'x est supérieur ou égal 10 ? (ternaire statement)' : 'x strictement inférieur à 10 (ternaire statement) ';

// y 

if(y >= 10){
    document.getElementById('p4').innerHTML = 'y est supérieur ou égal 10 (if statement);' 
}else{
    document.getElementById('p4').innerHTML = 'y est pas inférieur ou égal 10 ?';
}

// la même condition en ternaire // ? = if : else
document.getElementById('p5').innerHTML = y > 10? 'y est supérieur ou égal 10 ? (ternaire statement)' : 'y strictement inférieur à 10 (ternaire statement) ';