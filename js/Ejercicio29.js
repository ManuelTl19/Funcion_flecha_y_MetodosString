/**29. Comprimir una cadena eliminando letras consecutivas repetidas
 * Crea una función que elimine las letras consecutivas repetidas en una cadena.
Ejemplo: "aabbccdde" → "abcde"
 */

const comprimirLaCadena =cadena=> {
    let cadenaComprimida = '';
    let letraactual = '';
    for (let i = 0; i < cadena.length; i++) {
      if (cadena[i] !== letraactual) {
        cadenaComprimida += cadena[i];
        letraactual = cadena[i];
      }
    }
    return cadenaComprimida;
  }
  console.log(comprimirLaCadena("aabbcccdeffff"));