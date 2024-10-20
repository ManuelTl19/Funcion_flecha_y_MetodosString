/** 18. Eliminar todas las vocales de una cadena
 * Escribe una función que elimine todas las vocales de una cadena.
Ejemplo: "javascript" → "jvscrpt"

 */

let cadena = prompt("Escribe una cadena: ");
const SnVocales = cadena => cadena.replace(/[aeiouAEIOU]/g, "");

console.log(SnVocales(cadena));