// Ejercicios Javascript: A entregar el día viernes 19/05 por mail.
// 1-Escribe un programa que sume dos números y muestre el resultado en la consola 

console.log(2 + 3);




// // 2-Crea una función que reciba dos números como parámetros y devuelva su suma.

function sumarNumeros(num1, num2) {
    return num1 + num2;
  }
  
  console.log(sumarNumeros(2, 3));
  



// // 3-Escribe un programa que determine si un número es par o impar. Muestra el resultado en la consola.

function esParOImpar(num) {
    if (num % 2 === 0) {
      console.log("El número es par");
    } else {
      console.log("El número es impar");
    }
  }
  
  esParOImpar(5);
  



// // 4-Crea una función que reciba una cadena de texto como parámetro y devuelva la cantidad de caracteres que contiene.

function contarCaracteres(texto) {
    return texto.length;
  }
  
  console.log(contarCaracteres("Hola, mundo!"));
  



// // 5-Escribe un programa que recorra los números del 1 al 20. Para cada número, muestra en la consola "Fizz" si es divisible entre 3, "Buzz" si es divisible entre 5 y "FizzBuzz" si es divisible entre ambos. Si no es divisible por ninguno, muestra el número.

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  



// // 6-Escribe un programa que calcule la suma de todos los números del 1 al 100 y muestre el resultado en la consola.

let suma = 0;

for (let i = 1; i <= 100; i++) {
  suma += i;
}

console.log(suma);




// // 7-Escribe un programa que recorra un array de números y muestre cada elemento en la consola.

const numeros = [1, 2, 3, 4, 5];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}




// // 8-Crea una función que tome un array de palabras como parámetro y devuelva la cantidad total de caracteres en todas las palabras.

function contarCaracteresTotal(palabras) {
    let totalCaracteres = 0;
  
    for (let i = 0; i < palabras.length; i++) {
      totalCaracteres += palabras[i].length;
    }
  
    return totalCaracteres;
  }
  
  const palabras = ["Hola", "mundo", "JavaScript"];
  
  console.log(contarCaracteresTotal(palabras));
  



// // 9- Escribe un programa que encuentre el elemento más grande en un array de números y lo muestre en la consola. => Esto lo puedo trabajar con el método Math.max (leer al respecto)

const numeros1 = [10, 5, 8, 20, 3];

console.log(Math.max(...numeros1));




// // 10-Dado un array de números crea una función que y devuelva un nuevo array con solo los números pares.

function obtenerNumerosPares(numeros) {
    const numerosPares = [];
  
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 === 0) {
        numerosPares.push(numeros[i]);
      }
    }
  
    return numerosPares;
  }
  
  const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  console.log(obtenerNumerosPares(numeros2));
  



// Mail para entrega : ceciliapradob0799@gmail.com.
// Importante: Cuando se dice un programa no quiere decir que sea una función específicamente, cuando es función se notifica en la instrucción misma.
