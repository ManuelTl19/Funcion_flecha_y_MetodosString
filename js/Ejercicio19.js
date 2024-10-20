/**19. Comprobar si una cadena comienza con una palabra

 * Crea una función que verifique si una cadena comienza con una palabra específica
usando startsWith().
Ejemplo: "JavaScript es genial", "JavaScript" → true
 */

let cadena="Esta es una cadena  para el ejercicio13";
let palabra= prompt("Escribe una  palabra: ")

const comienza= (cadena,palabra)=> {
    if (cadena.startsWith(palabra)){
        console.log(`La cadena "${cadena}", si comienza con la palabra "${palabra}"`);
    } else {
        console.log(`La cadena "${cadena}", no comienza con la palabra "${palabra}"`);
    }
}

comienza(cadena, palabra);