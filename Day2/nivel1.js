/*
💻 Día 2: Ejercicios
Ejercicio: Nivel 1
*/

//1.Declare una variable llamada desafío y asígnele un valor inicial '30 días de JavaScript' .
var desafio = '30 dias de JavaScript';

//2.Imprima la cadena en la consola del navegador usando console.log()
console.log(desafio);

//3.Imprima la longitud de la cadena en la consola del navegador usando console.log()
console.log(desafio.length)

//4.Cambie todos los caracteres de la cadena a letras mayúsculas usando el método toUpperCase()
desafio.toUpperCase()

//5.Cambie todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase()
desafio.toLowerCase()

//6.Cortar (rebanar) la primera palabra de la cadena usando el método substr() o substring()
desafio.substring(2)

//7.Extraiga la frase Days Of JavaScript de 30 Days Of JavaScript .
desafio.substring(2)

//8.Comprueba si la cadena contiene una palabra Script usando el método features()

(desafio.includes("Script")) ? console.log("La contiene") : console.log("NO la contiene")

//9.Divida la cadena en una matriz usando el método split()
desafio.split(" ")

//10.Divida la cadena en una matriz usando el método split()
desafio.split(" ")

//11.'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' divide la cadena en la coma y la cambia a una matriz.

var cadena = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

cadena.split(",");

//12. Cambie 30 días de JavaScript a 30 días de Python usando el método replace() .
desafio.replace("JavaScript","Python")

//13.¿Cuál es el carácter en el índice 15 de la cadena "30 días de JavaScript"? Usa el método charAt() .
desafio.charAt(15)

//14.¿Cuál es el código de carácter de J en la cadena '30 días de JavaScript' usando charCodeAt()?
desafio.charCodeAt("J")

//15.Utilice indexOf para determinar la posición de la primera aparición de a en 30 días de JavaScript
desafio.indexOf("a")

//16.Utilice lastIndexOf para determinar la posición de la última aparición de a en 30 días de JavaScript.
desafio.lastIndexOf("a")

//17.Utilice indexOf para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración: 
// 'No puedes terminar una oración con porque porque porque es una conjunción'
var oracion = 'No puedes terminar una oración con porque porque porque es una conjunción';
oracion.indexOf("porque")

//18.Utilice lastIndexOf para encontrar la posición de la última aparición de la palabra porque en la siguiente oración: 
// 'No puedes terminar una oración con porque porque porque es una conjunción'
var oracion = 'No puedes terminar una oración con porque porque porque es una conjunción';
oracion.lastIndexOf("porque")

//19.Utilice la búsqueda para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración: 
// 'No puedes terminar una oración con porque porque porque es una conjunción'
var oracion = "No puedes terminar una oración con porque porque porque es una conjunción";
oracion.search("porque");

//20.Utilice trim() para eliminar cualquier espacio en blanco final al principio y al final de una cadena, por ejemplo, "30 días de JavaScript".
var desafio = '30 dias de JavaScript';
desafio.trim();

//21.Utilice el método startsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
var desafio = '30 dias de JavaScript';
desafio.startsWith("30")

//22.Utilice el método endsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
var desafio = '30 dias de JavaScript';
desafio.endsWith("Script")

//23.Utilice el método match() para encontrar todas las a en 30 días de JavaScript
var desafio = '30 dias de JavaScript';
desafio.match(/a/g);

//24.Utilice concat() y combine '30 días de' y 'JavaScript' en una sola cadena, '30 días de JavaScript'

var txt1 = "30 días de";
var txt2 = "JavaScript";

var desafio = txt1.concat(txt2);
console.log(desafio)

//25.Utilice el método repeat() para imprimir 30 días de JavaScript 2 veces
var desafio = '30 dias de JavaScript';
desafio.repeat(2)