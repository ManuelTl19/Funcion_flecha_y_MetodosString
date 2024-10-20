/**27. Convertir una cadena a snake_case
 * Crea una función que convierta una cadena a formato snake_case.
Ejemplo: "Hola Mundo" → "hola_mundo"
 */

const Snak_case =cadena => {
    return cadena.toLowerCase().replaceAll(" ", "_");
  };

let palabra= prompt("Escribe una cadena de texto")

 console.log(Snak_case(palabra));