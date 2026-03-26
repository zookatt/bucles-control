"use strict";
// 6. TypeScript
// ✔ Objetivo
// Añadir tipos
// 💡 Pistas
// Tipa los parámetros:
// precio: number
// cantidad: number
// Tipa la función:
// function calcular(precio: number, cantidad: number): number {
// Tipa el callback:
// operacion: (total: number) => number
// Recuerda que prompt devuelve string:
// parseFloat(...)
// parseInt(...)
// ✅Usa alert() para mostrar resultados
// ✅ Usa prompt() para pedir datos
let precio = parseFloat(prompt("Introduce el precio del producto") || "0");
let cantidad = parseFloat(prompt("Introduce la cantidad del producto") || "0");
function calcular(precio, cantidad, operacion) {
    let total = precio * cantidad;
    return operacion(total);
}
function descuento(total) {
    return total * 0.9;
}
let resultado = calcular(precio, cantidad, descuento);
alert(`Precio con descuento es ${resultado}`);
