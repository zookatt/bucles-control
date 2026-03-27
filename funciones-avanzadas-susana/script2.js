//  Cálculo de una compra en JavaScript
// Realiza un programa en JavaScript que:
// Pida por pantalla (prompt):
//                nombre del producto
//                precio
//                cantidad
// Calcule el total de la compra
// Muestre el resultado usando alert

// 2. Parámetros por defecto
// ✔ Objetivo
// Si el usuario no introduce cantidad 🡪 usar 1
// 💡 Pistas
// En la función:
// function calcular(precio, cantidad = 1) {
// Si el usuario deja vacío el prompt:
// cantidad === ""
// Puedes pasar undefined para activar el valor por defecto:
// let cantidad = cantidadTexto === "" ? undefined : parseInt(cantidadTexto);

//RESULTADO
let nombre = prompt("Introduce el nombre del producto");
let precio = Number(prompt("Introduce el precio del producto"));
let cantidadTexto = prompt("Introduce la cantidad del producto");
//let cantidad = Number(prompt("Introduce la cantidad del producto"));
let cantidad = cantidadTexto === "" ? 1 : parseInt(cantidadTexto);

function calcular(precio, cantidad = 1) {
  return precio * cantidad;
}

let resultado1 = calcular(precio, cantidad);
alert(
  `El total de la compra del producto ${nombre} con el precio/ud ${precio} y cantidad  ${cantidad ?? 1} ud. es ${resultado1} euros`,
);
