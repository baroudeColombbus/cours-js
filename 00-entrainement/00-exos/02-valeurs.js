// page exo valeurs

var a = 2;
document.getElementById('a').innerHTML = 'var a = 2;' + a;
console.log('var a = 2; = ',a)
a = a-1;
document.getElementById('a').innerHTML = 'a = a-1; = ' + a;
console.log('a = a-1; =',a)

aIncrement = a++;
document.getElementById('a_plus').innerHTML = 'a++; nous donnes 1 + 1 = ' + aIncrement;
console.log('\a++; =',aIncrement)

var b = 8;
document.getElementById('var_b').innerHTML = 'var b = 8; nous donnes b = ' + b ;
console.log(' var b = 8; =', b)

bIncrement = b+= 2;
document.getElementById('b_plus').innerHTML = ' b+= 2; On ajoute 2 à puis on assigne la valeur à b => ' + bIncrement;
console.log(' b+=2 =',bIncrement)
var c = a + b*b;
document.getElementById('var_c').innerHTML = 'var c = a + b*b; nous donnes c = ' + c;
console.log('var c = a + b*b = ',c)
var d = a*b +b;
document.getElementById('var_d').innerHTML = 'var d = a*b +b; nous donnes d = ' + d;
console.log(' var d = a*b +b; = ', d)
var e = a*(b+b);
document.getElementById('var_e').innerHTML = 'var e = a*(b+b); nous donnes e = ' + e;

console.log(' var e = a*(b+b); =',e)
var f = a* b/ a;
document.getElementById('var_f').innerHTML = 'var f = a* b/ a; nous donnes f = ' + f;
console.log(' var f = a* b/ a; = ',f)

var g = b/a*a;
document.getElementById('var_g').innerHTML = 'var g = b/a*a; nous donnes g = ' + g

console.log(' var g = b/a*a = ',g)