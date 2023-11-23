//------Funcion declarada, funciones definidas ----------------
//   (function declaration, function statement)
/*
una de las caracteristicas de las funciones declaradas 
es que tienen hoisting(pueden ser llamadas antes de ser declaradas)
*/
multiplica(5, 3) //15
/**
 * comentario de funcion.
 * multiplica dos numeros e imprime en consola.
 * @param {number}b valor de multiplicando
 * @param {number}a valor de multiplicador
 */

function multiplica(a, b) {
  const resultado = a * b;
  console.log(resultado);
}

function divide(dividendo, divisor) {
  return dividendo / divisor;

}
console.log(divide(5, 2)); //2.5
console.log(divide(5, "2")); // 2.5
console.log(divide("5", "2")); //2.5
console.log(divide("5 0", "2")); //NaN

//============Funciones expresadas============
//      ( function expressions)

/*
Funciones que son declaradas dentro de la asignacion de una variable
Estas funciones pueden ser anonimas ( no tienen nombre)
las funciones expresadas no tienen hoisting, porque no se carga 
en memoria hasta que se utilice. 
*/

const sum = function sumaDeRnteros(a, b) {
  return a + b;
};

console.log(sum(6, 20)); // 26

const potencia = function (base, exponente) {
  return base ** exponente;
};

console.log(potencia(2, 3));

const power = (base, exponent) => base ** exponent;

//-------------- Funcion autoinvocadas---------
// (self-invokinng functions)
// Se autoinvocan, no necesitan un llamado
// Se pueden definir con funciones anonimas

(function setUp() {
  console.log("Me autoinvoco");
  console.log(" Puedo servirte como inicializador de tu programa");


})();

//-------------  Funcion flecha -----------------------
// (arrow functions)
/*
Son similaresa las funciones expresadas, pero:
-No requieren la palabra function.
-Si tienen una sola instruccion no requieren las llaves {}.
- Si la instruccion es el mismo retorno no requiere la palabra return.
*/

const areaRectangulo = (base, altura) => base * altura;

console.log(areaRectangulo(10, 5));

// Area de rectangulo con funcion expresada.

const areaR = function (base, altura) {
  return base * altura;
}

console.log(areaR(10, 6));

const saludo = persona => `Hola ${persona}`;
const ellaBailaSola = () => 'Compa que le parece esa chica?';

console.log(saludo("Peso Pluma "));
console.log(ellaBailaSola());

//--------------- Parametros default -------------------

const saludoGeneration = (persona = "persona", cohorte = "cohorte Mx") =>
  `Hola ${persona}, que gusto que estes en la ${cohorte}`;


console.log(saludoGeneration("Joseph", "Ch-34"));
console.log(saludoGeneration());
console.log(saludoGeneration("Chino"));

//----------------------Rest parameters------------------------
/* Nos permite representar una serie de valores indefinidos 
en los argumentos. 
Estos se presentan como un array.
El rest parameter debe estar al final de la lista de parametros.
*/

const sumatoriaVariosNumeros = (a, b, ...manyMoreArgs) => {
  let suma;
  suma = a + b;

  /*   for (let index = 0; index < manyMoreArgs.length; index++) {
      suma = suma + manyMoreArgs[index]; // suma += mamanyMoreArgs[index];
    } */

  suma += manyMoreArgs.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return suma;
}

console.log(`Sumatoria de 2 numeros 4 + 6 = ${sumatoriaVariosNumeros(4, 6)}`);
console.log(`Sumatoria de 4 numeros 4 + 6 + 5 + 7 = ${sumatoriaVariosNumeros(4, 6, 5, 7)}`);


//--------------------------Funciones callback---------------------------
/*
Funcion que se pasa a otra funcion como argumento, para luego invocarla para complementar algun tipo de rutina o accion.

*/

/*
Realizar 3 funciones. 
1 funcion que reciba un mensaje e imprima en consola
1 funcion que reciba un mensaje e imprima en alert
1 funcion que reciba un mensaje e imprima en el DOM, en H2
*/

const printToConsole = message => console.log(message);
const printToAlert = message => alert(message);
const printToH2 = message => {
  const refH2 = getH2Message();
  refH2.innerHTML = message;
};
const getH2Message = () => document.getElementById("message");


// Función que obtenga un mensaje e imprima en consola o alert o DOM o lo que se me ocurra.
/*
function getMessageAndPrint( option = "console" ){
    const message = getUserMessage();
    if ( option === "console"){
      printToConsole( message );
    } else if( option === "alert" ) {
      printToAlert( message );
    } else {
      printToH2( message );
    }
  }
  */
function getMessageAndPrint(fcnPrint) {
  const message = getUserMessage();
  fcnPrint(message);
}

const getUserMessage = () => `Martes de frescura`;

// getMessageAndPrint( printToH2 );
// getMessageAndPrint( printToAlert );
getMessageAndPrint(printToConsole);

// Imprimir en el DOM en un paragraph
getMessageAndPrint(function (message) {
  document.getElementById("p-message").innerHTML = message;
});


getMessageAndPrint(message => document.getElementById("p-message2").innerHTML = message);


/*
  Ejercicio 2
  Escribe una función que tome un arreglo de números,
  duplique el valor de cada número del arreglo,
  e imprima el nuevo arreglo actualizado.
  [5, 10, 15, 20, 25] -> [10, 20, 30, 40, 50]
*/
const double = (array) => {
  const doubleNumbers = [];

  for (let index = 0; index < array.length; index++) {
    doubleNumbers.push(array[index] * 2);
  }

  return doubleNumbers;

}

const numbers = [5, 10, 15, 20, 25];
console.log(double(numbers)); // [10, 20, 30, 40, 50]

// Usando Callback con map 

const fncCallbackforMap = (element, index, array) => element * 2;
const doubleUsingMap = array => array.map(fncCallbackforMap);

console.log(doubleUsingMap(numbers)); // [10, 20, 30, 40, 50]

// usando un arrow rn un map
const doubleUsingMapAndArrowFunction = array => array.map(element => element * 2);
console.log(doubleUsingMapAndArrowFunction(numbers)); // [10, 20, 30, 40, 50]


/*
  Ejercicio 4
  Crear un programa que itere sobre dos arreglos;
  si hay cursos en común, imprimirlos en la consola.

  salida: "Cursos en común: Programming, Music"
*/

// ------------------- Usando método filter e includes-----------------

const student1Courses = ["Math", "English", "Programming", "Biology", "Physics", "Music"];
const student2Courses = ["Geography", "Spanish", "Programming", "Music"];
const student3Courses = ["Geography", "Spanish", "Programming"];

const cursosEnComun = (student1Courses, student2Courses) => {
  const commonCourses = [];
  for (let i = 0; i < student1Courses.length; i++) {
    for (let j = 0; j < student2Courses.length; j++) {
      if (student1Courses[i] === student2Courses[j]) {
        commonCourses.push(student1Courses[i]);
      }
    }
  }
  return commonCourses;
}

console.log(`Cursos en común: ${cursosEnComun(student1Courses, student2Courses)}`);

/*
const commonCoursesUsingFilter = (student1Courses, student2Courses) => 
             student1Courses.filter (element => student2Courses.includes(element));

console.log(`Cursos en común: ${ commonCoursesUsingFilter( student1Courses, student2Courses ) }`);
*/
// Resolviendo el ejercicio usando el método filter() y el método includes()
const commonCoursesUsingFilter = (student1, student2) =>
  student1.filter(course => student2.includes(course)
  );

console.log(`Cursos en común: ${commonCoursesUsingFilter(student1Courses, student2Courses)}`);


// ------------------- Contar la cantidad de caracteres de una frase -----------
// pepe pecas pica papas con un pico y una pala
// la cantidad de letras 'p': 8
// resolverlo usando arrow function
// usar filter
// convertir el texto a array split()

const phrase = "pepe pecas pica papas con un pico y una pala";

const countChar = (phrase, character) => phrase.split("").filter(element => element === character).length;
// si piden que cuente todas las p indepediente de may o min  toLowerCase(), 
// phrase.toLowerCase().split("").filter



/*
const countChar = (phrase, character) => {
    const characters = phrase.split(""); //[p,e,p,e, , p... ]
    const filterCharacters = characters.filter(  (element, index, arr)=> element === character ); // [p..p,p]
    return filterCharacters.length;
  }
*/
console.log(countChar(phrase, "p"));

// ------------------- Funciones Recursivas -----------
/*
  Es una técnica de programación en donde la función se llama así misma.
  Se debe tener precausión de no entrar en un ciclo infinito.

  En algunos casos, la recursividad puede ser más legible y clara
  ya que refleja de manera directa la naturaleza recursiva del problema.

  function funcionRecursiva ( valor ){
     if( condicionParo ){

     } else {
        funcionRecursiva( nuevoValor ); // llamada recursiva
     }
  }

*/

// Realizar una fncion que calcule el factorial de un numero
// Mostrar en consola el factorial de 5 
/*
El factorial de un número se calcula multiplicando el número por cada 
número que lo precede hasta el 1. Por ejemplo: 3 != 3x2x1 = 6.
*/


function factorialAscendente( number ){
  let factorial = 1;
  for(let i = 1; i <= number; i++){
    factorial = factorial * i;
  }
  return factorial;
}

function factorialDescendente( number ){
  let factorial = 1;
  for(let i = number; i > 0 ; i--){
    factorial = factorial * i;
  }
  return factorial;
}


console.log(`El factorial de 5 es : ${ factorialAscendente(5)}`);
console.log(`El factorial de 5 es : ${ factorialDescendente(5)}`);


const factorialArrowFunction = ( number ) => {
  let factorial = 1;
  for(let i = number; i > 0 ; i--){
    factorial = factorial * i;
  }
  return factorial;
}

//solucion del ejercicio con recursividad 

function factorialRecursivo( number ) {
  if( number < 1 ) {
     return 1;
  } else {
     return number * factorialRecursivo( number -1 );
  }
}
console.log(`Factorial recursivo de 5: ${factorialRecursivo(5)}`);


/*
  Calcular suma de números pares.
  Realizar una función recursiva que sume los números pares
  de un número determinado, hasta el número 1.

  número: 12.
  Resultado: 12 + 10 + 8 + 6 + 4 + 2 

  número: 7
  Resultado: 6 + 4 + 2 

  Recomendación: usar módulo %2
*/

function sumaParesDescendientes(numero) {
  if (numero <= 0) {
    return 0;
  } else if (esPar(numero)) {
    return numero + sumaParesDescendientes(numero - 1);
  } else {
    return sumaParesDescendientes(numero - 1);
  }
}

function esPar(numero) {
  return numero % 2 === 0;
}

console.log(sumaParesDescendientes(10)); // 30
console.log(sumaParesDescendientes(5)); // 6
console.log(sumaParesDescendientes(2)); // 2



function sumEvenNumber( number ){
  if(number % 2 !==0 ){
     number --;
  } if(number <= 2) {
    return 2;
  } else {
    return number + sumEvenNumber( number -1)
  }
}