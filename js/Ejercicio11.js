/**11. Revertir una cadena
 * Crea una función que tome una cadena y la devuelva invertida.
Ejemplo: "Hola" → "aloH"
 */


let cadena = prompt("Escribe una cadena de texto: ")
const Invertir= cadena => cadena. split("").reverse().join("");
console.log("La forma invertida de la palabra ingresada es: ", Invertir(cadena));
