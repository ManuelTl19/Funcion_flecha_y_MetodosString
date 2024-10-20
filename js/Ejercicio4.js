/**4. Comprobar si una cadena contiene una palabra
 * Crea una función que verifique si una palabra específica está contenida dentro de
una cadena usando includes().
Ejemplo: "JavaScript es genial", "genial" → true
 */
let cadena="Hola mi nombre es Jose Manuel"
let palabra=prompt(`La cadena de texto "${cadena}". Contiene la palabra...`);
const longitud= (texto,valor) => texto.includes(valor);
console.log(`Eso es ${longitud(cadena, palabra)}`);