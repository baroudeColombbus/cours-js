// do while 


let  nombreSaisi;
// do{
//     nombreSaisi = Number(prompt('Vous devez saisir un nombre '))
//     document.getElementById('p1').innerHTML = ' Vous avez bien saisi un nnombre : le nombre est  ' + nombreSaisi ;

// } while(!isNaN(nombreSaisi) || nombreSaisi ===0){ 
//     document.getElementById('p2').innerHTML = ' Votre nombre est ' +  nbrAjoute ;
// }

do{
    nombreSaisi = Number(prompt('Vous devez saisir un nombre '))
    nbrAjoute = nombreSaisi;
} while((isNaN(nombreSaisi)== true) || nombreSaisi === 0);
    document.getElementById('p1').innerHTML = ' Vous avez bien saisi ' +   nombreSaisi + ' ce n\'est pas un nombre';


    // correction avec un if else
    let utilisateurPrompt = prompt('avec if else');
    if (utilisateurPrompt.includes('a') || utilisateurPrompt.includes('b') || utilisateurPrompt.includes('c') || utilisateurPrompt.includes('d') || utilisateurPrompt.includes('e') || utilisateurPrompt.includes('f') || utilisateurPrompt.includes('g') || utilisateurPrompt.includes('h') || utilisateurPrompt.includes('i') || utilisateurPrompt.includes('j') || utilisateurPrompt.includes('k') || utilisateurPrompt.includes('l') || utilisateurPrompt.includes('m') || utilisateurPrompt.includes('n') || utilisateurPrompt.includes('o') || utilisateurPrompt.includes('p') || utilisateurPrompt.includes('q') || utilisateurPrompt.includes('r') || utilisateurPrompt.includes('s') || utilisateurPrompt.includes('t') || utilisateurPrompt.includes('u') || utilisateurPrompt.includes('v') || utilisateurPrompt.includes('w') || utilisateurPrompt.includes('x') || utilisateurPrompt.includes('y') || utilisateurPrompt.includes('z')) {
        document.write('Incorrect');
    } else if (utilisateurPrompt.includes('.')) {
        utilisateurPrompt = utilisateurPrompt.replace('.', ',');
        document.write('Votre nombre est : ' + utilisateurPrompt);
    } else {
       document.write('Votre nombre est : ' + utilisateurPrompt);
    }





























// var x = 1;
// var y = 0;
// var z = 0;
// document.getElementById("result").innerHTML = "List of numbers : ";
// do
// {
// z = x %  2;
// if (z === 0)
// {
// var newParagraph1 = document.createElement("p");
// var newText1 = document.createTextNode(x);
// newParagraph1.appendChild(newText1);
// document.body.appendChild(newParagraph1);
// y=y+x;
// }
// x++;
// }
// while (x <=10 );
// var newParagraph1 = document.createElement("p");
// var newText1 = document.createTextNode("The sum of even numbers between 0 to 10 is : " + y);
// newParagraph1.appendChild(newText1);
// document.body.appendChild(newParagraph1);
