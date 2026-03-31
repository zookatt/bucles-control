// Usando el forEach práctica con estos ejercicios

// 4. Muestra por pantalla el número mayor del array
var numbers = [3, 27, 95, 7, 25, 95, 81];

//const mayor = numbers.sort().reverse()[0];
let mayor = numbers[0];

numbers.forEach((el) => {
  if (el > mayor) {
    mayor = el;
  }
});

console.log(mayor);

// 5. Muestra por pantalla el string más largo.
var myStrings = [
  "first",
  "second",
  "third",
  "fourth",
  "reallyLongString",
  "sixth",
];

let largo = myStrings.forEach((el) => el.length);

console.log(largo);

// 6  Dado un array con los meses del año obtén todos los meses que empiezan por una vocal.
