// page exo valeurs

var a = 2;
document.getElementById('a').innerHTML = 'var a = 2;' + a;
console.log('var a = 2; = ',a)
a = a-1;
console.log('a = a-1; =',a)
aIncrement = a++;
console.log('\a++; =',aIncrement)
var b = 8;
console.log(' var b = 8; =',b)
bIncrement = b+= 2;
console.log(' b+=2 =',bIncrement)
var c = a + b*b;
console.log('var c = a + b*b = ',c)
var d = a*b +b;
console.log(' var d = a*b +b; = ', d)
var e = a*(b+b);
console.log(' var e = a*(b+b); =',e)
var f = a* b/ a;
console.log(' var f = a* b/ a; = ',f)
var g = b/a*a
console.log(' var g = b/a*a = ',g)