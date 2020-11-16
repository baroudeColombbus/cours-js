// page bonjour
//
let nom = prompt('Entrez votre nom ');// on initialise la variable nom à l'aide d'une action de l'utilisateur
let prenom = prompt('Entrez votre prenom');// on initialise la variable prennom à l'aide d'une action de l'utilisateur
function individu(nom, prenom){// on crée une fonction qui contient deux paramètres
    if(nom !='' && prenom!=''){
        alert('style="background: orange;color: #fff;">Les informations saisies sont incorrectes ! '+
        '\nMerci de réesayer ' )
    }else{
        alert('Bonjour, '+ prenom + ' '+ nom);// alert se déclanchera lorsqu'on appellera la fonction
    }  
}
// on appelle la fonction. L'utilisateur est prié d'insérer deux valeurs
individu(nom, prenom)