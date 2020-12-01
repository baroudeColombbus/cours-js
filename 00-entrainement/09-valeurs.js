
var nb1 = parseInt(prompt('Entrez le nombre 1'));
var nb2 = parseInt(prompt('Entrez le nombre 2'));
var nb3 = parseInt(prompt('Entrez le nombre 3'));

if(nb1 > nb2){
    nb1 = nb2 * 2;
}else{
    nb1++;
    if(nb2 > nb3){
        nb1 = nb1 + nb3 * 3;
    }else{
        nb1 = 0;
        nb3 = nb3 *2 + nb2;
    }
}

document.getElementById('p1').innerHTML= 'si le nombre 1 = ' + nb1 + ' et que le nombre 2 = ' + nb2 + 'nombre 3 = ' + nb3 + ' alors' + nb1;

console.log(nb1)
console.log(nb2)
console.log(nb3)