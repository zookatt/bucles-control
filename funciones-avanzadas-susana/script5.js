// 5. Función anónima
// ✔ Objetivo
// No usar una función con nombre
// 💡 Pistas
// En lugar de crear function descuento(), haz esto:
// calcular(precio, cantidad, function(total) {
//   return total * 0.8;
// });
// 👉 La función no tiene nombre

let precio = Number(prompt("Introduce el precio del producto"));
let cantidad = Number(prompt("Introduce la cantidad del producto"));

function calcular(precio, cantidad, operacion) {
  let total = precio * cantidad;
  return operacion(total);
}

const descuento = function (total) {
  return total * 0.9;
}

let resultado = calcular(precio, cantidad, descuento);
alert(`Precio con descuento es ${resultado}`);