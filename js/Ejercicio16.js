/**16. Convertir una cadena en un array de palabras
 * Escribe una función que divida una cadena en un array de palabras usando split().
Ejemplo: "Hola mundo" → ["Hola", "mundo"]
 */


let cadena = prompt("Éscribe una cadena: ")
const arreglo= cadena => cadena.split(" ");
console.log(arreglo(cadena));