// js pour la condition if

let x = 4;
let y = 0;

if (x> 1){// la condition ou le test est évalué à : "true"
    alert('x contient une valeur supérieur à 1');// si c'est "true" on éxécute ce code. Si c'est "false", on n'éxécute pas l'alerte

}

if(x==y) {// test si x et y contiennent la même valeur. La réponse  estt non
    alert('x et y contiennent la même valeur');
}

if(y){// l'alerte ne s'affiche pas car la valeur de y contient 0, qui est une des valeurs qui renvoit false
    alert('la valeur de y est évalué à: "true');// puis que c'est faux on n'exécute pas
}

// Inversion du test logique > vérifiér que c'est faut
if((x>1) == false ){// au lieu de vérifier que le test est VRAI, on vérifie qu'il est FAUX
    alert('x contient une valeur inférieur à 1 ');
}

if((x==y) == false){// test si x et y contiennent la même valeur. La réponse  est non
    alert('x et y contiennent la même valeur');
}