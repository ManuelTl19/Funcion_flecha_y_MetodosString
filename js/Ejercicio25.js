/**25. Remover caracteres especiales de una cadena
 * Crea una función que elimine todos los caracteres especiales (como @, #, !) de una
cadena.
Ejemplo: "Hola@mundo!" → "Holamundo"

 */

const removerCaracter =cadena=> {
    return cadena.replace(/[^a-zA-Z0-9\s]/g, '');
};

var palabra = "Hola@ mundo #$%^&";
console.log(removerCaracter(palabra));