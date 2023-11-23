console.log("Sesion Js 03 condicionales")

/*
//======================Condicional if - else ======================

La condicional if ejecuta una sentencia si una condicion
especificada es evaluada como verdadera. En caso contrario
podemos usar la sentencia else.

Sintaxis:

if( condicion ) sentencia;

if( condicion ) {
sentencia1; 
sentencia2;
sentencia3;
sentenciaN;
}

if (condicion) 
sentencia Verdadera;
else
sentenciaFalsa;

*/

const temperatura = 22;

//Verificar temperatura, si es mayor o igual a 26 grados
//Imprimir en consola "Team Calor"
//en caso contrario "Team Frio"

if (temperatura >= 26){
    console.log("Team calor");
}else{
    console.log("Team frio")
}

if ( temperatura === 21 ) console.log("Temperatura sabrudoski");

console.log("Me pongo shrot con calcetines");

//==========================================
const temp = 20;

if (temp === 15) {
  console.log("Frio");
  console.log("Esto no le gusta a Nan");
}else
  console.log("Temp. a analizar");

//===========================================
const age = 25;

if (age === 50) /*instruccion*/ ; //  termina en el ;

 console.log("Estas en el 5 piso");
 console.log("Fin de analizar tu edad");


 //=========================================

 function verdadero(){
    return true;
 }

if( verdadero() ) console.log("Resultado verdadero");

console.log("Se termina de analizar la funcion");

/*
===================== Sentencia if - elseif - else ==================
  if ( condicion ) sentencia;
  else if ( condicion2 ) sentencia2;
  else if( condicionN ) sentenciaN;
  else sentenciaFalse;

*/

const color = "negro";
let mensaje = "";
/*
if (color === "negro") {
    mensaje = "Color negro";
}
  else {
    if (color === "verde"){
        mensaje = "color verde";
    }
    else {
        if (color === "azul"){            
            mensaje = "color azul";
        }
        else {
            mensaje = "No tengo el color registrado";
        }
    }
}
*/
if (color === "negro") mensaje = "Color negro";
else if (color === "verde") mensaje = "color verde";
else if (color === "azul") mensaje = "color azul";
else mensaje = "No tengo el color registrado";

/* 
==================Sentencia Switch ===================
La sentencia Switch evalua una expresion y se comprara
con el valor de cada instancia en "case" y se ejecuta las 
sentencias asociadas a ese "case" hasta que se encuentre 
la sentencia break o que finalice el Switch.

Sintaxis:
 Switch ( exprecion ){
    case valor1:
        sentencias;
        break;
    case valor2;
        sentencias;
        break;
    case valorN:
        sentencias;
        break;
    default:
        sentencias;
        opcional break;       
 }

*/

const person = "Gaby";
mensaje = "";

switch ( person ){
    case "Sergio":
        mensaje = "Hola Sergio, instructor";
        break;
    case "Tony":
        mensaje = "Ey, Tony";
        break;
    case "Gaby":
        mensaje = "Hola, Gaby";
        break;
    default:
        mensaje = "Persona desconocida";

    }

    console.log(mensaje);

//====================================================
/*
  Imprimir aprobado si la calificación es 7,8,9,10
  Imprimir reprobado fuera de esos números

  Realizarlo con switch dentro de una función.
  
*/

const califica = ( number ) =>{
    let message = "";
    switch( number ){
        case 10: case 9: case 8: case 7:
            message = "aprobado";
            break;
        default:
            message = "reprobado";
    }
    return  message;
}

console.log(`Persona con 9 : ${califica(9)}`); // aprobado
console.log(`Persona con 7 : ${califica(7)}`); // aprobado
console.log(`Persona con 5 : ${califica(5)}`); // reprobado

// =====================================================
/*
 Realizar dos funciones, una usando switch y otra con if-else if-else
  
 Donde verifique el mes del 1 al 12 y despliegue la estación del año.

 mes 12 , 1, 2 = Invierno
 mes 3, 4, 5 = Primavera
 mes 6, 7, 8 = Verano
 mes 9, 10, 11 = Otoño

*/
const mesSwitch = (numMes) => {
    let = message = "";
    switch (numMes) {
      case 12: case 1: case 2:
        message = "Invierno";
        break;
      case 3:  case 4: case 5:
        message = "Primavera";
        break;
      case 6: case 7: case 8:
        message = "Verano";
        break;
      case 9: case 10: case 11:
        message = "Otoño";
        break;
      default:
        message = "Mes no valido";
    }
    return message;
  };
  console.log(`Estacion del año (Switch): ${mesSwitch(5)}`);

  // ==============================================
  const mesIf = (numMes) => {
    let message = "";

    if (numMes === 1 || numMes === 2 || numMes === 12) {
      message = "Invierno"; // return "invierno"
    } else if (numMes >= 3 && numMes <= 5) {
      message = "Primavera"; // return "primavera"
    } else if (numMes >= 6 && numMes <= 8) {
      message = "Verano";
    } else if (numMes >= 9 && numMes <= 11) {
      message = "Otoño";
    } else {
      message = "Mes No Valido";
    }

    return message;
  };
  console.log(`Estacion del año (if): ${mesIf(1)}`);

  /*
    ============ Operador Ternario ===================
    Es el único operador de JavaScript que tiene 3 operandos.
    Generalmente se usa como opción simplificada a la 
    sentencia if-else.

    Sintaxis:

    condición ? expresionSiCondiciónEsVerdadera :  expresionSiCondicionEsFalsa;

  */

const subtotal = 1_000_000;
const esFrontera = true;
let total;

if ( esFrontera )
  total = subtotal * 1.08
else
  total = subtotal * 1.16

console.log(`El total es ${total}`);

// Aplicando el operador ternario
const totalConIVA = esFrontera ? subtotal * 1.08 : subtotal * 1.16;
console.log(`Operador ternario ${ totalConIVA }`);

// Reducción con el operador ternario
console.log(`Total : ${ subtotal * (esFrontera ? 1.08 : 1.16) }`);

/*  
  Evaluar la edad de una persona
  Si la persona es igual o mayor a 18 : puede votar
  En caso contrario: no puede votar

*/
const edad = 18;
console.log(`Tu ${edad >= 18 ? "puedes votar" : "no puedes votar"}`);


const mayorEdad = 'sí';
const menorEdad = 'no';
console.log(`Tu edad es: ${edad} y ${ edad >= 18 ? mayorEdad : menorEdad} puedes votar.`);