// 1. Escribe un programa que pida al usuario un número y determine si es positivo, negativo o cero.

//RESOLUCION
// let num = Number(prompt("Introduce un numero"));
// if (num > 0) {
//   alert(`El numero ${num} es positivo`);
// } else if (num < 0) {
//   alert(`El numero ${num} es negativo`);
// } else {
//   alert(`El numero ${num} es cero`);
// }

// 2. Escribe un programa que pida la edad del usuario y determine si es un niño (0-12 años), un adolescente (13-17 años), un adulto (18-64 años) o un anciano (65 años o más).

// let edad = Number(prompt("Introduce edad"));
// if (edad >= 0 && edad <= 12) {
//   alert(`Es un niño`);
// } else if (edad >= 13 && edad <= 17) {
//   alert(`Es un adolescente`);
// } else if (edad >= 18 && edad <= 64) {
//   alert(`Es un adulto`);
// } else if (edad >= 65) {
//   alert(`Es un anciano`);
// } else {
//   alert(`La edad intoducida es incorrecta`);
// }

// 3. Escribe un programa que pida al usuario un número del 1 al 7 y muestre el día de la semana correspondiente (1 para lunes, 2 para martes, etc.).
// let num = Number(prompt("Introduce el numero entre 1 y 7"));

// switch (num) {
//   case 1:
//     alert("Es Lunes");
//     break;
//   case 2:
//     alert("Es Martes");
//     break;
//   case 3:
//     alert("Es Miercoles");
//     break;
//   case 4:
//     alert("Es Jueves");
//     break;
//   case 5:
//     alert("Es Viernes");
//     break;
//   case 6:
//     alert("Es Sabado");
//     break;
//   case 7:
//     alert("Es Domingo");
//     break;
//   default:
//     alert("Numero introducido debe ser entre 1 y 7");
//     break;
// }

// 4. Escribe un programa que pida al usuario su calificación (un número del 0 al 100)
// y muestre una letra de calificación correspondiente (A, B, C, D, F).
//  Usa if/else para validar el rango de la calificación y switch para determinar la letra.

// let num = Number(prompt("Introduce el numero entre 0 y 100"));

// if (num < 0 || num > 100) {
//   alert("Numero introducido debe ser entre 0 y 100");
// }

// let letra = "";
// if (num >= 90) {
//   letra = "A";
// } else if (num >= 80) {
//   letra = "B";
// } else if (num >= 70) {
//   letra = "C";
// } else if (num >= 60) {
//   letra = "D";
// } else {
//   letra = "F";
// }

// switch (letra) {
//   case "A":
//     alert("Excelente A");
//     break;
//   case "B":
//     alert("Muy bien B");
//     break;
//   case "C":
//     alert("Bien C");
//     break;
//   case "D":
//     alert("Suficiente D");
//     break;
//   case "F":
//     alert("Suspenso F ");
//     break;
// }

// 5. Escribe un programa que pida al usuario un número del 1 al 12 y muestre el nombre del mes correspondiente

// let num = Number(prompt("Introduce el numero entre 1 y 12"));

// switch (num) {
//   case 1:
//     alert("Enero");
//     break;
//   case 2:
//     alert("Febrero");
//     break;
//   case 3:
//     alert("Marzo");
//     break;
//   case 4:
//     alert("Abril");
//     break;
//   case 5:
//     alert("Mayo");
//     break;
//   case 6:
//     alert("Junio");
//     break;
//   case 7:
//     alert("Julio");
//     break;
//   case 8:
//     alert("Agosto");
//     break;
//   case 9:
//     alert("Septiembre");
//     break;
//   case 10:
//     alert("Octubre");
//     break;
//   case 11:
//     alert("Noviembre");
//     break;
//   case 12:
//     alert("Diciembre");
//     break;
//   default:
//     alert("Número no válido (usa del 1 al 12)");
// }
