/**
 * Escribe una función que encuentre la palabra más larga en una cadena.
Ejemplo: "Aprender JavaScript es emocionante" → "emocionante"
 */

const palabraMasLarga=(cadena) =>{
    const palabras = cadena.split(' ');
    let palabraMasLarga = '';
    for (const palabra of palabras) {
      if (palabra.length > palabraMasLarga.length) {
        palabraMasLarga = palabra;
      }
    }
    return palabraMasLarga;
  }
  console.log(palabraMasLarga("Este es un texto donde la palabra mas larga es Trabalenguas"));