// 1.  Dada una lista de números, escribe una función en JavaScript
// que devuelva la suma de todos los números pares en la lista.
// La función deberá iterar sobre cada número en la lista, comprobar
// si el número es par y, si es así, añadirlo a la suma total.

const numeros = [2, 4, 5, 6, 7, 8, 3, 1, 10, 4];

function sumarPares(numeros) {
  return numeros.filter((el) => el % 2 === 0).reduce((acc, el) => acc + el, 0);
}
console.log(sumarPares(numeros));

// 2. Recibimos un array con los datos del alumno, pero debemos ordenarlo. En lugar de tener al final el nombre del alumno lo queremos al principio, antes del apellido y queremos añadir al final la nota media. De tal manera que:
// ordenDatos(["Rodriguez", "8", 9, '5',4, 'Clara']) → Clara,Rodriguez,8,9,5,4,6.5

const alumno = ["Rodriguez", "8", 9, "5", 4, "Clara"];

function ordenDatos(alumno) {
  const nombre = [];
  const notas = [];
  alumno.forEach((el) =>
    el === "Rodriguez" || el === "Clara" ? nombre.push(el) : notas.push(el),
  );
  const notaMedia = notas.reduce((acc, el) => acc + el / notas.length, 0);
  notas.push(notaMedia);
  return [...nombre, ...notas];
}
console.log(ordenDatos(alumno));

// 3. Partiendo de un array con palabras aleatorias, pero nuestro programa
// no acepta palabras que empiezan por “Z”. Elimina estas palabras del array
// y devuelve el nuevo sin estas palabras.
// filterWords(["Bob", "Alex", "Zoello"]);
// filterWords(["León", "Zebra", "Gacela"]);
// filterWords(["Mercedes", "Bmw", "Audi", "Porche"]);

function filterWords(arr) {
  return arr.filter((el) => !el.startsWith("Z"));
}

console.log(filterWords(["Bob", "Alex", "Zoello"]));
console.log(filterWords(["León", "Zebra", "Gacela"]));
console.log(filterWords(["Mercedes", "Bmw", "Audi", "Porche"]));
