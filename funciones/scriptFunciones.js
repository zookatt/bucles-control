//1Haz una función que de dos números pasados por parámetros indica (saca por
//consola) cúal de ellos es mayor.

// console.log("introduce un  numero");
// let numero =prompt("introduce el primero")
// console.log("introduce otro numero");
// let numero2 =prompt("introduce el segundo")

// function NumeroMayor(num1,num2){
//     if(num1 > num2){
//          console.log("el numero mayor es:"+num1);
//     }
//     else if(num1 === num2){
//         console.log("los numeros son iguales");
//     }
//     else{
//         console.log("el numero mayor es:"+num2);
//     }
// }

// NumeroMayor(numero,numero2)

//2. Haz una función que calcule (sin usar *) la multiplicación de dos números.

// console.log("introduce un  numero");
// let numero = Number(prompt("introduce el primero"))
// console.log("introduce otro numero");
// let numero2 = Number(prompt("introduce el segundo"))

// function MultiplicarArtesanal(num1,num2){
//     let multiplicacion = 0
//     for(i=0 ;i <num2;i++){
//     multiplicacion += num1
// }
// console.log("el resultado de "+num1+"x"+num2+"es : "+multiplicacion);
// }

// MultiplicarArtesanal(numero,numero2)

// 3. Utilizando la función anterior haz una función que calcule la multiplicación de 3 números.

// 4. Crea una función que permita calcular la nota media de 3 notas para que devuelva la
// media con 1 decimal.

// let num1 = Number(prompt("introduce un numero 1"));
// let num2 = Number(prompt("introduce un numero 2"));
// let num3 = Number(prompt("introduce un numero 3"));

// function calcularMedia(num1, num2, num3) {
//   let media = (num1 + num2 + num3) / 3;
//   console.log(media.toFixed(1));
// }

// calcularMedia(num1, num2, num3);

// 4. Encuentra entre los primeros 10.000 números naturales los números que completan la siguiente propiedad: La suma del cubo de cada una de sus cifras y que dé el mismo número:
//→ por ejemplo 153: 1*1*1+5*5*5+3*3*3= 1 + 125 + 27=153.

//mostrar todos los numeros que su suma entre multiplicacion de sus cifras 1 + 125 + 27= 153
//crear sentencia de 0-10000
//separar cifras de cada numero
//elevar a cubo cada cifra y sumar
//comparar si la suma y la cifra es igual
//pintar los numeros cuales coinciden con condicion
const arrayNumerosBuscados = [];
for (let i = 100; i <= 10000; i++) {
  let numero = i.toString();
  let cifras = numero.split("");
  let sumaCubos = 0;

  for (let j = 0; j < cifras.length; j++) {
    let cifra = Number(cifras[j]);
    sumaCubos += cifra ** 3;
  }

  if (sumaCubos === i) {
    arrayNumerosBuscados.push(i);
  }
}
console.log(arrayNumerosBuscados);

//5. (optativo) Crea una función que devuelva el cubo (numero^3) de un número pero que compruebe si el parámetro pasado es un número entero. Si no es ún entero o no es un número mostrará un alert indicando cuál es el problema y devolverá fa se.



