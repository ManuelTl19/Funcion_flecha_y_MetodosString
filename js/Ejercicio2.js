/*2. Convertir a mayúsculas
Crea una función que convierta una cadena de texto en mayúsculas usando el
método toUpperCase().
Ejemplo: "Hola" → "HOLA"
*/

let palabra=prompt("Escribe una cadena: ");
const longitud= texto=> texto.toUpperCase();
console.log(`La palabra en mayuscula es ${longitud(palabra)}`);