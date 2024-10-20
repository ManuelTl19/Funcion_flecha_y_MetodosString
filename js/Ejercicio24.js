/**24. Comprobar si una cadena contiene solo números
 * Escribe una función que verifique si una cadena contiene solo números.
Ejemplo: "12345" → true
 */

const soloNumeros = (cadena) => {
    return /^[0-9]+$/.test(cadena);
  }
  let texto = "2346679";
  console.log(soloNumeros(texto));