// joursuivant avec un if... else... if....

let aujourdhui = prompt('1- Quel jour sommes-nous ? (avec un if )');

var d = new Date();
    var jourDeLaSemaine = new Array(7);
    jourDeLaSemaine[0] = "dimanche";
    jourDeLaSemaine[1] = "lundi";
    jourDeLaSemaine[2] = "mardi";
    jourDeLaSemaine[3] = "mercredi";
    jourDeLaSemaine[4] = "jeudi";
    jourDeLaSemaine[5] = "vendredi";
    jourDeLaSemaine[6] = "samedi";
  
    var n = jourDeLaSemaine[d.getDay()];

    if(aujourdhui == n ){
        document.getElementById('p3').innerHTML = 'touché ! nous sommes bien ' + n + ' bonne change pour demain';
    }else if (aujourdhui != n){
        document.getElementById('p3').innerHTML = 'Désolé nous ne sommes pas ' + aujourdhui + ' verifié votre calendrier';

    }else{
        document.getElementById('p3').innerHTML = 'Désolé jour érroné '
    }
    

    // joursuivant avec un if... else... if....

    switch(aujourdhui){
        case 'lundi':
            document.getElementById('p4').innerHTML = 'vous avez choisi le lundi et nous sommes ' + n;
            break;
        case 'mardi':
            document.getElementById('p5').innerHTML = 'vous avez choisi le mardi et nous sommes ' + n;
            break;
        case 'mercredi':
            document.getElementById('p6').innerHTML = 'vous avez choisi le mercredi et nous sommes ' + n;
            break;
        case 'jeudi':
            document.getElementById('p7').innerHTML = 'vous avez choisi le jeudi et nous sommes ' + n;
        //document.write('<p>vous avez choisi le jeudi</p>');
        break;
        case 'vendredi':
            document.getElementById('p7').innerHTML = 'vous avez choisi le vendredi et nous sommes ' + n;
            break;
        case 'samedi':
            document.getElementById('p8').innerHTML = 'vous avez choisi le samedi et nous sommes ' + n;
            break;
        case 'dimanche':
            document.getElementById('p9').innerHTML = 'vous avez choisi le jeudi et nous sommes ' + n;
        default :
        document.write('<p>Désolé !la jour choisi n\'existe pas</p>')
    }
    
    // aujourdhui

    if(aujourdhui == 'lundi'){
        document.getElementById('p11').innerHTML = 'Demain nous serons lundi';
    }else if(aujourdhui == 'mardi'){
        document.getElementById('p11').innerHTML = 'Demain nous serons mardi';
    }else if(aujourdhui == 'mercredi'){
        document.getElementById('p11').innerHTML = 'Demain nous serons jeudi';
    }else if(aujourdhui == 'jeudi'){
        document.getElementById('p11').innerHTML = 'Demain nous serons vendredi';
    }else if(aujourdhui == 'vendredi'){
        document.getElementById('p11').innerHTML = 'Demain nous serons samedi';
    }else if(aujourdhui == 'samedi'){
            document.getElementById('p11').innerHTML = 'Demain nous serons dimanche';
    }else if(aujourdhui == 'dimanche'){
        document.getElementById('p11').innerHTML = 'Demain nous serons lundi';
    } 














































// function myFunction() {
//     var d = new Date();
//     var weekday = new Array(7);
//     weekday[0] = "dimanche";
//     weekday[1] = "lundi";
//     weekday[2] = "mardi";
//     weekday[3] = "mercredi";
//     weekday[4] = "jeudi";
//     weekday[5] = "vendredi";
//     weekday[6] = "samedi";
  
//     var n = weekday[d.getDay()];
//     document.getElementById('p2').innerHTML = n;
// }
