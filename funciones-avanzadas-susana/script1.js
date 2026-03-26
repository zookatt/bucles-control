//  Cálculo de una compra en JavaScript
// Realiza un programa en JavaScript que:
// Pida por pantalla (prompt):
//                nombre del producto
//                precio
//                cantidad
// Calcule el total de la compra
// Muestre el resultado usando alert

// 1. Función normal
// Crear una función básica que calcule el total.
// 💡 Pistas:
// Crea una función con dos parámetros:
// function calcular(precio, cantidad) {
// Dentro:
// return precio * cantidad;
// Recoge los datos con prompt
// Convierte los números:
// parseFloat()
// parseInt()
// Llama a la función y guarda el resultado

//RESULTADO
let nombre = prompt("Introduce el nombre del producto");
let precio = Number(prompt("Introduce el precio del producto"));
let cantidad = Number(prompt("Introduce la cantidad del producto"));
console.log(precio, cantidad);

function calcular(precio, cantidad) {
  return precio * cantidad;
}
let resultado1 = calcular(precio, cantidad);
alert(
  `El total de la compra del producto ${nombre} con el precio/ud ${precio} y cantidad  ${cantidad} ud. es ${resultado1} euros`,
);
