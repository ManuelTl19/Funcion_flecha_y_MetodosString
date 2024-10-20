/**10. Contar ocurrencias de una letra en una cadena
 * Escribe una función que cuente cuántas veces aparece una letra específica en una
cadena.
Ejemplo: "javascript", "a" → 2
 */

let cadena= "Aqui existe una cadena de texto";
let letra= prompt(`Escribe la letra que quieres contar dentro de la cadena "${cadena}"`);

const contarLetra= (cadena, letra)=> cadena.split(letra).length-1;
console.log("La letra: "+ letra+ " aparece "+ contarLetra(cadena, letra)+ " veces. ");

