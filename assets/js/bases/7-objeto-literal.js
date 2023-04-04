const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California',
    },
    'ultima-pelicula': 'Infinity War'
    //aquí no es recomendable poner espacios
    //es recomendable poner guiones
    //pero se entendería como resta
    //el caracter especial como el menos
    //hay que poner la propiedad con comilla 
    //simple o doble 
    //el guion bajo o el $ son permitidos
};

console.log( personaje );
console.log('Nombre', personaje.nombre );
console.log('Nombre', personaje['nombre'] );
console.log('Edad', personaje.edad );

console.log('Coors', personaje.coords );
console.log('Lat', personaje.coords.lat );

console.log('No. Trajes: ', personaje['trajes'].length)
console.log('No. Trajes: ', personaje.trajes.length)

console.log('último traje', personaje.trajes[ personaje.trajes.length - 1 ] );


const x = 'vivo';//puedo utilizarla para obtener info de un objeto
//ayuda a trabajar de forma dinamica con los pbjetos
console.log('Vivo', personaje[x] );

console.log('Última película: ', personaje["ultima-pelicula"] );
//aqui visual estudio me completa la propiedad
//despues de poner un punto que es para acceder a las propiedades
//y elegir la propiedad, la acomoda de esta manera para acceder 
//a ella


//Más detalles
//digamos que ya no me interesa mantener la edad uso:
//si quiero borrar la propiedad edad le pongo delete 
//antes de la propiedad
delete personaje.edad;
console.log( personaje );

//si pensamos que necesitamos trabajar el objeto como si fuera
//arreglo, es decir que cada propiedad con su valor, sean 
//pares de valores (posicion 0 y 1)
//object viene propio de JS
//busco el metodo entries y coloco el objeto personaje
const entriesPares = Object.entries( personaje );
console.log( 'entriesPares: ',entriesPares );
//lo que resulta es un arreglo que dentro tiene arreglos con
//dos posiciones, esto es util por si llego a necesitar barrer
//los elementos y obtener su valor


//si necesito crear una nueva propiedad en el objeto que va a suceder
//o que se va a crear en el momento de ejecuccion
//simplemente la definimos o la hacemos mencion

personaje.casado =  true;
const entriesPares2 = Object.entries( personaje );
console.log( 'entriesPares2: ',entriesPares2 );
//al imprimir nuevamente aparece casado
//aparecen tal como en el orden que fueron definidas en js
//y no en orden alfabetico



//si necesito que no se pueda mutar el objeto, o sea que una vez definido
//el objeto que yo no lo pueda cambiar
//en teoria esto   personaje.casado =  true; no debería ser posible, ni 
// delete, pero igualmente se agrega casado por eje
//al hacer que el objeto sea una constante, lo que permite es bloquear
//este tipo de asignacion 
//personaje = {} o [] o 123 o true o cualquier cosa
//asignaciones directas las marcará como error  
// personaje = true; entonces esto es algo que no se puede hacer...
//pero si puedo cambiar sus propiedades que tiene internamente...


//para hacer un bloqueo de las propiedades o las modificaciones
Object.freeze( personaje );//
// creamos nuevas propiedades
personaje.dinero = 10000000000;//no aparece la propiedad al imprimir en consola
personaje.casado = false;//modificar una propiedad tampoco se puede hacer
//inconveniente, Object.freeze simplemente congela las asignaciones
//a cada una de las propiedades, directa pero no a los objetos que están 
//dentro de del objeto direccion por ej, no puedo cambiar a lo que apunta 
//direccion pero si a lo que apuntan esas propiedades
personaje.direccion.ubicacion = 'Costa Rica';
//si necesito bloquear ese objeto tambien entonces puedo llamar usar
//Object.freeze sobre el objeto direccion
console.log( personaje );



//digamos que necesito un listado de todas las propiedades del objeto

const propiedades = Object.getOwnPropertyNames( personaje );
//lo que devuelve es un arreglo con los nombres de las propiedades
//en el orden que fueron creadas
// si necesito los valores de las propiedades
//en vez de el metodo anterior solo pongo values

const valores = Object.values( personaje );

console.log({ propiedades, valores });
//nota importante, estas son las propiedades
// y meytod casi que en el dia a dia cuando
//trabajamos en js con objetos

//mas info sobre propiedades y objetos en js
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object





