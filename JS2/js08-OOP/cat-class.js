console.log("JS08-catClass");

/**
 * Clase felino
 * el nombre de la clase se recomienda la convencio UpperCamelCase
 */

class Felino {
//numPatas
// tieneGarras
//size

//El metodo constructor nos ayuda a incialiar los tributos objeto 
constructor (name){
    this.nombre = name; //let nombre 
    console.log(`Soy ${this.nombre} y tengo vida, ja - ja - ja`)
}

comer(){
    return `Soy ${this.nombre} y estoy comiendo`;
}

}

//Insertar la clase Felino
const chicharron =new Felino("Chicharron");
const wero = new Felino("Wero");
const pelusa = new Felino ("Pelusa");

//Uso de la funcion comer
console.log(pelusa.comer());
