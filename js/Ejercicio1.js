/*
1. Obtener la longitud de una cadena
Escribe una función que reciba una cadena de texto y devuelva su longitud.
Ejemplo: "Hola" → 4
*/

let palabra=prompt("Escribe una cadena: ");
const longitud= texto=> texto.length;
console.log(`La cadena ingresada tienen ${longitud(palabra)} de longitud`);