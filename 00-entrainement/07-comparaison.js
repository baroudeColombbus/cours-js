// page comparaison

let premierNbr = parseInt(prompt('1er nombre ')); // récuprération du premier nombre
let secondNbr = parseInt(prompt('2nd nombre ')); // récuprération du premier nombre
// solution 1
if(premierNbr > secondNbr && premierNbr != '' && secondNbr != ''){
    document.getElementById('p1').innerHTML = 'Votre 1er nombre ( ' + premierNbr + ' ) est plus grand que votre 2nd nombre ( ' + secondNbr + ' )';
}else if(premierNbr < secondNbr && premierNbr != '' && secondNbr != ''){
    document.getElementById('p1').innerHTML = 'Votre 1er nombre ( ' + premierNbr + ' ) est plus petit que votre 2nd nombre ( ' + secondNbr + ' )';

}else if(premierNbr == secondNbr && premierNbr != '' && secondNbr != ''){
    document.getElementById('p1').innerHTML = 'Votre 1er nombre ( ' + premierNbr + ' ) est égal à votre 2nd nombre ( ' + secondNbr + ' )';

}else{
    document.getElementById('p1').innerHTML = 'votre devez rentrer un nombre dans chaque case !'
}
// solution 2
let nb1 = premierNbr;
let nb2 = secondNbr;

function comparaison(nb1,nb2){
    if ( (!isNaN(nb1)) && (!isNaN(nb2)) ) {// utilisation de isNaN ; isNaN nous "ce n'est pas un nombre" ; !isNaN nous dit "c'est bien un nombre"
            if (nb1 < nb2) {// si nombre1 est inférieur
                document.getElementById('p2').innerHTML = 'Votre 1er nombre : ' + nb1 + ' est plus petit que votre 2nd : ' + nb2;
            } else if (nb1 > nb2) { // si il est supérieur
                document.getElementById('p2').innerHTML = 'Votre 1er nombre : ' + nb1 + ' est plus grand que votre 2nd : ' + nb2;
            } else {// sinon ils sont égaux
                document.getElementById('p2').innerHTML = 'Votre 1er nombre : ' + nb1 + ' est égal à votre 2nd : ' + nb2;
            }// fin if condition comparaison 
        } else { // verifie la condition on utilisant (!isNaN(nb1)
            document.getElementById('p2').innerHTML = 'Vous n\'avez pas saisi de nombre(s)';
    };
}// end of the fonction 

comparaison(nb1,nb2);