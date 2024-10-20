/**8. Extraer una parte de una cadena
 * Escribe una función que devuelva una parte de una cadena usando substring().
Ejemplo: "JavaScript", 4, 10 → "Script"
 */

let cadena="Esta es una cadena para el ejercicio 8."
let inicio= prompt("Ingresa el valor de inicio");
let final= prompt("Ingresa el valor final: ");

const Extraer= (cadena, inicio, final)=> cadena.substring(inicio, final);
console.log(Extraer(cadena, inicio, final));