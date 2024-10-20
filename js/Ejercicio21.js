/**21. Reemplazar todas las ocurrencias de una palabra
 * Crea una función que reemplace todas las ocurrencias de una palabra en una
cadena usando replaceAll().
Ejemplo: "hola hola", "hola", "adiós" → "adiós adiós"
 */

let cadena = "Hola mundo, Hola mundo";
let Pal_Anterior= prompt(`Que palabra quieres remplazar de la siguiente cadena: "${cadena}"`);
let Rem_Palabra= prompt("por que palabra lo quieres remplazar?");
const remplazar= (cadena, Pal_Anterior, Rem_Palabra)=>{
    return cadena.replaceAll(Pal_Anterior, Rem_Palabra);
}

console.log(remplazar(cadena, Pal_Anterior, Rem_Palabra));