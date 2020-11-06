// JS POUR FOR LOOP

//alert('coucou')

for(let i=0; i<10; i++){// for (1- initialisation de la variable, 2- test ou condition de sortie, 3- incrémentation)
    document.getElementById('p1').innerHTML += 'i contient la valeur ' + i + ' qui est incrémenté à chaque passage de la boucle. <br>'       
}

for (let i = 0; i < 18; i++) {// for (1- initialisation de la variable 2- test ou condition de sortie 3- incrémentation)
    document.getElementById('tb1').innerHTML += '<tr><td>passage n° ' + (i + 1) + ' de la boucle</td><td>i contient la valeur ' + i + ' qui est incrémenté à chaque passage de la boucle.</td></tr>';
}