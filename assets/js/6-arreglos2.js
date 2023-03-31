let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo juegos: ', juegos.length );

let primero = juegos[0]
let ultimo = juegos[juegos.length - 1]

console.log({primero, ultimo})

juegos.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr}) 
});

//juegos.forEach()
//forEach(callbackfn: (value: string, 
//index: number, 
//array: string[]) => void, 
//thisArg?: any): void

//añadir elemento al final del arreglo
let nuevaLongitud = juegos.push( 'F-Zero' );
console.log({nuevaLongitud, juegos} )

//añadir elemento al principio del arreglo
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({nuevaLongitud, juegos})


//borrar un juego al final
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos})

//borar elemento en posicion especifica
//creo variable
let position = 1;

console.log(juegos)
//splice(desde posision, cuantos elementos borro) borrar elementos
 let juegosBorrados = juegos.splice( position, 2);
console.log({juegosBorrados, juegos})

let metroidIndex = juegos.indexOf('Metroid');//CaSeSeNsItIvE
console.log({metroidIndex})
