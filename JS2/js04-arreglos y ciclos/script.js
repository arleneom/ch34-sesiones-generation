console.log("Sesion Js 03 Arreglos y ciclos")

/*
=================Array =======================
Es un tipo de estructura de datos que se utiliza
para almacenar una coleccion ordenada de elementos.
Estos elementos pueden ser de cualquier tipo.

Los arrays son objetos especiales con propiedades y
metodos especificos para trabajar con datos ordenados.
*/
// Declarar un arreglo usando corchetes

const nombresCh34 = ["Misael", "Luis", "Meli"];

//Declarar un arreglo usando el constructos de la clase Array 
const apellidosCh34 = new Array("Navarro", "Ortega", "Flores");

console.log( nombresCh34 );
console.log( apellidosCh34 );

const numCajonesEstacionamiento = new Array(4); //[ , , , ]
console.log(numCajonesEstacionamiento);
console.log(new Array (2,5,7)); // [2.5.7]

// ====================Arreglos anidados==================
//  atrices (Arreglos de 2 dimensiones)
// [  [],  [],  []  ]

const equiposIntegrador = [     
    ["Misael", "Mirta" , "Jocelyn", "Jorge" , "Yaz"     , "Tony"   , "Itzel" ] ,  /* 3 de pastor*/
    ["Chino" , "Victor", "Nalle"  , "Lili"  , "Fernanda", "Cinthia" ] ,  /* Javadictos*/
    ["Gaby"  , "Charly", "Alan"   , "Sebas" , "Andrew"  , "Arlene" , "Arely"]   /* HTaMaLeros*/
];

// Imprimir al equipo de Javadictos
const javadictosPersonas = equiposIntegrador [1];
console.table(javadictosPersonas);
// Imprimir a Lili de javadictos
const personaLili = javadictosPersonas[3];
console.log(personaLili);

//Imprimir a Sebas
console.log(equiposIntegrador[2][3]);
// Mirta
console.log(equiposIntegrador[0][1]);
// Arlene
console.log(equiposIntegrador[2][5]);

// ================= Iterar un arreglo ================
// Mostrar en consola todas las personas de los proyectos
// usando ciclo for
/*
const equiposIntegrador = [     
    ["Misael", "Mirta" , "Jocelyn", "Jorge" , "Yaz"     , "Tony"   , "Itzel" ] , 
    ["Chino" , "Victor", "Nalle"  , "Lili"  , "Fernanda", "Cinthia" ] , 
    ["Gaby"  , "Charly", "Alan"   , "Sebas" , "Andrew"  , "Arlene" , "Arely"]  
];
*/

for (let equipo = 0; equipo < equiposIntegrador.length; equipo++) {
    console.log(equiposIntegrador[equipo]);
    for (let persona = 0; persona < equiposIntegrador[equipo].length; persona++) {
      console.log(equiposIntegrador[equipo][persona]);
          }
  }

//Usando el metodo forEach
console.log("================forEach===========================")
// equiposIntegrador.forEach( (fila)=>console.log(fila)  );
function imprimirFilas( element, index, array){
    console.log(element);
}

equiposIntegrador.forEach(imprimirFilas);
equiposIntegrador.forEach( function impEquipos(element, index, array){console.log(element);});
equiposIntegrador.forEach(function(element, index, array){console.log (element);});
equiposIntegrador.forEach((element, index,array)=> console.log(element) );

equiposIntegrador.forEach(element=> console.log(element) );

//equiposIntegrador.forEach(fila => fila.forEach ( columna => console.log(columna) ));
equiposIntegrador.forEach( equipo => equipo.forEach(persona => console.log(persona)));

equiposIntegrador.forEach( (equipo, indiceEquipo) => {
    equipo.forEach( persona => console.log(indiceEquipo, persona) )
});

// ========== Iterar usando For of ==========

for(let fila of equiposIntegrador ){
    for(let columna of fila){
        console.log( columna );
    }
}

const myName = "Alejandro";
for (let char of myName){
    console.log(char);
}

// ============== break y continue ==========
/*
  Consideraciones con el ciclo for:
  No es necesario indicar la expresión inicial, la evaluación y la expresión final

for (inicio; compración; ExpFinal){
    sentecias;
}

for( ; ; ){

}

break : rompe con la iteración en curso y finaliza el ciclo for

*/
const numbers = [3,6,8,1];
// Detener la iteracion si encontramos el numero 8
for(let number of numbers){
    console.log(numbers);
    if(number ===8)break;

}

const matrix = [ [2,4,6,999], [10_000,6,8,9], [2,6,8,3] ];
// Detener la iteracion cuando encontremos un 6, no mostrar mas numeros
// label: indicar que ciclo romperá el break

console.log("======= uso de break y label======")
rompeMatriz:
for (let row of matrix ){
   for ( let column of row){
    console.log( column );
    if( column === 6 ) break rompeMatriz;
   }
}

// Imprimir todos los elementos excepto el 6 (de cualquier fila)

// label: indicar que ciclo romperá el break

console.log("======= imprimir excepto el 6======")

for (let row of matrix ){
   for ( let column of row){
    if( column === 6 ) continue;
        console.log(column);
    }
}

const ages = [18,34,55];

for (let index = 0; index < ages.length; index++) console.log( ages[index]);

//prueba chiquitita
let jiteracion =0;

for( ; jiteracion < 5; jiteracion++);
console.log(jiteracion);
console.log("Fin de jiteracion");

//que numeros imprime la linea 160?

//============= ciclo while ==========
/*
crea un bucle que ejecuta una sentencia
*/

// let counter = 1;
//    while(  confirm("¿Quieres cotinuar?") ){
//         console.log(`Num. de veces que has entrado: ${counter}`);
//         counter++;
//    }


   const nombreMascotas = [ "Junior", "Tomy", "Fify", "Canela", "Pelusa", "Freya", "Nana", "Cuco"];
// Imprimir los nombres de las mascotas, y detenerse cuando se encuentre a "Canela"
   // Resolver utilizando ciclo While

   const imprimirMascotas= (mascotas, nombre) => {
    let i = 0;
    while( mascotas[i] !== nombre ) {
      console.log(mascotas[i]);
      i++;
    }
  }
  
  imprimirMascotas (nombreMascotas,"Canela");

  //=====================ciclo do-while ====================
  /* 
  crea un bucle que jecuta una sentencia hasta
  que la condicion de comprobacion se evalue como falsa.

  La condicion se evalua despues de ejecutar la sentencia.
  esto significa que la sentencia se ejecuta por lo menos una vez.

  sintaxis:

  do{
    sentencia;
  } while(evaluacion);

  */
// let counter = 1
// do{
//     counter++;
//     console.log(`N. iteracion: ${counter}`)
// } while(confirm("Deseas continuar?") );

//=================================================
let valor = -2;
while ( valor < 5) {
    console.log("While " + valor ); // -2... 4
    valor ++;
}

valor = 4;
do {
    console.log("Do-While " + valor ); // 4
    valor ++;
} while ( valor < 5);

/*
FIFO: first input, first output //shift(quita el 1 de la fila)/push(agrega al final de la fila) 
LIFO: last input, first output // pop(saca el ultimo elemento)/push(agrega al final de la fila) 

*/


