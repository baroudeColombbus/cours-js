// page portée des valeurs

// deux variables

let x = 5; 
var y = 10;

function portee1(){ //  1ére fonction avec des valeur globales
    document.getElementById('p1').innerHTML = 'Depuis portée1() : x = ' + x + ' y = ' + y
}

function portee2(){
    let a = 1;
    let b = 2;
    document.getElementById('p2').innerHTML = 'Depuis portée1() : a = ' + a + ' b = ' + b
}

function portee3(){// une 3éme fonction avec de nouveau locales qui portes le même nom que dans les globales
    let x = 20; // bien qu'elles portent  le même nom que dans les globales  ce sont deux entités différentes
    let y = 40; //la fonction va donc utilisé les locales
    document.getElementById('p3').innerHTML = 'Depuis portée1() : a = ' + x + ' b = ' + y
}

portee2()
portee1()// on appelle la function
portee3()
// on tente d'afficher les globales 
document.getElementById('p4').innerHTML('Depuis l\'espace globale : x ' + x + ' y = ' + y);

// on tente d'afficher les locales 
// <em>Ce mode n\'est pas dans une fonction et le message dans la console généré par cette ligne est normale<em>
document.getElementById('p5').innerHTML(' Depuis l\'espace locale : a ' + a + ' b = ' + b);
