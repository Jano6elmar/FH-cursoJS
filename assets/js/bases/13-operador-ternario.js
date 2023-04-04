/* 
dias de semana se abre a las 11
fines de semana a las 9
*/

//entrar a un sitio web, para consultar si está abierto 
//hoy

const dia = 1;//0: domingo, 1:lunes....
//const dia = 4;
const horaActual = 10; 

let horaApertura;
let mensaje;//está abierto, está cerrado, hoy abrimos a las XX

//primero evaluo el dia
// no podria ir && entremedio porque el dia es uno no mas
if(dia === 0 || dia === 6 ) {
    console.log('fin de semana')
    horaApertura = 9;
} else { 
    console.log('dia de semana')
    horaApertura = 11;
}

if ( horaActual >= horaApertura) {
    mensaje = 'Está abierto'
}else {
    mensaje = `esta cerrado, hoy abrimos a las ${horaApertura}`;
}

console.log({horaApertura, mensaje})


//todo lo anterior se puede reducir de la siguiente manera
if( [0,6].includes( dia) ) {

}
//metodo que tienen los arreglos para indicar o preguntar
//si algo existe dentro de ese arreglo 
if([0,6].includes( dia) ) {
    console.log('fin de semana')
    horaApertura = 9;
} else { 
    console.log('dia de semana')
    horaApertura = 11;
}

console.log('el otro metodo',{horaApertura, mensaje})

//aun el codigo es muy grande, ahora es donde
//viene el operador ternario
//todo lo siguiente se puede reducir la expresion ...
if([0,6].includes( dia) ) {
    console.log('fin de semana')
    horaApertura = 9;
} else { 
    console.log('dia de semana')
    horaApertura = 11;
}
//....//el signo ? es la condicion ternaria  
horaApertura = ( [0,6].includes(dia  )) ? 9 : 11 

if ( horaActual >= horaApertura) {
    mensaje = 'Está abierto'
}else {
    mensaje = `esta cerrado, hoy abrimos a las ${horaApertura}`;
}
console.log('otro metodo',{horaApertura, mensaje}) 

//

mensaje = (horaActual >= horaApertura ) ? 'Está abierto' : `esta cerrado, hoy abrimos a las ${horaApertura}`; 

console.log('otro metodo1',{horaApertura, mensaje}) 
