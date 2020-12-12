
// triangle bis



// for(i=0; i <=13; i++){
//     console.log("#".repeat(i));
// }


// var txt = "";
// for(i=1;i<=7;i++){
//   txt = "";
//   for(j=i;j<7;j++){
//     txt += " ";
//   }
//   for(k=0;k<(i*2)-1;k++){
//     txt += "*";
//   }
//   console.log(txt);
// }


// JS pour la page exercice triangle bis (sapin) 
              //////////////////////////////
             //  Inscrit dans la console //
            //////////////////////////////
            let nbrLigne = 10;
            for (let ligne = 0; ligne < nbrLigne; ligne++) {
                let etoiles = ''; //Les variable sont vides
                let espaces = ''; //Les variable sont vides
                //1 - FOR POUR LES ESPACE AU DEBUT DE LA LIGNE//
                //sur la 1ère (qui aura une étoile) je place 6 espace à gauche de l'étoile, 1ère opération le nbr de ligne - l'étoile placée
                for(let col = 0; col < nbrLigne - (ligne + 1); col++) {
                    espaces += ' ';
                }
                //2 - FOR POUR LES ETOILES
                for (let col = 0; col <2 * ligne + 1; col++) {
                    etoiles += '*';
                }
                console.log(espaces + etoiles);
            }