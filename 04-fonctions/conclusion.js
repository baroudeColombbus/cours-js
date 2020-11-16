// page 04-05 conclusion.html
// on va créer une fonction anonyme

// function(){
//     alert('Alerte exécuté par une function anonyme');
// }

// let alerte = function(){
//     alert('Alerte exécuté par une function anonyme');
// }
// toujours appelé les fonctions anonymes
// alerte()

// var alerte2 = function(){
//     alert('Alerte exécuté par une function anonyme');
// }

(function(){
    alert('Alerte !!! seconde fonction exécuté d\'une function anonyme');
})();
// Les fonctions auto-invoquées (self-invoked functions) vont être des fonctions qui vont s'appeler elles-mêmes. Pour créer une fonction auto-invoquée à partir d'une fonction, il va tout simplement falloir rajouter un couple de parenthèses autour de la fonction et un second  après 

// on appelle toutes nos fonctions 


// alerte2()


let paragraphe1 = document.getElementById('p1');

let paragraphe2 = document.getElementById('p2');
paragraphe1.addEventListener('click', function(){
    alert('Eh ! Tu as bien cliqué sur le paragraph');
});

paragraphe2.addEventListener('click',function(){
    nbr = prompt('insert a number');
    alert('Voice le nombre ' + nbr +  'que vous avez rentrez ' );
} );

// récursive functions

function decompte(t){
    if(t > 10){
        document.getElementById('p3').innerHTML += t + '<br>';
        return decompte(t - 1)
    }else{
        return t
    }// fin de la 
}   

decompte(15);