// 4. Callbacks
// ✔ Objetivo
// Aplicar una operación extra (ej: descuento)
// 💡 Pistas
// La función debe recibir otra función:
// function calcular(precio, cantidad, operacion) {
// Dentro:
// let total = precio * cantidad;
// return operacion(total);
// Crea otra función:
// function descuento(total) {
//   return total * 0.9;
// }
// Llama a la función:
// calcular(precio, cantidad, descuento);
// 👉 Estás pasando una función como parámetro

let precio = Number(prompt("Introduce el precio del producto"));
let cantidad = Number(prompt("Introduce la cantidad del producto"));

function calcular(precio, cantidad, operacion) {
  let total = precio * cantidad;
  return operacion(total);
}

function descuento(total) {
  return total * 0.9;
}

let resultado = calcular(precio, cantidad, descuento);
alert(`Precio con descuento es ${resultado}`);
