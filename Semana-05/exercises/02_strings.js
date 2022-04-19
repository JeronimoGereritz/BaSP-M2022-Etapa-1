var sentencia = "hola, todo bien?";

console.log(sentencia.toUpperCase());

/******** */

var sentencia2 = "Description";

console.log(sentencia2.substring(0,5));

/******** */

var sentencia3 = "Description";

console.log(sentencia3.substring(8));

/******** */

var sentencia4 = "wonderland";
var Cap = sentencia4.charAt(0).toUpperCase() + sentencia4.substring(1);

console.log(Cap);

/******** */

var sentencia5 = "wonde rland";

var sentencia5space = " ";
var sentencia5full = sentencia5.indexOf(sentencia5space);

console.log(sentencia5full);

/******* */

var sentencia6 = "wonderland territories";
var Cap = sentencia6.charAt(0).toUpperCase() + sentencia6.substring(1);
var pEspacio = sentencia6.indexOf(" ")
Cap = Cap.substring(0, pEspacio + 1) + Cap.charAt(pEspacio + 1).toUpperCase() + Cap.substring(pEspacio + 2);

console.log(Cap)


