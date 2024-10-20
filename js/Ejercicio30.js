/**30. Contar la frecuencia de caracteres en una cadena
 * Escribe una función que cuente la frecuencia de cada carácter en una cadena y
devuelva un objeto con los resultados.
Ejemplo: "abbccc" → {a: 1, b: 2, c: 3}*/

  const resultado =cadena=> {
    const frecuencia = {};
    for (let i = 0; i < cadena.length; i++) {
      const caracter = cadena[i];
      if (frecuencia[caracter]) {
        frecuencia[caracter]++;
      } else {
        frecuencia[caracter] = 1;
      }
    }
    return frecuencia;
  }
  
  const cadena = prompt("Escribe una cadena: ");
  console.log(resultado(cadena)); 