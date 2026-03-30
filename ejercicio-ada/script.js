const P = [
  { nombre: "Teclado", precio: 45, stock: true },
  { nombre: "Ratón", precio: 25, stock: false },
  { nombre: "Monitor", precio: 320, stock: true },
  { nombre: "Webcam", precio: 89, stock: true },
];

// 1. Filtra solo los productos con stock: true

let productosConStock = P.filter((el) => el.stock === true);
console.log(productosConStock);

// 1.1 Recorrer el arreglo para ver lo que está en la tercera posición de cada bloque y validar si es true, si lo es mostrar el nombre
// del producto sino continuar —> if (i+2) =’true’
let nombres = P.filter((el) => el.stock === true).map((el) => el.nombre);
console.log(nombres);
// 2. Obtén un array solo con los nombres de esos productos

// let nombres = P.map((el) => el.nombre);
// console.log(nombres);

// 2.1 Quedarse en el inicio de cada bloque con la instruccion productosConStock.push(p[i])

let nombresConStock = [];

for (let i = 0; i < P.length; i++) {
  if (P[i].stock === true) {
    nombresConStock.push(P[i].nombre);
  }
}

console.log(nombresConStock);

// // 3. Calcula el precio total de los productos en stock

// let precioTotalStock = productosConStock.reduce(
//   (acc, el) => acc + el.precio,
//   0,
// );
// console.log(precioTotalStock);

// // 4. Ordénalos de menor a mayor precio

// let ordenPrecio = P.sort((a, b) => a.precio - b.precio);
// console.log(ordenPrecio);

// 1. Filtra solo los productos con stock: true

//  2. Obtén un array solo con los nombres de esos productos
// 2.1 Quedarse en el inicio de cada bloque con la instruccion productosConStock.push(p[i])
// 3. Calcula el precio total de los productos en stock
// Recorer el arreglo 1 espacio despues del inicio y sumar ese precio
//  4 Ordénalos de menor a mayor
