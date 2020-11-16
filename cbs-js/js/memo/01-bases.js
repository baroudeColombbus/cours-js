// Les bases 


// NOM RESERVE
// break
// case
// catch
// continue
// debugger
// default
// delete
// do
// else
// finally
// for
// function
// if
// in
// instanceof
// new
// return
// switch
// this
// throw
// try
// typeof
// var
// void
// while
// with

// NOM DE VARIABLES NON DISPONIBLES
// Abstract     arguments   wait*       boolean
// break        byte        case        catch
// Char         class*      const       continue
// debugger    default      delete      do
// double       else        enum        eval
// export**    extends      false       final
// finally      float       for         function
// goto         if          implements  import*
// let          long        native      new 
// in           instanceof  int         interface
// null         private     protected   private
// public       return      short       static
// super*       switch      synchronized this
// throw        throws      transceint   true
// try          typeof      var          void
// volatile     while       with         yield
console.log(4)

// Il exist les même priorité de calculs qu'en maths

// opérations de base

console.log(1-3);
console.log(1 +  3);
console.log(1 * 3);
console.log(20 / 5);


console.log(2+3*4);// la multiplication est priorité
console.log((2+3)*4);// en entrepasse la priorité de la multiplication en utilisant les parenthèse

// CONCATENATION

console.log('conca' + 'ténation')

// RACCOURCI POUR INCREMENTATION OU DECREMENTATION AVEC VALEUR

let point = 50;
console.log('Consultation des points avant incrémentation/valeur 25 ', point)
point +=  25;

console.log('Consultation des points après incrémentation/valeur 25 ', point)

let score = 350;
console.log('Consultation de score avant incrémentation/valeur 7 ');
score -= 7
console.log('Consultation de score après incrémentation/valeur 7 ');
