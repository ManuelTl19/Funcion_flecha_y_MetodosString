/**22. Convertir una frase a camelCase
 * Escribe una función que convierta una frase a formato camelCase.
Ejemplo: "hola mundo en javascript" → "holaMundoEnJavascript
 */


const convertirACamelCase=(frase)=> {
    return frase
      .toLowerCase() 
      .split(' ')   
      .map((palabra, indice) => 
        indice === 0 
          ? palabra
          : palabra.charAt(0).toUpperCase() + palabra.slice(1) 
      )
      .join('');
  }
  
 
  let frase = "hola mundo en javascript";
  console.log(convertirACamelCase(frase)); 