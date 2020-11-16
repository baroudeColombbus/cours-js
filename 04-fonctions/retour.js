// JS - IV - 04 les valeurs de retour


function division(a,b){
    if(b == 0){
        return 'Division par 0 est impossible !';
    }else {
        // alert('attent je calcule')
        return a / b; // après le return, plus rien ne se passe. 
        alert('ce code ne s\'affichera pas')

    }
}
//console.log(division(50,0));

let nbr1 = prompt('Entréz un premier nombre à diviser ')
let nbr2 = prompt('Entréz un second nombre qui divisera ')

let resultat= division(nbr1,nbr2)
document.getElementById('p1').innerHTML = resultat