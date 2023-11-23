console.log("Js06 apiDOM");

/**
 * Modificar un elemento HTML por su ID
 */
const findElementById = () => {
    // Obtener el objeto(section) del DOM
    const titleRef = document.getElementById("title");
    console.log( titleRef.innerHTML );

    // Modificando el contenido
    titleRef.innerHTML = `
    <div class= "text-center">

        <h1 class='text-danger'>Clika Ch34</h1>
        <h2 class='text-warning'>En el barrio no hay reglas </h2>

    </div>
    `;
}

findElementById();

/**
 * Encontrar y modificar elementos por si tag 
 */

const changeElementByTagName = () => {
    // Obtener una coleccion de elementos 'section'
    const sectionsRef = document.getElementsByTagName("section");
    console.log( sectionsRef ); // 3 objetos del tipo section 

    //agregar estilo personalizado
    const color = "purple";
    for(let section of sectionsRef){
        section.style.border = `2px solid ${color}`;

    }
}

changeElementByTagName();

/**
 * Modificar elemento o elementos utilizando el selector universal
 */
const changeElementByQuerySelector = () =>{
    
    //Nos trae la referencia del primer elemento que cumpla con la condicion de selector universal 
    // const element = document.querySelector( "#description"); // Selector por ID
    // const element = document.querySelector( ".list"); // Selector por class
    // const element = document.querySelector( "p"); // Selector por tag
     const element = document.querySelector( ".info-section p"); // Selector por ID
     console.log(element);

}

changeElementByQuerySelector();


