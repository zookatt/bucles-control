// 1. Escribe un programa que pida al usuario un número
// y siga pidiendo números hasta que el usuario ingrese un número mayor a 10.
// let num;
// do {
//   num = Number(prompt("introduce el numero"));
// } while (num <= 10);

// 2. Escribe un programa que pida al usuario números repetidamente hasta que ingrese un número negativo. Luego, muestra la suma de todos los números ingresados (excluyendo el negativo).

// let num;
// let suma = 0;
// do {
//   num = Number(prompt("introduce el numero"));

//   if (num > 0) {
//     suma += num;
//   }
// } while (num > 0);
// console.log(suma);

// 3. Escribe un programa que pida al usuario su nombre y siga pidiendo hasta que el usuario ingrese un nombre con al menos 3 caracteres
// let nombre;
// do {
//   nombre = Number(prompt("introduce el nombre"));
// } while (nombre.length > 3);

// 4. Escribe un programa que simule un juego de adivinanza.
// El programa generará un número aleatorio entre 1 y 20, y el usuario deberá adivinarlo.
// El programa seguirá pidiendo intentos hasta que el usuario adivine el número o se rinda ingresando 0.

let num = Math.floor(Math.random() * (20 - 1) + 1);
alert(num);
let numUser;

do {
  numUser = parseInt(prompt("Introduce tu numero"));

  if (numUser === 0) {
    alert("Te rendiste! El número era: " + num);
  } else if (numUser < num) {
    alert("Tu numero es menor");
  } else if (numUser > num) {
    alert("Tu numero es mayor");
  } else {
    alert("Correcto!");
  }
} while (numUser !== 0 && numUser !== num);
