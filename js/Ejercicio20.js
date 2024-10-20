/**20. Comprobar si una cadena termina con una palabra
 * Escribe una función que verifique si una cadena termina con una palabra específica
usando endsWith().
Ejemplo: "JavaScript es genial", "genial" → true
 */

let cadena="Esta es una cadena  para el ejercicio13";
let palabra= prompt(`Escribe cualquier palabra de la cadena "${cadena}"`)

const termina= (cadena,palabra)=> {
    if (cadena.endsWith(palabra)){
        console.log(`La cadena "${cadena}", si termina con la palabra "${palabra}"`);
    } else {
        console.log(`La cadena "${cadena}", no termina con la palabra "${palabra}"`);
    }
}

termina(cadena, palabra);