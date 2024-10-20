/**9. Convertir la primera letra a mayúscula
 * Crea una función que convierta la primera letra de una cadena en mayúscula.
Ejemplo: "javascript" → "Javascript"
 */

let cadena= prompt("Ingresa una cadena: ")

const PMayuscula= cadena => cadena.charAt(0).toUpperCase()+ cadena.slice(1);
console.log(PMayuscula(cadena));