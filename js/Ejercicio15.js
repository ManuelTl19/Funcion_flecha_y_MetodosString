/**15. Obtener el último carácter de una cadena
 * Crea una función que devuelva el último carácter de una cadena sin usar length.
Ejemplo: "Hola" → "a"
 */
let cadena= prompt("Escribe una cadena de caracteres: \n")

const ultimaLetra= cadena => cadena.slice(-1);

console.log(`El ultimo caracter de la cadena ${cadena} Es: ${ultimaLetra(cadena)}`);
