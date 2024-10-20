/**7. Eliminar espacios al inicio y al final
 * Crea una función que elimine los espacios en blanco de los extremos de una cadena
usando trim().
Ejemplo: " Hola mundo " → "Hola mundo"
 */

let cadena= " Hola Mundo ";
const EliminarEspacios= cadena => cadena.trim();

console.log(EliminarEspacios(cadena));