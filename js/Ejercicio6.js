/**6. Repetir una cadena
 * Crea una función que repita una cadena un número específico de veces usando
repeat().
Ejemplo: "Ho", 3 → "HoHoHo"
 */


let palabra= prompt("Ingresa palabra a repetir: ");
let numVeces= parseInt(prompt("Ingresa numero de veces que se va a repetir:"))

const repetir= (palabra, numVeces)=> palabra.repeat(numVeces);

console.log(repetir(palabra+" ", numVeces));