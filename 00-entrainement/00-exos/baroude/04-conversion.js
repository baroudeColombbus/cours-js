// exo page conversion [°F]=[°C]*9/5+32. (fTemp - 32) * 5 / 9;   
// temperature en Celcius 
let temperatureCelcius = parseFloat(prompt('Rentrez une température en Celcius '));
let temperatureFahreinheit = temperatureCelcius*9/5+32; // Ici on converti de celcius en Fahreinheit 

// prompt pour la conversion du Fahreinheit en Celcius
let temperatureEnFahreinheit =parseFloat(prompt('Rentrez une température en Fahreinheit '));
let conversFromFahreinToCelcius = (temperatureEnFahreinheit-32)*5/9;// Ici on calcule la conversion de FromFahrein en Celcius

// p1 conversion  de la tempétature de celcius en Fahreineit
document.getElementById('p1').innerHTML = 'Pour une température de ' + temperatureCelcius + '°C' + ' on aura (conversion) une température de ' + temperatureFahreinheit +' °F';

// p2 conversion  de la tempétature de en Fahreineit en Celcius 
document.getElementById('p2').innerHTML = 'Pour une température de ' + temperatureEnFahreinheit + '°F' + ' on aura (conversion) une température de ' + conversFromFahreinToCelcius +' °C';

// console.log conversion temperature de celcius en Fahreinheit
console.log(temperatureFahreinheit);
// console.log conversion temperature de Fahreinheit à celcius 
console.log(conversFromFahreinToCelcius);


document.getElementById('d1').innerHTML ='defd' + conversFromFahreinToCelcius;
//document.getElementById('d2').innerHTML =
// document.getElementById('d3').innerHTML =
// document.getElementById('d4').innerHTML =


