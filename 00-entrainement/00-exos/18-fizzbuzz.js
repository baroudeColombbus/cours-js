// 
// let nbr = 0;
// for(i=0; i <= 100; i++){
//     //console.log(i)
//     if(i% 3 === 0 && i% 5 === 0 ){
//         console.log(i);
//         console.log("FizzBuzz");
//     } else if(i % 3 === 0) {
//         console.log('Fizz');   
//     } else if(i % 5 === 0){
//         console.log('Buzz')
//     } else {
//         console.log(i)
//     }
// }


for(i=1; i <= 100; i++){
    //console.log(i)
    if(i% 3 === 0){
        console.log(i,"Fizz");
    } else if(i% 5 === 0 ) {
        console.log(i,"Buzzz");
    } else if((i% 3 === 0) && (i% 5 === 0 )){
        console.log("FizzBuzz");
    }
}

for (var nombre = 1; nombre <=100; nombre++) {
    if ((nombre % 3 === 0) && (nombre % 5 === 0)) {// le nombre est divisible par 3 ET 5 
        console.log('FizzBuzzzzz'); 
    } else if (nombre % 3 === 0) {
        console.log('Fizzz');
    } else if (nombre % 5 === 0) {
        console.log('Buzzzz'); }  
    else {
        console.log(nombre);
        } //fin if else
    }//fin for


    console.log('seconde version >>>>>');
for (var nombre = 1; nombre <=100; nombre++) {
    if ((nombre % 3 === 0) && (nombre % 5 === 0)) // le nombre est divisible par 3 ET 5 
        console.log('FizzBuzzzzz'); 
    else if (nombre % 3 === 0) 
        console.log('Fizzz');
    else if (nombre % 5 === 0) 
        console.log('Buzzzz');  
    else 
        console.log(nombre);
    }//fin for



// for(var i = 0; i <= 100; i++){
//    if(i % 15 === 0){ // modulo de 15 qui équivaut à un modulo pour 3 et 5
//         document.getElementById('p1').innerHTML += 'FizzBuzz <br>';
//     }else if(i % 3 === 0){
//         document.getElementById('p1').innerHTML += 'FIzz <br>';
//     }else  if(i % 5 === 0){
//         document.getElementById('p1').innerHTML += 'Buzz <br>';
//     }else{
//         document.getElementById('p1').innerHTML += i + '<br>';
//     }
// } // fin de la boucle for