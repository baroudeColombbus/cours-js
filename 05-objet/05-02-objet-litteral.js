// page objet littéral

let victor = {
    nom : ['Victor','Hugo'],
    age : 2,
    email : 'tothugo@gmail.com',
    // bonjour est une méthode de l'objet victor
    bonjour: function(){
        alert('Bonjour je suis ' + this.nom[0] + 'j\'ai '+ this.age + ' ans');
    }// fin de l'alerte

}// fin de l'objet

// on appelle la fonction contenu dans l'objet
//victor.bonjour()
victor.age = 80;

document.getElementById('p1').innerHTML = 'Nom : ' + victor.nom;
document.getElementById('p2').innerHTML = 'Age : ' + victor.age + ' ans';
document.getElementById('p3').innerHTML = 'Nouvelle âge : ' + victor.age + ' ans';

victor.metier = 'écrivain, dramaturge et poète';

victor.bonjour2 = function(){
    alert('Bonjour j\ai maintenant ' + this.age + 'ans, je suis ' + this.metier + ' célèbre dans le monde entier')
}

victor.bonjour2();
// id = p4.
document.getElementById('p4').innerHTML = 'Bonjour je suis ' + victor.nom[0] + ' ' + victor.nom[1]+ ' .';
