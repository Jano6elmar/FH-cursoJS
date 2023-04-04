

const heroes = ['batman', 'superman', 'mujer maravilla', 'aquaman'];

//for tradicional

console.warn('for tradicional')
//sintaxis basica de un ciclo for
//la i de este ciclo solo vive dentro del scope del ciclo
for ( let i = 0; i < heroes.length ; i++) {
    console.log( heroes[i] );
}

console.warn('for in');
//esto es lo mismo de arriba pero en otra sintaxis
//la i de este ciclo solo vive dentro del scope del ciclo
for(let i in heroes ){
    console.log( heroes[i] );
} 

console.warn('For of')
//acá, por convencion, buena practica en vez de 
//indice i se pone el singular del arreglo
//en este caso seria heroe
//el for of, esxtrae el valor qeu se encuentra en el arreglo
// y lo regresa a la variable heroe , y en cada iteracion
//tendremos cada una de las posiciones del arreglo con el
//que se trabaja
for ( let heroe of heroes){
    console.log(heroe);
}





