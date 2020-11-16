// page exo tva

let prixHorsTaxe = parseFloat(prompt('prix HT '));
let prixToutesTaxesComprises =  prixHorsTaxe *1.20;
//alert('prix '+ prixHorsTaxe +' € HT'+ ' pour un total de '+ prixToutesTaxesComprises + ' € TTC');
document.getElementById('p1').innerHTML = '<p class="stabilo"; style"font-size=bold;">prix '+ prixHorsTaxe +' € HT'+ ' pour un total de '+ prixToutesTaxesComprises + ' € TTC</p';