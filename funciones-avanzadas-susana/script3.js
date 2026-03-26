// 3. Rest parameters (...)
// ✔ Objetivo
// Pedir varios precios y sumarlos
// 💡 Pistas
// La función debe recibir muchos valores:
// function sumar(...precios) {
// precios es un array → puedes recorrerlo:
// for (let p of precios) {
// O usar acumulador:
// total += p;
// Haz varios prompt:
// let p1 = ...
// let p2 = ...
// let p3 = ...
// Llama a la función:
// sumar(p1, p2, p3);

let p1 = Number(prompt("Inroduce precio 1"));
let p2 = Number(prompt("Inroduce precio 2"));
let p3 = Number(prompt("Inroduce precio 3"));

function sumar(...precios) {
  let total = 0;
  for (let p of precios) {
    total += p;
  }
  return total;
}
let result = sumar(p1, p2, p3);
alert(`Total de precios es ${result}`);
