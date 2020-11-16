// let portée de bloc - var portée élargie

function porteeNew(){
    let xLet = 1;
    var yVar = 2;
    if(true){
        let xLet = 500;// let n'aura pas de portée au dela de ce bloc de code
        var yVar = 100; // var aura une portée au dela de bloc de code de ce "if()"
        document.getElementById('p1').innerHTML = 'la variable let"xLet" dans if ' + xLet;
        document.getElementById('p2').innerHTML = 'la variable var "yVar" dans if ' + yVar;
       // console.log(xLet)

    } // fin du if
    document.getElementById('p3').innerHTML = 'la variable let"xLet" hors du if ' + xLet;
    document.getElementById('p4').innerHTML = 'la variable var "yVar" hors du if  ' + yVar;
    // yVar affichera la dernière valeur déclarée ( var yVar=100;) car var à une portéeélargie
} //  fin de la fonction

porteeNew()
