/**5. Reemplazar una palabra en una cadena
 * Escribe una función que reemplace una palabra específica en una cadena con otra
palabra usando replace().
Ejemplo: "Hola mundo", "mundo", "amigo" → "Hola amigo"
 */

let cadena="Hola mi nombre es Jose Manuel"
let palabra=prompt(`Dada la cadena de texto "${cadena}". Que palabra deseas cambiar?`);
let palabra2=prompt("Que palabra deseas poner?")
const longitud= (texto,valor, valor2) => texto.replace(valor, valor2);
console.log(`Eso es ${longitud(cadena, palabra, palabra2)}`);