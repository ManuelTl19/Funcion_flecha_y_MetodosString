/**12. Comprobar si una palabra es un palíndromo
 * Escribe una función que determine si una palabra es un palíndromo (se lee igual al
revés).
Ejemplo: "ana" → true
 */


let palabra= prompt("Ingresa una palabra: ");
const InvertirPalabra= palabra => {
    PalabraInvertida=palabra.split("").reverse().join("");
    if (palabra===PalabraInvertida){
        console.log("La palabra: ", palabra, "Es un palindromo");
    } else{
        console.log("La palabra: ", palabra, "No es un palindromo");
    }
}

InvertirPalabra(palabra);