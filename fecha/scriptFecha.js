// // Obtén la fecha de hoy y sacala por pantalla.
// // Según el día de la semana y la hora actual, informa por pantalla si estás o no en clase.
// // hora>8:30 && hora<16:30
// // Desde hoy calcula cuánto tiempo falta para tu cumpleaños.
// // En segundos
// // En minutos
// // En horas
// // En días

// // Mira si el día de Sant Jordi (23/04/20XX) cae en domingo o sábado los próximos años.
// //  Informa con 20XX-dia, cuando el día no sea ni domingo ni sábado, comprueba hasta 2060.
// // Preguntale la fecha de nacimiento a tu compañero e informa de quien es mayor y de cuantos
// // años, meses, días os llevaís.:

// let fecha = new Date();
// console.log(fecha.toLocaleString());
// let hora = fecha.getHours();
// console.log(hora);
// let minutos = fecha.getMinutes();
// console.log(minutos);

// // Obtén la fecha de hoy y sacala por pantalla.
// // Según el día de la semana y la hora actual, informa por pantalla si estás o no en clase.
// // hora>8:30 && hora<16:30

// if (
//   (hora > 8 || (hora === 8 && minutos >= 30)) &&
//   (hora < 16 || (hora === 16 && minutos <= 30))
// ) {
//   console.log("Estoy en clase");
// } else {
//   console.log("Estoy fuera de horario de mis clases");
// }
// console.log(fecha.getHours(), fecha.getMinutes());

// // Desde hoy calcula cuánto tiempo falta para tu cumpleaños.
// // En segundos
// // En minutos
// // En horas
// // En días
// let birthday = new Date(2027, 0, 30);
// let left = "";
// function timeLeftToBirthday(birthday) {
//   let timeLeft = birthday.getTime() - fecha.getTime();
//   console.log(timeLeft);
//   let segundosFalta = timeLeft / 1000;
//   console.log(segundosFalta);
//   let minutosFalta = segundosFalta / 60;
//   console.log(minutosFalta);
//   let horasFalta = minutosFalta / 60;
//   console.log(horasFalta);
//   let diasFalta = horasFalta / 24;
//   return `Falta ${diasFalta.toFixed(1)} dias,${horasFalta.toFixed(1)} horas, ${minutosFalta.toFixed(1)} minutos, ${minutosFalta.toFixed(1)} segundos hasta mi cumpleanos ${birthday.toLocaleString()}`;
// }
// left = timeLeftToBirthday(birthday);
// console.log(left);

// //  Mira si el día de Sant Jordi (23/04/20XX) cae en domingo o sábado los próximos años.
// //  Informa con 20XX-dia, cuando el día no sea ni domingo ni sábado, comprueba hasta 2060.
// // 0 Domingo - 6 Sabado
// // 0 Enero - 11 Diciembre

// for (let i = 2026; i <= 2060; i++) {
//   let SantJordi = new Date(i, 3, 23);
//   let day = SantJordi.getDay();
//   console.log(day);
//   if (day === 0) {
//     console.log("Sant jordi cae en Domingo");
//   } else if (day === 6) {
//     console.log("Sant jordi cae en Sabado");
//   } else {
//     console.log("Sant jordi cae en otro dia");
//   }
// }

function operacion(callback) {
  return callback(2, 3);
}

const sumar = function (a, b) {
  let suma = a + b;
  return suma;
};

let resultado = operacion(sumar);
console.log(resultado);
