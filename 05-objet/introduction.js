
// objet

let utilisateur = {
    // Nom age et email sont des propriétés de l'objet utilisateur
    nom : ['Victor', 'Marie', 'Hugo'], //Nous avons des propiété qui sont dans un tableau "array"
    age : 2,
    email : 'totor@hugo.com',
    adresse: '3 Rue du Général Baroude',
    //une méthode un peu comme une fonction
    bonjour: function() {
        alert('J\'ai ' + this.age + ' ans, et mon prénom est '+ this.nom[2] + '.' )// indice 2 pour hugo 
    },

    nomComplet: function() {
        alert(' le poete '+this.nom[0]+ ' '+ this.nom[1]+ ' ' + this.nom[2] +' habite à l\'adresse suivante : '+ this.adresse )// indice 2 pour hugo 
    }


    
}

utilisateur.nomComplet();
utilisateur.bonjour();
console.info(typeof (utilisateur));
console.info(typeof (utilisateur));




