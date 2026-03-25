// Actividades de Bucles:

// 1. Escribe un programa que imprima los números del 1 al 10 en la consola.
// function mostrarNumeros() {
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }
// mostrarNumeros();
// 2. Pide al usuario un número N y calcula la suma de todos los números del 1 al N. Muestra el resultado en la consola.

// PSEUDOCODIGO
// crear input para guardar variable que introduce usuario
// crear una funcion "sumar" y llamarla
// dentro de sumar iniciar la variable suma a 0
// usuario esribe numero : 4
// entra en el bucle 4 y acumula suma por la vueta hasta el numero 4
// consola tiene que mostrar la suma de 1 + 2 + 3 + 4 = 10

// let numero = Number(prompt("Introduce un numero"));
// console.log(typeof numero);
// function sumar() {
//   let suma = 0;
//   for (let i = 1; i <= numero; i++) {
//     console.log(i);
//     suma += i;
//   }
//   console.log(suma);
// }
// sumar();

// 3. Escribe un programa que imprima en consola todos los números pares marcados en el rango que indique el usuario.

// PSEUDOCODIGO
//declarar variable inicio del rango
//declarar variable fim del rango
//crear funcion numeros y llamarla
//dentro de bucle for como inicio poner rango de inicio y como fin el numero de fin
//dentro de for, poner una condicion si el numero es par i % 2 === 0 y si es asi pintarlo por la consola
// let inicio = Number(prompt("Introduce el numero inicial"));
// let fin = Number(prompt("Introduce el numero final"));

// function numerosPares() {
//   for (let i = inicio; i <= fin; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }
// numerosPares();

// 4. Escribe un programa que dibuje un triángulo en la consola. (línea 1, 1*, línea 2, *).

// PSEUDOCODIGO

// declarar variable con lineas
// declara y llamar funcion dibujarTriandulo
// iniciar suma a ""
// recorrer numero de lineas y pintar tantos asterizcos que corresponde a una linea hasta el total de lineas.

// const lineas = 5;
// function dibujarTriandulo() {
//   let suma = "";
//   for (let i = 1; i <= lineas; i++) {
//     console.log((suma += "*"));
//   }
// }
// dibujarTriandulo();

// 5. ¿Te atreves con un árbol de Navidad?
// const lineas = 10;
// const start = "+";
// const end = "||";

// function dibujarArbol() {
//   const ancho = lineas;

//   console.log(start.padStart(5));

//   for (let i = 3; i <= lineas; i++) {
//     if (i % 2 !== 0) {
//       let espacios = (ancho + i) / 2;
//       console.log("*".repeat(i).padStart(espacios));
//     }
//   }
//   console.log(end.padStart(6));
// }
// dibujarArbol();

// 4. Números primos.
// Encuentra e imprime todos los números primos dentro del rango [inicio, ﬁn]. 
// Un número es primo si solo es divisible entre 1 y sí mismo, es decir que no es 
// divisible por ningún número inferior a él entre dos.
// Nota: Busca información referente a Math.sqr()
