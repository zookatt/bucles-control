//Ejercicio: Dividir vocales de consonantes

// Programa la función separarVocalesDeConsonantes () que partiendo de una cadena de entrada,
//  la trabaje y retorne una cadena que tenga todas las vocales y luego las constantes (en el mismo orden en el
// que aparecen).
// Antes de ponerte a "picar", escribe en el mismo fichero que vas a hacer la codificación
// cómo vas a resolver el problema (en lenguaje humano). Piensa cuando vas a saber si tu programa funciona o no, define bajo qué circunstancias vas a saber que todo está ok.
// Escribe las llamadas que vas a hacer y los resultados que esperas.

//PSEUDOCODIGO
//crear variable con valor la cadena que texto "Katia"
//crear funcion separarVocalesDeConsonantes () que acepta esa variable
//llamar a esa funcion
//crear 2 arrays o en este caso 2 variables strings: Vocales y Consonsntes
//crear variable resultado
//dentro de funcion - separar cadena por letras
//                  - iterar sobre cada letra y decidir si es vocal - anadir al array Vocales
//                  - y si no es que es Consonante - anadir al array Consonantes
//guardar en variable resultado = concatenar 2 strings: Vocales + Consonantes
//mostrar resultado por la consola

let texto = prompt("Introduce tu palabra");
// const arrVocales = [];
// const arrConsonantes = [];

let letras = texto.toLowerCase().split("");
alert(letras);
let resultado = "";

function separarVocalesDeConsonantes(letras) {
  let miVocales = "";
  let miConsonantes = "";
  for (let i = 0; i < letras.length; i++) {
    const vocales = "aeiouáéíóú";
    if (vocales.includes(letras[i])) {
      miVocales += letras[i];
    } else {
      miConsonantes += letras[i];
    }
  }
  return miVocales + miConsonantes;
}

resultado = separarVocalesDeConsonantes(letras);
alert(resultado);
