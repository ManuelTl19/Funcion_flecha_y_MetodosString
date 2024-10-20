/**17. Contar el número de palabras en una cadena
 * Crea una función que cuente cuántas palabras hay en una cadena usando split() y
length.
Ejemplo: "Aprender JavaScript es divertido" → 4
 */


let cadena=prompt("Escribe una cadena: ");
const contar=cadena=> cadena.split(" ").length;

console.log(contar(cadena));