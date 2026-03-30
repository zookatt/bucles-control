//1. Tienes este array de nombres en minúscula.
// Usa map para devolver todos en mayúscula con .toUpperCase():
let nombres = ["ana", "luis", "sara", "pedro"];
// resultado esperado: ["ANA", "LUIS", "SARA", "PEDRO"]
let resultadoMap = nombres.map((el) => el.toUpperCase());
console.log(resultadoMap);

//2.Filtra solo las personas mayores de edad:
let edades = [15, 22, 17, 30, 14, 25];
// resultado esperado: [22, 30, 25]
let resultadoFilter = edades.filter((el) => el >= 18);
console.log(resultadoFilter);

//3.Calcula el total de este carrito de compra:
let carrito = [5, 15, 3, 22, 10];
// resultado esperado: 55
let resultadoReduce = carrito.reduce((acc, el) => acc + el, 0);
console.log(resultadoReduce);

//4.Ordena este array de mayor a menor:
let puntuaciones = [45, 12, 98, 3, 67];
// resultado esperado: [98, 67, 45, 12, 3]
let resultadoMayoraMenor = puntuaciones.sort((a, b) => b - a);
console.log(resultadoMayoraMenor);

//5.Une estos dos arrays en uno sin modificar los originales:
let frontend = ["HTML", "CSS", "JavaScript"];
let backend = ["Node", "Python", "SQL"];
// resultado esperado: ["HTML", "CSS", "JavaScript", "Node", "Python", "SQL"]
let resultadoSpread = [...frontend, ...backend];
console.log(resultadoSpread);
