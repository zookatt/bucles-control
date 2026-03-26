// EJERCICIO 1: Crea una función que sume 2 números, pero un argumento ha de tener un valor por defecto.

// Chuleta:
// function saludar (nombre = "Invitado") {
//     console.log(Hola ${nombre})
// }

// saludar("Ruben")
// saludar()

// Tip: NO se puede establecer el primer argumento por defecto.

function suma(num1, num2 = 5) {
  return num1 + num2;
}
let resultadoSuma1 = suma(4);
console.log(resultadoSuma1);
let resultadoSuma2 = suma(4, 6);
console.log(resultadoSuma2);

// Rest parameters
// EJERCICIO 2: Haz una sumatoria de números utilizando este recurso:

// Tips:
// Recordad poner los puntos suspensivos en el argumento
// Para el bucle, la estructura para recorrer el Array es: for (let i of <argumento>)
// NOTA: ... recoge todos los argumentos que le pases y los mete en un array llamado args

function sum(...args) {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
}

let resultadoSum = sum(2, 4, 6, 8, 10);
console.log(resultadoSum);

// Callbacks
// EJERCICIO 3: Crea un programa que utilice mas de una función y que te devuelva un saludo.

// Chuleta: La función que va a realizar el llamamiento es: <nombreDeFuncion> (callback) {
// callback()
// }

function principal(callback) {
  return callback();
}

function saludar() {
  let nombre = "Katia";
  console.log("Hola " + nombre);
}

principal(saludar);

// EJERCICIO 4: Crea un programa que te sume 2 números usando una función
// CONDICION: No vale ponerle nombre a la función

// Tip: Recuerda que hay que utilizar algo para poder llamar a esa función luego..

const sumaDosNumeros = function (num1, num2) {
  return num1 + num2;
};

let resultadoAnonimo = sumaDosNumeros(1, 2);
console.log(resultadoAnonimo);

// Tipado typescript
// EJERCICIO 5:  Investiga como tipar variables en typescript. Crea una variable de cada tipo

// Recordatorio: string, number, boolean, bull, undefined.

// TIP: Recordad que este lenguaje es case sensitive, las mayúsculas o minúsculas importan


