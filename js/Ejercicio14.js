/**14. Obtener el carácter en una posición
 * Escribe una función que devuelva el carácter en una posición específica de una
cadena usando charAt().
Ejemplo: "JavaScript", 0 → "J"
*/

let cadena="Esta es una cadena";
let letra=parseInt(prompt(`Escribe una letra que es encuente en esta cadena " ${cadena} "y te devolvera su posicion`));

const buscarPalabra=(cadena, letra)=> cadena.charAt(letra);
console.log(`La letra en esa posicion es ${buscarPalabra(cadena, letra)}`);