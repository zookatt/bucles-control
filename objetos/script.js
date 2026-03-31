// Ejercico 1
// crea un objeto que represente a tu mascota o a una mascota de un conocido
// con los atributos: especie, nombre y sexo
// indica los atributos y muestralos por consola usando dot notation

const mascota = {
  especie: "gato",
  nombre: "Lulu",
  sexo: "hembra",
};

console.log(
  `Es una mascota de especie ${mascota.especie}, de nombre ${mascota.nombre} y de sexo ${mascota.sexo}`,
);

// Ejercico 2
// usando como base el ejercicio anterior
// agrega un atrinuto para identificar el "sonido" que producen
// muestra el valor de el atriburo de "sonido" por bracket notation []

mascota.sonido = "Meow";
console.log(mascota["sonido"]);

// Ejercico 3
// usando como base el ejercicio anterior
// agrega un metodo para que la mascota al "saludar" muestre por consola el "sonido"
// llama al metodo

mascota.saludar = function () {
  return this.sonido;
};
let saludarMascota = mascota.saludar();
console.log(saludarMascota);

// Ejercico 4
// usando como base el ejercicio anterior
// usando Destructuring obten y luego muestra por consola solo el nombre y la especie

const { nombre, especie } = mascota;
console.log(nombre, especie);

// Ejercicio 5
// usando como base el ejercicio 3 como base
// utiliza el Spread operator para crear dos mascotas ahora e imprime sus atributos por consola.

const leon = {
  ...mascota,
  nombre: "Rey",
  sexo: "macho",
  sonido: "Roar",
};

const lince = {
  ...mascota,
  nombre: "Clara",
  especie: "lince",
  sonido: "Gruñido",
};
console.log(
  `Mascota 1: especie ${leon.especie}, nombre ${leon.nombre}, sexo ${leon.sexo}, sonido ${leon.sonido}`,
);
console.log(
  `Mascota 2: especie ${lince.especie}, nombre ${lince.nombre}, sexo ${lince.sexo}, sonido ${lince.sonido}`,
);

// Ejercicio 6
// usando el ejercicio 2 muestra por consola todos los atributos usando Object.keys

const keys = Object.keys(mascota);
console.log(keys);

// Ejercicio 7
// usando TS crea una Interfaces que defina los atributos obligatorios de la mascota, incorporando el atributo de edad
//EN OTRO DOCUMENTO script7.ts

// ### Ejercicio A: El Carrito de Compras

// Crea un objeto `carrito` que tenga:

// 1. Una propiedad `productos` (un array de objetos, cada uno con `nombre` y `precio`).
// 2. Un método `calcularTotal` que use `this.productos` y `Object.values` (o un bucle) para devolver la suma de todos los precios.
// 3. Un método `agregarProducto(nuevoNombre, nuevoPrecio)` que añada un objeto al array.

const carrito = {
  productos: [
    {
      nombre: "manzana",
      precio: 3,
    },
    {
      nombre: "aceite",
      precio: 6,
    },
    {
      nombre: "pan",
      precio: 2,
    },
  ],
  calcularTotal: function () {
    return carrito.productos.reduce((acc, el) => acc + el.precio, 0);
  },
  agregarProducto: function (nuevoNombre, nuevoPrecio) {
    this.productos.push({
      nombre: nuevoNombre,
      precio: nuevoPrecio,
    });
  },
};

carrito.agregarProducto("leche", 4);

let calcularTotalFunction = carrito.calcularTotal();

console.log(calcularTotalFunction);

// ### Ejercicio B: Fusión de Perfiles e Inmutabilidad

// Tienes dos objetos:

// - `usuarioBase`: `{ id: 1, nombre: "Juan", premium: false }`
// - `actualizaciones`: `{ premium: true, ciudad: "Madrid" }`
// 1. Crea un nuevo objeto `usuarioFinal` usando el **Spread Operator** para combinar ambos, asegurándote de que las actualizaciones sobrescriban los datos viejos.
// 2. Usa **Destructuring** para extraer `nombre` y `ciudad` del objeto `usuarioFinal` en una sola línea.

const usuarioBase = { id: 1, nombre1: "Juan", premium: false };
const actualizaciones = { premium: true, ciudad: "Madrid" };
const usuarioFinal = {
  ...usuarioBase,
  ...actualizaciones,
};
console.log(usuarioFinal);

const { nombre1, ciudad } = usuarioFinal;
console.log(nombre1, ciudad);

// ### Ejercicio C: Analizador de Inventario

// Dado el objeto `stock = { laptop: 5, mouse: 20, teclado: 10 }`:

// 1. Usa un método de `Object` para obtener todas las llaves e imprimirlas.
// 2. Crea una función que reciba el objeto `stock` y una variable `productoBuscado`.
// Usa **bracket notation** para devolver cuánto stock hay de ese producto
// (si no existe, debe devolver "No encontrado").

const stock = { laptop: 5, mouse: 20, teclado: 10 };
const keysStock = Object.keys(stock);
console.log(keysStock);

function stockCheck(stock, productoBuscado) {
  return stock[productoBuscado] !== undefined
    ? stock[productoBuscado]
    : "No encontrado";
}

const resultado = stockCheck(stock, "mouse");
console.log(resultado);
